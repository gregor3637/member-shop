import React from "react";
import MarketFilterContext from "../../store/MarketFilters/MarketFilterContext";

export default function useMarketFilters() {
  const context = React.useContext(MarketFilterContext);
  if (context === undefined) {
    throw new Error("useCount must be used within a CountProvider");
  }
  return context;
}
