import { selectOneFromArray } from "../../store/Marketplace/Filters/CommonConditions/CommonReducerMethods";

const initialState = {
  category: {
    options: ["all", "following", "my actions", "my bids"],
    selected: "all",
  },
  filter: {
    options: [
      "all",
      "listings",
      "purchase",
      "sales",
      "transfer",
      "burns",
      "likes",
      "bids",
      "followings",
    ],
    selected: "all",
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case "category":
      return selectOneFromArray(state, action);

    case "filter":
      return selectOneFromArray(state, action);

    default: {
      throw new Error(
        `ActivityPageReducer | Unhandled action type: ${action.type}`
      );
    }
  }
};

const ActivityPageReducer = {
  initialState: initialState,
  reducer,
};

export default ActivityPageReducer;
