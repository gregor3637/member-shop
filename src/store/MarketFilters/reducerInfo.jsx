const initialState = {
  rank: ["On Auction", "Buy Now"],
  status: {
    "Buy Now": false,
    "On Auction": false,
    New: false,
    "Has Offers": false,
  },
  price: {
    currency: "",
    min: 0,
    max: 0,
  },
  collections: [],
  chains: [],
};

const toggleStatus = (state, action) => {
  let filter = state[action.type];
  let filterValueBefore = filter[action.key];

  let updatedStatus = {
    [action.type]: {
      ...filter,
      [action.key]: !filterValueBefore,
    },
  };

  return {
    ...state,
    ...updatedStatus,
  };
};

const toggleRank = (state, action) => {
  let arr = state[action.type];
  const index = arr.indexOf(action.value);

  let obj =
    index > -1
      ? {
          ...state,
          [action.type]: [...arr.slice(0, index), ...arr.slice(index + 1)],
        }
      : {
          ...state,
          [action.type]: [...arr, action.value],
        };

  console.log("obj", obj);
  return obj;
};

const toggleChain = (state, action) => {
  let arr = state[action.type];
  const index = arr.indexOf(action.value);
  console.log("toggleChain index", index);
  console.log("toggleChain arr", arr);

  let obj =
    index > -1
      ? {
          ...state,
          [action.type]: [...arr.slice(0, index), ...arr.slice(index + 1)],
        }
      : {
          ...state,
          [action.type]: [...arr, action.value],
        };

  console.log("toggleChain obj", obj);
  return obj;
};

const reducer = (state, action) => {
  switch (action.type) {
    case "rank":
      return toggleRank(state, action);

    case "status":
      return toggleStatus(state, action);

    case "chains":
      return toggleChain(state, action);

    case "price":
      return {
        ...state,
        [action.type]: {
          currency: action.selected.currency,
          min: action.selected.min,
          max: action.selected.max,
        },
      };

    case "collections":
      return {
        ...state,
        [action.type]: action.selected,
      };

    default: {
      throw new Error(
        `MarketFilterContext | Unhandled action type: ${action.type}`
      );
    }
  }
};

export const reducerInfo = {
  initialState,
  reducer,
};
