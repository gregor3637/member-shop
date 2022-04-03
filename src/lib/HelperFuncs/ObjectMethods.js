const swapObjectKeysWithValues = (obj) => {
  return Object.keys(obj).reduce((ret, key) => {
    ret[obj[key]] = key;
    return ret;
  }, {});
};

export default swapObjectKeysWithValues;
