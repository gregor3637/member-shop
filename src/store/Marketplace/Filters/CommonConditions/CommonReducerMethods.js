export const toggleBoolInObject = (state, action) => {
  let obj = state[action.type];

  return {
    ...state,
    [action.type]: {
      ...obj,
      [action.value]: !obj[action.value],
    },
  };
};

export const chooseOneInObject = (state, action) => {
  const subState = state[action.type];
  const keys = Object.keys(subState);
  const previousChosen = keys.find((k) => subState[k]);
  const resetSubstate = keys.reduce((p, c) => {
    p[c] = false;
    return p;
  }, {});

  const isAlreadyChosen = action.value === previousChosen;
  resetSubstate[action.value] = !isAlreadyChosen;

  return {
    ...state,
    [action.type]: resetSubstate,
  };
};

export const toggleItemInArray = (state, action) => {
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

  return obj;
};
