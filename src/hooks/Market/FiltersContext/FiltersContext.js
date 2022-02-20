import React from "react";

// import { filtersReducer as reducer } from "./FiltersReducer";
import { filtersReducer as reducer } from "./FiltersReducerNew";

const FiltersContext = React.createContext({
  state: reducer.initialState,
});

export const FiltersContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(
    reducer.reducer,
    reducer.initialState
  );
  // NOTE: you *might* need to memoize this value
  // Learn more in http://kcd.im/optimize-context
  const value = { state, dispatch };
  return (
    <FiltersContext.Provider value={value}>{children}</FiltersContext.Provider>
  );
};

export default FiltersContext;
