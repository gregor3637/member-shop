import filtersData from "../../../store/Marketplace/Filters/FiltersData";

console.log('--------- filtersData ', filtersData);



const initialState = Object.keys(filtersData).reduce((acc, filterName) => {
  acc[filterName] = filtersData[filterName].reducerInitValues;
  return acc;
}, {});

const reducerMethods = Object.keys(filtersData).reduce(
  (acc, filterName) => {
    acc[filterName] = filtersData[filterName].reducerFn;
    return acc;
  },
  {
    reset: (state, action) => {
      if (!action.value) return initialState;
      return {
        ...state,
        [action.value]: initialState[action.value],
      };
    },
    urlDerivedState: (state, action) => {
      if (!action.value) return initialState;

      return {
        ...state,
        ...action.value,
      };
    },
    default: (state, action) => {
      throw new Error(
        `MarketFilterContext | Unhandled action type: ${action.type}`
      );
    },
  }
);

const reducer = (state, action) => {
  let reducerFn = reducerMethods[action.type] ?? reducerMethods["default"];

  let result = reducerFn(state, action);

  return result;
};

export const filtersReducer = {
  initialState: initialState,
  reducer,
};
