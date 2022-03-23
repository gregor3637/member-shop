import {
  getTruthyKeysCount,
  hasTruthyOrNonEmptyArrayOrObject,
} from "../../CommonConditions/CommonConditions";
import { toggleBoolInObject } from "../../CommonConditions/CommonReducerMethods";
import getFilterDataObject from "../../FilterDataObject";

const options = {
  Ethereum: false,
  Polygon: false,
  Klaytn: false,
};

const optionKeys = Object.keys(options);

const assetCardConditionFulfilled = (assetCard, filterState) => {
  let selected = optionKeys.filter((o) => filterState.blockchain[o]);
  return selected.includes(assetCard.contract.blockchain);
};

const data = getFilterDataObject(
  options,
  hasTruthyOrNonEmptyArrayOrObject,
  assetCardConditionFulfilled,
  getTruthyKeysCount,
  toggleBoolInObject
);

export default data;
