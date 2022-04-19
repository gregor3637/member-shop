import GeneralGroup from "../../../../../components/pages/MarketplacePage/FilterMenu/ActiveFilters/Filters/GeneralGroup/GeneralGroup";
import SaleTypeSVG from "../../../../../img/svg/Drawer/SaleTypeSVG";
import {
  getTruthyKeysCount,
  hasTruthyOrNonEmptyArrayOrObject,
} from "../../CommonConditions/CommonConditions";
import {
  extractInitialValuePerKey,
  toggleBoolInObject,
} from "../../CommonConditions/CommonReducerMethods";
import getFilterDataObject from "../../FilterDataObject";
import FilterMenuSaleType from "./FilterMenuSaleType";

const optionsData = {
  "Has Offers": {
    initValue: false,
    urlLabel: "HAS_OFFERS",
    getFilterCondition: (assetCard) => assetCard.bids.isAllowed,
  },
  New: {
    initValue: false,
    urlLabel: "NEW",
    getFilterCondition: (assetCard, days = 10) => {
      const currentListing =
        assetCard.listings?.[assetCard.listings.length - 1];

      if (currentListing) {
        let listingDate = new Date(currentListing.addDate).getTime();
        let deadline = new Date(
          Date.now() - days * 24 * 60 * 60 * 1000
        ).getTime();

        return listingDate - deadline >= 0;
      }

      return false;
    },
  },
  "Buy Now": {
    initValue: false,
    urlLabel: "BUY_NOW",
    getFilterCondition: (assetCard) => Boolean(assetCard.price?.currency),
  },
  "On Auction": {
    initValue: false,
    urlLabel: "ON_AUCTION",
    getFilterCondition: (assetCard) => {
      // let isOngoing =
      //   Boolean(assetCard.auction) &&
      //   new Date(assetCard.auction).getTime() - new Date(Date.now()).getTime() >
      //     0;
      let isOngoing = Boolean(assetCard.auction);

      return isOngoing;
    },
  },
};

const optionKeys = Object.keys(optionsData);

const optionsDataKeyByUrlLabel = optionKeys.reduce((acc, key) => {
  acc[optionsData[key].urlLabel] = key;
  return acc;
}, {});

const isFilterConditionsFilfillingItem = (assetCard, filterState) => {
  let selectedTypes = optionKeys.filter((key) => filterState.saleType[key]);
  let isMinCriteriaMet = selectedTypes.some((t) => {
    const condition = optionsData[t].getFilterCondition;
    return condition(assetCard);
  });

  return isMinCriteriaMet;
};

const activeFilters = (subFilterState, dispatch) => {
  return (
    <GeneralGroup
      context={Object.keys(subFilterState).filter((x) => subFilterState[x])}
      contextName="saleType"
      label="Sale Type"
      dispatch={dispatch}
    />
  );
};

const deriveUrlSearchPropsFromSubState = (subState) => {
  const searchProps = Object.entries(subState)
    .filter(([k, v]) => !!v)
    .map(([k, v], i) => {
      const val = optionsData[k].urlLabel;
      return `search[saleType][${i}]=${val}`;
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
  filterMenuComponent: <FilterMenuSaleType />,
  filterIcon: <SaleTypeSVG />,
  activeFilterComponentFunc: activeFilters,
  deriveUrlSearchPropsFromSubState,
  deriveSubStateFromSearchParamsWithSamePrimaryProp,
};

export default getFilterDataObject(data);
