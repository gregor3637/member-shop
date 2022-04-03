import GeneralGroup from "../../../../../components/pages/MarketplacePage/FilterMenu/ActiveFilters/Filters/GeneralGroup/GeneralGroup";
import {
  getTruthyKeys,
  getTruthyKeysCount,
  hasTruthyOrNonEmptyArrayOrObject,
} from "../../CommonConditions/CommonConditions";
import {
  extractInitialValuePerKey,
  toggleBoolInObject,
} from "../../CommonConditions/CommonReducerMethods";
import getFilterDataObject from "../../FilterDataObject";
import FilterMenuCategory from "./FilterMenuCategory";

const optionsData = {
  art: {
    initValue: false,
    urlLabel: "ART",
  },
  sports: {
    initValue: false,
    urlLabel: "SPORTS",
  },
};

const optionKeys = Object.keys(optionsData);

const optionsDataKeyByUrlLabel = optionKeys.reduce((acc, key) => {
  acc[optionsData[key].urlLabel] = key;
  return acc;
}, {});

const isFilterConditionsFilfillingItem = (assetCard, filterState) => {
  //assetCard has atleast one of the selected 'categories'
  const subState = filterState["category"];
  const truthyKeys = getTruthyKeys(subState);

  const isMinCriteriaMet = truthyKeys.some((x) =>
    assetCard.summary.category.includes(x)
  );

  return isMinCriteriaMet;
};

const activeFilters = (subFilterState, dispatch) => {
  return (
    <GeneralGroup
      context={Object.keys(subFilterState).filter((x) => subFilterState[x])}
      contextName="category"
      label="Category"
      dispatch={dispatch}
    />
  );
};

const deriveUrlSearchPropsFromSubState = (subState) => {
  const searchProps = Object.entries(subState)
    .filter(([k, v]) => !!v)
    .map(([k, v], i) => {
      const val = optionsData[k].urlLabel;
      return `search[category][${i}]=${val}`;
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

const data = {
  isFilterRelevantBasedOnSubState: hasTruthyOrNonEmptyArrayOrObject,
  isFilterConditionsFilfillingItem,
  getActiveSubfiltersCount: getTruthyKeysCount,
  reducerFn: toggleBoolInObject,
  reducerInitValues: extractInitialValuePerKey(optionsData),
  filterMenuComponent: <FilterMenuCategory />,
  activeFilterComponentFunc: activeFilters,
  deriveUrlSearchPropsFromSubState,
  deriveSubStateFromSearchParamsWithSamePrimaryProp,
};

export default getFilterDataObject(data);
