import React from "react";
import TrendingContext from "./TrendingPageContext";

export default function useTrendingPageContext() {
  const context = React.useContext(TrendingContext);
  if (context === undefined) {
    throw new Error("No such Context");
  }
  return context;
}
