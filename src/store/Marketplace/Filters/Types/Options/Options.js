import GeneralGroup from "../../../../../components/pages/MarketplacePage/FilterMenu/ActiveFilters/Filters/GeneralGroup/GeneralGroup";
import FilterMenuOptions from "./FilterMenuOptions";
import {
  getTruthyKeysCount,
  hasTruthyOrNonEmptyArrayOrObject,
} from "../../CommonConditions/CommonConditions";
import {
  extractInitialValuePerKey,
  toggleBoolInObject,
} from "../../CommonConditions/CommonReducerMethods";
import getFilterDataObject from "../../FilterDataObject";

const optionsData = {
  "Verified only": {
    initValue: false,
    urlLabel: "VERIFIED_ONLY",
    getFilterCondition: (assetCard) => assetCard.project.isVerified,
  },
  "Show NSFW": {
    initValue: false,
    urlLabel: "SHOW_NSFW",
    getFilterCondition: (assetCard) => assetCard.summary.isNSFW,
  },
  "Show lazy minted": {
    initValue: false,
    urlLabel: "SHOW_LAZY_MINTED",
    getFilterCondition: (assetCard) => assetCard.summary.isLazyMinted,
  },
};

const optionKeys = Object.keys(optionsData);

const optionsDataKeyByUrlLabel = optionKeys.reduce((acc, key) => {
  acc[optionsData[key].urlLabel] = key;
  return acc;
}, {});

const isFilterConditionsFilfillingItem = (item, state) => {
  let isFulfilled = optionKeys
    .filter((x) => state.options[x])
    .some((n) => optionsData[n].getFilterCondition(item));

  return isFulfilled;
};

const activeFilters = (subFilterState, dispatch) => {
  return (
    <GeneralGroup
      context={Object.keys(subFilterState).filter((x) => subFilterState[x])}
      contextName="options"
      label="Optionssz"
      dispatch={dispatch}
    />
  );
};

const deriveUrlSearchPropsFromSubState = (subState) => {
  const searchProps = Object.entries(subState)
    .filter(([k, v]) => !!v)
    .map(([k, v], i) => {
      const val = optionsData[k].urlLabel;
      return `search[options][${i}]=${val}`;
    })
    ?.join("&");

  return searchProps;
};

const deriveSubStateFromSearchParamsWithSamePrimaryProp = (searchProps) => {
  let price = searchProps.reduce((acc, cur) => {
    const urlLabel = cur.split("=")[1];
    let key = optionsDataKeyByUrlLabel[urlLabel];
    acc[key] = true;
    return acc;
  }, {});

  return price;
};

let data = {
  isFilterRelevantBasedOnSubState: hasTruthyOrNonEmptyArrayOrObject,
  isFilterConditionsFilfillingItem,
  getActiveSubfiltersCount: getTruthyKeysCount,
  reducerFn: toggleBoolInObject,
  reducerInitValues: extractInitialValuePerKey(optionsData),
  filterMenuComponent: <FilterMenuOptions />,
  activeFilterComponentFunc: activeFilters,
  deriveUrlSearchPropsFromSubState,
  deriveSubStateFromSearchParamsWithSamePrimaryProp,
};

export default getFilterDataObject(data);
