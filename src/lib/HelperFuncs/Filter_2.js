import filtersData from "../../store/Marketplace/Filters/FiltersData";

export const markSelectedFilters = (filtersState) => {
  const filterNames = Object.keys(filtersState);
  const marked = filterNames.reduce((acc, filterName) => {
    const filterMethods = filtersData[filterName];
    const getIsFilterActive = filterMethods["getIsFilterActive"];
    const state = filtersState[filterName];
    const isFulfilled = getIsFilterActive(state);

    if (isFulfilled) acc.push(filterName);

    return acc;
  }, []);

  return marked;
};

export const filterAssetCards = (assetCards, activeFilters, state) => {
  return assetCards.filter((card) => {
    return activeFilters.every((name) => {
      const filterFn = filtersData[name].assetCardConditionFulfilled;
      const val = filterFn(card, state);
      return val;
    });
  });
};
