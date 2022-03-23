const emptyState = {
  count: 0,
  options: {
    "Verified only": false,
    "Show NSFW": false,
    "Show lazy minted": false,
  },
  blockchain: {
    Ethereum: false,
    Polygon: false,
    Klaytn: false,
  },
  category: {
    Art: false,
    Sports: false,
  },
  assetType: {
    Bundles: false,
    SingleItems: false,
  },
  saleType: {
    "Has Offers": false,
    New: false,
    "Buy Now": false,
    "On Auction": false,
  },
  collections: [],
  price: {
    currency: "",
    min: "",
    max: "",
  },
};

//dont forget to manually change/count the count
//if you change the dummpyState
const dummyState = {
  count: 7,
  options: {
    "Verified only": false,
    "Show NSFW": true,
    "Show lazy minted": false,
  },
  blockchain: {
    Ethereum: false,
    Polygon: true,
    Klaytn: true,
  },
  category: {
    art: true,
    sports: false,
  },
  assetType: {
    Bundles: false,
    "Single Items": false,
  },
  saleType: {
    "Has Offers": false,
    New: true,
    "Buy Now": false,
    "On Auction": true,
  },
  collections: ["cloneX"],
  price: {
    currency: "",
    min: "",
    max: "",
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
  const selectedCount = Array.isArray(state[resetLabelName])
    ? state[resetLabelName].length
    : Object.keys(state[resetLabelName]).filter(
        (key) => state[resetLabelName][key]
      ).length;

  return {
    ...state,
    count: state.count - selectedCount,
    [resetLabelName]: emptyState[resetLabelName],
  };
};

const toggleBoolInObject = (state, action) => {
  let obj = state[action.type];
  const newValue = !obj[action.value];

  const addedCount = newValue ? 1 : -1;

  return {
    ...state,
    count: state.count + addedCount,
    [action.type]: {
      ...obj,
      [action.value]: newValue,
    },
  };
};

const replaceCollections = (state, action) => {
  const oldCount = state[action.type].length;
  const newValue = action.value.length;

  if (Array.isArray(action.value)) {
    return {
      ...state,
      count: state.count + -oldCount + newValue,
      [action.type]: action.value,
    };
  }

  return toggleItemInArray(state, action);
};

const chooseOneInObject = (state, action) => {
  let subState = state[action.type];
  let keys = Object.keys(state[action.type]);
  console.log(" **** keys ", keys);

  let hadSelectedValueBefore = keys.find((x) => subState[x]) !== undefined;
  console.log(" **** hadSelectedValueBefore ", hadSelectedValueBefore);

  const resetSubstate = keys.reduce((p, c) => {
    p[c] = false;
    return p;
  }, {});

  resetSubstate[action.value] = true;

  return {
    ...state,
    count: state.count + (hadSelectedValueBefore ? 0 : 1),
    [action.type]: resetSubstate,
  };
};

const reducer = (state, action) => {
  switch (action.type) {
    case "reset":
      if (action.state) return resetState(state, action.state);
      else return emptyState;

    case "saleType":
      return toggleBoolInObject(state, action);

    case "options":
      return toggleBoolInObject(state, action);

    case "category":
      return toggleBoolInObject(state, action);

    //this must not be visible in 'Active Filters'
    case "assetType":
      return chooseOneInObject(state, action);

    case "blockchain":
      return toggleBoolInObject(state, action);

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

export const filtersReducer = {
  initialState: dummyState,
  reducer,
};
