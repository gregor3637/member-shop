import React from "react";
import FiltersContext from "../../store/Marketplace/Filters/FiltersContext";

export default function useMarketFiltersContext() {
  const context = React.useContext(FiltersContext);
  if (context === undefined) {
    throw new Error("No such Context");
  }
  return context;
}
