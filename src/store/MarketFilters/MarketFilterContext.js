import React from "react";

import { reducerInfo } from "./reducerInfo";

const MarketFilterContext = React.createContext({
  state: reducerInfo.initialState,
});

export const MarketFilterProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(
    reducerInfo.reducer,
    reducerInfo.initialState
  );
  // NOTE: you *might* need to memoize this value
  // Learn more in http://kcd.im/optimize-context
  const value = { state, dispatch };
  return (
    <MarketFilterContext.Provider value={value}>
      {children}
    </MarketFilterContext.Provider>
  );
};

export default MarketFilterContext;
