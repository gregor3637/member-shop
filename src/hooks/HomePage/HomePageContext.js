import React from "react";

import reducer from "./HomePageReducer";

const HomePageContext = React.createContext({
  state: reducer.initialState,
});

export const HomePageContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(
    reducer.reducer,
    reducer.initialState
  );
  // NOTE: you *might* need to memoize this value
  // Learn more in http://kcd.im/optimize-context

  const value = { state, dispatch };
  return (
    <HomePageContext.Provider value={value}>
      {children}
    </HomePageContext.Provider>
  );
};

export default HomePageContext;
