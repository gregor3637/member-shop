import filtersData from "../../../store/Marketplace/Filters/FiltersData";

const initialState = Object.keys(filtersData).reduce((acc, filterName) => {
  acc[filterName] = filtersData[filterName].value;
  return acc;
}, {});

const reducerMethods = Object.keys(filtersData).reduce(
  (acc, filterName) => {
    acc[filterName] = filtersData[filterName].reducerFn;
    return acc;
  },
  {
    reset: (state, action) => {
      if (!action.state) return initialState;

      return {
        ...state,
        [action.state]: initialState[action.state],
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
