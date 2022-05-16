import React from "react";
import ActivityContext from "./ActivityPageContext";

export default function useActivityPageContext() {
  const context = React.useContext(ActivityContext);
  if (context === undefined) {
    throw new Error("No such Context ActivityContext");
  }
  return context;
}


