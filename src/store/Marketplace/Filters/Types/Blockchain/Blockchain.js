import GeneralGroup from "../../../../../components/pages/MarketplacePage/FilterMenu/ActiveFilters/Filters/GeneralGroup/GeneralGroup";
import {
  getTruthyKeysCount,
  hasTruthyOrNonEmptyArrayOrObject,
} from "../../CommonConditions/CommonConditions";
import {
  extractInitialValuePerKey,
  toggleBoolInObject,
} from "../../CommonConditions/CommonReducerMethods";
import getFilterDataObject from "../../FilterDataObject";
import FilterMenuBlockchain from "./FilterMenuBlockchain";

const optionsData = {
  Ethereum: {
    initValue: false,
    urlLabel: "ETHEREUM",
  },
  Polygon: {
    initValue: false,
    urlLabel: "POLYGON",
  },
  Klaytn: {
    initValue: false,
    urlLabel: "KLAYTN",
  },
};

const optionKeys = Object.keys(optionsData);

const optionsDataKeyByUrlLabel = optionKeys.reduce((acc, key) => {
  acc[optionsData[key].urlLabel] = key;
  return acc;
}, {});

const isFilterConditionsFilfillingItem = (assetCard, filterState) => {
  let selected = optionKeys.filter((o) => filterState.blockchain[o]);
  return selected.includes(assetCard.contract.blockchain);
};

const activeFilters = (subFilterState, dispatch) => {
  return (
    <GeneralGroup
      context={Object.keys(subFilterState).filter((x) => subFilterState[x])}
      contextName="blockchain"
      label="Blockchain"
      dispatch={dispatch}
    />
  );
};

const deriveUrlSearchPropsFromSubState = (subState) => {
  const searchProps = Object.entries(subState)
    .filter(([k, v]) => !!v)
    .map(([k, v], i) => {
      const val = optionsData[k].urlLabel;
      return `search[blockchain][${i}]=${val}`;
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
  filterMenuComponent: <FilterMenuBlockchain />,
  activeFilterComponentFunc: activeFilters,
  deriveUrlSearchPropsFromSubState,
  deriveSubStateFromSearchParamsWithSamePrimaryProp,
};

export default getFilterDataObject(data);
