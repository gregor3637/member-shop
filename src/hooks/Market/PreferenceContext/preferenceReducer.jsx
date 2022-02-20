const emptyState = {
  searchQuery: "",
  sortingOption: "",
};

const dummyState = {
  searchQuery: "",
  sortingOption: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "searchQuery":
      return { ...state, [action.type]: action.value };

    case "sortingOption":
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
