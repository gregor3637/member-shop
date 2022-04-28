import { selectOneFromArray } from "../../store/Marketplace/Filters/CommonConditions/CommonReducerMethods";

const initialState = {
  category: {
    options: ["all", "art", "sports"],
    selected: "all",
  },
  timeHorizon: {
    options: ["24 hours", "7 days", "30 days"],
    selected: "24 hours",
  },
  trendingAuction: {
    options: ["all", "Ethereum", "Solana", "Polygon"],
    selected: "all",
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case "category":
      return selectOneFromArray(state, action);

    case "timeHorizon":
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
