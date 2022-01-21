const emptyState = {
  count: 0,
  status: [],
  price: {
    currency: "",
    min: "",
    max: "",
  },
  collections: [],
  chains: [],
  options: [],
  category: {
    Art: false,
    Sports: false,
  },
};

const dummyState = {
  count: 8,
  status: ["Has Offers", "New", "Buy Now", "On Auction"],
  price: {
    currency: "",
    min: "",
    max: "",
  },
  collections: ["cloneX"],
  chains: ["Ethereum", "Polygon", "Klaytn"],
  options: [],
  category: {
    art: false,
    sports: false,
  },
};

const toggleItemInArray = (state, action) => {
  let arr = state[action.type];
  const index = arr.indexOf(action.value);

  let obj =
    index > -1
      ? {
          ...state,
          count: state.count - 1,
          [action.type]: [...arr.slice(0, index), ...arr.slice(index + 1)],
        }
      : {
          ...state,
          count: state.count + 1,
          [action.type]: [...arr, action.value],
        };

  return obj;
};

const setPrice = (state, action) => {
  let value = 0;
  if (!!state[action.type].currency !== !!action.selected.currency) {
    value = !!action.selected.currency ? 1 : -1;
  }

  return {
    ...state,
    count: state.count + value,
    [action.type]: {
      currency: action.selected.currency,
      min: action.selected.min,
      max: action.selected.max,
    },
  };
};

const resetState = (state, resetLabelName) => {
  return {
    ...state,
    count: state.count - state[resetLabelName].length,
    [resetLabelName]: emptyState[resetLabelName],
  };
};

const toggleBoolInObject = (state, action) => {
  let obj = state[action.type];
  const val = obj[action.value];

  return {
    ...state,
    [action.type]: {
      ...obj,
      [action.value]: !val,
    },
  };
};

//reset
//action.type = reset
//action.state = status/chains/price/collection

//clear

const replaceCollections = (state, action) => {
  if (Array.isArray(action.value)) {
    return {
      ...state,
      [action.type]: action.value,
    };
  }

  return toggleItemInArray(state, action);
};

const reducer = (state, action) => {
  switch (action.type) {
    case "reset":
      if (action.state) return resetState(state, action.state);
      else return emptyState;

    case "status":
      return toggleItemInArray(state, action);

    case "options":
      return toggleItemInArray(state, action);

    case "category":
      return toggleBoolInObject(state, action);

    case "chains":
      return toggleItemInArray(state, action);

    case "price":
      return setPrice(state, action);

    case "collections":
      return replaceCollections(state, action);

    default: {
      throw new Error(
        `MarketFilterContext | Unhandled action type: ${action.type}`
      );
    }
  }
};

export const reducerInfo = {
  initialState: dummyState,
  reducer,
};
