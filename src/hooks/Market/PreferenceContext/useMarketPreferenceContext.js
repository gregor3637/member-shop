import React from "react";
import PreferenceContext from "./PreferenceContext";

export default function useMarketPreferenceContext() {
  const context = React.useContext(PreferenceContext);
  if (context === undefined) {
    throw new Error("No such Context");
  }
  return context;
}
