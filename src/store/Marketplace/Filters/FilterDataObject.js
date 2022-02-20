export default function getFilterDataObject(
  value,
  getIsFilterActive,
  assetCardConditionFulfilled,
  getActiveSubfiltersCount,
  reducerFn
) {
  return {
    value,
    getIsFilterActive,
    assetCardConditionFulfilled,
    getActiveSubfiltersCount,
    reducerFn,
  };
}
