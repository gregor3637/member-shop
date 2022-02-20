import getFilterDataObject from "../../FilterDataObject";

const value = {
  currency: "",
  min: "",
  max: "",
};

const assetCardConditionFulfilled = (assetCard, filterState) => {
  if (!assetCard.price) return false;

  const isSameCurrency = assetCard.price.currency === filterState.currency;
  const isAssetCardAmountAboveMin = assetCard.price.amount >= filterState.min;
  const isAssetCardAmountBelowMax = assetCard.price.amount <= filterState.max;

  return (
    isSameCurrency && isAssetCardAmountAboveMin && isAssetCardAmountBelowMax
  );
};

const reducerFn = (state, action) => {
  return {
    ...state,
    [action.type]: {
      currency: action.selected.currency,
      min: action.selected.min,
      max: action.selected.max,
    },
  };
};

const data = getFilterDataObject(
  value,
  (state) => Boolean(state.currency),
  assetCardConditionFulfilled,
  (state) => (Boolean(state.currency) ? 1 : 0),
  reducerFn
);

export default data;
