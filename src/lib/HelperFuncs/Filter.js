import filtersData from "../../store/Marketplace/Filters/FiltersData";

export const eligibleItemsByFilterState = (assetCards, state) => {
  const containsOutcomeRelevantFilter = (n) =>
    filtersData[n].isFilterRelevantBasedOnSubState(state[n]);

  const relevantFilterFn = (n) =>
    filtersData[n].isFilterConditionsFilfillingItem;

  const itemsFulfillingAllRelevantFilterFn = (items, fn) =>
    items.filter((item) => fn(item, state));

  const allowed = Object.keys(state)
    .filter(containsOutcomeRelevantFilter)
    .map(relevantFilterFn)
    .reduce(itemsFulfillingAllRelevantFilterFn, assetCards);

  return allowed;
};
