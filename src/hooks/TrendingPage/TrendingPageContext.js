import React from "react";

import reducer from "./TrendingPageReducer";

const TrendingPageContext = React.createContext({
  state: reducer.initialState,
});

export const TrendingPageContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(
    reducer.reducer,
    reducer.initialState
  );
  // NOTE: you *might* need to memoize this value
  // Learn more in http://kcd.im/optimize-context

  const value = { state, dispatch };
  return (
    <TrendingPageContext.Provider value={value}>
      {children}
    </TrendingPageContext.Provider>
  );
};

export default TrendingPageContext;
