import flatter from "flat";

export const isEmptyObject = (v) => Object.keys(v).length === 0;

export const isObject = (v) =>
  typeof v === "object" && !Array.isArray(v) && v !== null;

export const isObjectOrArray = (v) => typeof v === "object" && v !== null;

export const objectHasFunctionWithName = (fnName, fnHolder) =>
  fnHolder.hasOwnProperty(fnName) && typeof fnHolder[fnName] !== "function";

export const hasTruthyOrNonEmptyArrayOrObject = (state) => {
  return (
    Object.values(flatter(state, { safe: true }))
      .filter((x) => {
        return !isObjectOrArray(x) || !isEmptyObject(x);
      })
      .findIndex((x) => x || typeof x === "number") > -1
  );
};

export const getTruthyKeys = (obj) => {
  //empty 'array' or 'object' is treated like a falsy
  const keys = Object.keys(obj);

  const res = keys.reduce((acc, propName) => {
    const val = obj[propName];

    if (Array.isArray(val)) {
      if (val.length > 0) acc.push(propName);
    } else if (isObject(val)) {
      const trutyVals = getTruthyKeys(val);
      acc.push(...trutyVals);
    } else if (Boolean(val)) {
      acc.push(propName);
    }

    return acc;
  }, []);

  return res;
};

export const getTruthyKeysCount = (state) => getTruthyKeys(state).length;
