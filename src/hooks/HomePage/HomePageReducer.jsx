import { selectOneFromArray } from "../../store/Marketplace/Filters/CommonConditions/CommonReducerMethods";

const initialState = {
  categoryType: {
    options: ["all", "art", "sports"],
    selected: "all",
  },
  categoryTimeHorizon: {
    options: ["24 hours", "7 days", "30 days"],
    selected: "24 hours",
  },
  collectionsTimeHorizon: {
    options: ["day", "week", "month"],
    selected: "day",
  },
  trendingAuction: {
    options: ["all", "Ethereum", "Solana", "Polygon"],
    selected: "all",
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case "categoryType":
      return selectOneFromArray(state, action);

    case "categoryTimeHorizon":
      return selectOneFromArray(state, action);
      
    case "collectionsTimeHorizon":
      return selectOneFromArray(state, action);

    case "trendingAuction":
      return selectOneFromArray(state, action);

    default: {
      throw new Error(
        `HomePageReducer | Unhandled action type: ${action.type}`
      );
    }
  }
};

const HomePageReducer = {
  initialState: initialState,
  reducer,
};

export default HomePageReducer;
