import {
  getTruthyKeys,
  getTruthyKeysCount,
  hasTruthyOrNonEmptyArrayOrObject,
} from "../../CommonConditions/CommonConditions";
import { toggleBoolInObject } from "../../CommonConditions/CommonReducerMethods";
import getFilterDataObject from "../../FilterDataObject";

const value = {
  Art: false,
  Sports: false,
};

const assetCardConditionFulfilled = (assetCard, filterState) => {
  //assetCard has atleast one of the selected 'categories'
  const subState = filterState["category"];
  const truthyKeys = getTruthyKeys(subState);

  const isMinCriteriaMet = truthyKeys.some((x) =>
    assetCard.summary.category.includes(x)
  );

  return isMinCriteriaMet;
};

const data = getFilterDataObject(
  value,
  hasTruthyOrNonEmptyArrayOrObject,
  assetCardConditionFulfilled,
  getTruthyKeysCount,
  toggleBoolInObject
);

export default data;
