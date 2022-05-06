import { selectOneFromArray } from "../../store/Marketplace/Filters/CommonConditions/CommonReducerMethods";

const initialState = {
  categoryType: {
    options: ["all categories", "art", "sports"],
    selected: "all categories",
  },
  categoryTimeHorizon: {
    options: ["all time", "24 hours", "7 days", "30 days"],
    selected: "all time",
  },
  blockchain: {
    options: ["all blockchains", "ethereum", "solana", "polygon"],
    selected:"all blockchains",
  },
  type: {
    options: ["collection", "creators", "collectors", "auctions"],
    selected: "collection",
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case "categoryType":
      return selectOneFromArray(state, action);

    case "categoryTimeHorizon":
      return selectOneFromArray(state, action);

    case "blockchain":
      return selectOneFromArray(state, action);

    case "type":
      return selectOneFromArray(state, action);

    default: {
      throw new Error(
        `TrendingPageReducer | Unhandled action type: ${action.type}`
      );
    }
  }
};

const TrendingPageReducer = {
  initialState: initialState,
  reducer,
};

export default TrendingPageReducer;
