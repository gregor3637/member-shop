import getFilterDataObject from "../../FilterDataObject";

const value = {
  currency: "",
  min: "",
  max: "",
};

const assetCardConditionFulfilled = (assetCard, filterState) => {
  if (!assetCard.price) return false;

  const isSameCurrency = assetCard.price.currency === filterState.price.currency;
  const isAmountEntered = Boolean(filterState.price.min) || Boolean(filterState.price.max)
  const isSatisfyingMinCondition = filterState.price.min = "" || assetCard.price.amount >= filterState.price.min;
  const isSatisfyingMaxCondition = filterState.price.max = "" || assetCard.price.amount <= filterState.price.max;
  
  return (
    isSameCurrency && isAmountEntered && (isSatisfyingMinCondition || isSatisfyingMaxCondition)
  );
};

const reducerFn = (state, action) => {

  console.log('reducerFn action ', action);
  console.log('reducerFn action.type ', action.type);
  console.log('reducerFn action.value.min ', action.value.min);
  console.log('reducerFn action.value.max ', action.value.max);

  let data = {
    ...state,
    // [action.type]: {
    //   currency: action.value.currency,
    //   min: action.value.min,
    //   max: action.value.max,
    // },
  };

  data.price.currency =  action.value.currency;
  data.price.min = action.value.min;
  data.price.max = action.value.max;
  
  console.log('reducerFn data ', data);

  return data
};

const data = getFilterDataObject(
  value,
  (state) => Boolean(state.currency),
  assetCardConditionFulfilled,
  (state) => (Boolean(state.currency) ? 1 : 0),
  reducerFn
);

export default data;
