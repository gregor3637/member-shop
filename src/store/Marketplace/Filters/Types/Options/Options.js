import {
  getTruthyKeysCount,
  hasTruthyOrNonEmptyArrayOrObject,
} from "../../CommonConditions/CommonConditions";
import { toggleBoolInObject } from "../../CommonConditions/CommonReducerMethods";
import getFilterDataObject from "../../FilterDataObject";

const options = {
  "Verified only": false,
  "Show NSFW": false,
  "Show lazy minted": false,
};

const optionKeys = Object.keys(options);

const assetCardConditionFulfilled = (assetCard, filterState) => {
  const filterTypes = {
    "Verified only": (assetCard) => assetCard.general.project.isVerified,
    "Show NSFW": (assetCard) => assetCard.general.isAdultContent,
    "Show lazy minted": (assetCard) => assetCard.general.isLazyMinted,
  };

  let selectedOptions = optionKeys.filter((x) => filterState.options[x]);
  let isMinCriteriaMet = selectedOptions.some((o) => filterTypes[o](assetCard));

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