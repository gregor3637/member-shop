import {
  hasTruthyOrNonEmptyArrayOrObject,
  getTruthyKeysCount,
} from "../../CommonConditions/CommonConditions";
import { chooseOneInObject } from "../../CommonConditions/CommonReducerMethods";
import getFilterDataObject from "../../FilterDataObject";

const options = {
  Bundles: false,
  SingleItems: false,
};

const optionKeys = Object.keys(options);

const assetCardConditionFulfilled = (assetCard, filterState) => {
  const filterTypes = {
    Bundles: (assetCard) => Boolean(assetCard.items) === true,
    SingleItems: (assetCard) => Boolean(assetCard.items) === false,
  };

  let selectedType = optionKeys.find((o) => filterState.assetType[o]);
  let isMinCriteriaMet = filterTypes[selectedType](assetCard);

  return isMinCriteriaMet;
};

const data = getFilterDataObject(
  options,
  hasTruthyOrNonEmptyArrayOrObject,
  assetCardConditionFulfilled,
  getTruthyKeysCount,
  chooseOneInObject
);

export default data;
