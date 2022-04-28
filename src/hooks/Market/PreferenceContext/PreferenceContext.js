import React from "react";

import { preferenceReducer as reducer } from "./preferenceReducer";

const PreferenceContext = React.createContext({
  state: reducer.initialState,
});

export const PreferenceContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(
    reducer.reducer,
    reducer.initialState
  );
  // NOTE: you *might* need to memoize this value
  // Learn more in http://kcd.im/optimize-context
  
  const value = { state, dispatch };
  return (
    <PreferenceContext.Provider value={value}>
      {children}
    </PreferenceContext.Provider>
  );
};

export default PreferenceContext;
