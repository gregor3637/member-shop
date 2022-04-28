import React from "react";
import AuctionContext from "./HomePageContext";

export default function useHomePageContext() {
  const context = React.useContext(AuctionContext);
  if (context === undefined) {
    throw new Error("No such Context");
  }
  return context;
}
