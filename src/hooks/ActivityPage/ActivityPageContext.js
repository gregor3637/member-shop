import React from "react";

import reducer from "./ActivityPageReducer";

const ActivityPageContext = React.createContext({
  state: reducer.initialState,
});

export const ActivityPageContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(
    reducer.reducer,
    reducer.initialState
  );
  // NOTE: you *might* need to memoize this value
  // Learn more in http://kcd.im/optimize-context

  const value = { state, dispatch };
  return (
    <ActivityPageContext.Provider value={value}>
      {children}
    </ActivityPageContext.Provider>
  );
};

export default ActivityPageContext;
