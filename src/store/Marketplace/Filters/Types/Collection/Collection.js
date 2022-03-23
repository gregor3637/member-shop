import { hasTruthyOrNonEmptyArrayOrObject } from "../../CommonConditions/CommonConditions";
import { toggleItemInArray } from "../../CommonConditions/CommonReducerMethods";
import getFilterDataObject from "../../FilterDataObject";

const value = [];

const assetCardConditionFulfilled = (assetCard, filterState) => {
  let isMinCriteriaMet = filterState.collections.includes(
    assetCard.project.name
  );

  return isMinCriteriaMet;
};

const reducerFn = (state, action) => {
  if (Array.isArray(action.value)) {
    return {
      ...state,
      [action.type]: action.value,
    };
  }

  return toggleItemInArray(state, action);
};

const data = getFilterDataObject(
  value,
  hasTruthyOrNonEmptyArrayOrObject,
  assetCardConditionFulfilled,
  (state) => state.length,
  reducerFn
);

export default data;
