import { getTruthyKeysCount, hasTruthyOrNonEmptyArrayOrObject } from "../../CommonConditions/CommonConditions";
import { toggleBoolInObject } from "../../CommonConditions/CommonReducerMethods";
import getFilterDataObject from "../../FilterDataObject";

const options = {
  "Has Offers": false,
  New: false,
  "Buy Now": false,
  "On Auction": false,
};

const optionKeys = Object.keys(options);

const assetCardConditionFulfilled = (assetCard, filterState) => {
  const filterTypes = {
    "Has Offers": (assetCard) => assetCard.bids.isAllowed,
    New: (assetCard, days = 10) => {
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
    "Buy Now": (assetCard) => Boolean(assetCard.items),
    "On Auction": (assetCard) => {
      let isOngoing =
        Boolean(assetCard.auction) &&
        new Date(assetCard.auction).getTime() - new Date(Date.now()).getTime() >
          0;

      return isOngoing;
    },
  };

  let selectedTypes = optionKeys.filter((key) => filterState.saleType[key]);
  let isMinCriteriaMet = selectedTypes.some((t) => filterTypes[t](assetCard));

  return isMinCriteriaMet;
};

const data = getFilterDataObject(
  options,
  hasTruthyOrNonEmptyArrayOrObject,
  assetCardConditionFulfilled,
  getTruthyKeysCount,
  toggleBoolInObject
);


export default data;
