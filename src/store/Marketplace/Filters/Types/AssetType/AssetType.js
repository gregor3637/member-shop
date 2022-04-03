import GeneralGroup from "../../../../../components/pages/MarketplacePage/FilterMenu/ActiveFilters/Filters/GeneralGroup/GeneralGroup";
import {
  hasTruthyOrNonEmptyArrayOrObject,
  getTruthyKeysCount,
} from "../../CommonConditions/CommonConditions";
import {
  chooseOneInObject,
  extractInitialValuePerKey,
} from "../../CommonConditions/CommonReducerMethods";
import getFilterDataObject from "../../FilterDataObject";
import FilterMenuAssetType from "./FilterMenuAssetType";

const optionsData = {
  Bundles: {
    initValue: false,
    urlLabel: "BUNDLE",
    getFilterCondition: (assetCard) => Boolean(assetCard.bundleItems) === true,
  },
  "Single Items": {
    initValue: false,
    urlLabel: "SINGLE_ITEM",
    getFilterCondition: (assetCard) => Boolean(assetCard.bundleItems) === false,
  },
};

const optionKeys = Object.keys(optionsData);

const optionsDataKeyByUrlLabel = optionKeys.reduce((acc, key) => {
  acc[optionsData[key].urlLabel] = key;
  return acc;
}, {});

const isFilterConditionsFilfillingItem = (assetCard, filterState) => {
  let selectedType = optionKeys.find((o) => filterState.assetType[o]);
  const condition = optionsData[selectedType].getFilterCondition;
  let isMinCriteriaMet = condition(assetCard);

  return isMinCriteriaMet;
};

const activeFilters = (subFilterState, dispatch) => {
  return (
    <GeneralGroup
      context={Object.keys(subFilterState).filter((x) => subFilterState[x])}
      contextName="assetType"
      label="Asset Type"
      dispatch={dispatch}
    />
  );
};

const deriveUrlSearchPropsFromSubState = (subState) => {
  const searchProps = Object.entries(subState)
    .filter(([k, v]) => !!v)
    .map(([k, v], i) => {
      const val = optionsData[k].urlLabel;
      return `search[assetType][${i}]=${val}`;
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
  reducerFn: chooseOneInObject,
  reducerInitValues: extractInitialValuePerKey(optionsData),
  filterMenuComponent: <FilterMenuAssetType />,
  activeFilterComponentFunc: activeFilters,
  deriveUrlSearchPropsFromSubState,
  deriveSubStateFromSearchParamsWithSamePrimaryProp,
};

export default getFilterDataObject(data);
