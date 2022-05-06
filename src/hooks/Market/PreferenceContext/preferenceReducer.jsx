// const emptyState = {
//   displayType: "",
//   searchQuery: "",
//   sortingOption: "",
//   tableColumns: {},
//   showFavoritesOnly: false,
// };

const dummyState = {
  displayType: "Table",
  // displayType: "Card",
  searchQuery: "",
  sortingOption: "",
  tableColumns: [],
  showFavoritesOnly: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "displayType":
      return { ...state, [action.type]: action.value };

    case "searchQuery":
      return { ...state, [action.type]: action.value };

    case "sortingOption":
      return { ...state, [action.type]: action.value };

    case "tableColumns":
      return { ...state, [action.type]: action.value };

    case "showFavoritesOnly":
      return { ...state, [action.type]: action.value };

    default: {
      throw new Error(
        `preferenceReducer | Unhandled action type: ${action.type}`
      );
    }
  }
};

export const preferenceReducer = {
  initialState: dummyState,
  reducer,
};
