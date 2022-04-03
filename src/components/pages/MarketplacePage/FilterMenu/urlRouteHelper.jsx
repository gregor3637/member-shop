import filtersData from "../../../../store/Marketplace/Filters/FiltersData";

const searchPrimaryPropRegEx = /\[(\D+?)\]/;
const ampersandRegex = /[^?&]+/gim;
const filtersDataHasKey = (propName) => filtersData[propName];
const groupSearchParamsByMainSearchProp = (acc, cur) => {
  let filterName = cur.match(searchPrimaryPropRegEx)?.[1];

  if (filterName) {
    acc[filterName] = acc[filterName] ? [...acc[filterName], cur] : [cur];
  }

  return acc;
};

const deriveSubStateFromSearchParamsWithSamePrimaryProp = (
  filtersData,
  searchParamsByPrimarySearchProp,
  acc,
  curr
) => {
  acc[curr] = filtersData[
    curr
  ].deriveSubStateFromSearchParamsWithSamePrimaryProp(
    searchParamsByPrimarySearchProp[curr]
  );
  return acc;
};

export const deriveUrlSearchParamsFromState = (state) => {
  const search = Object.keys(state)
    .map((cur) => {
      const subState = state[cur];
      const optionsSearchProps =
        filtersData[cur].deriveUrlSearchPropsFromSubState(subState);
      return optionsSearchProps;
    })
    .filter((x) => x)
    .join("&");

  return search;
};

export const deriveStateFromUrlSearchParams = (url) => {
  let searchParamsByPrimarySearchProp = url
    .match(ampersandRegex)
    ?.reduce(groupSearchParamsByMainSearchProp, {});

  let state = !searchParamsByPrimarySearchProp
    ? {}
    : Object.keys(searchParamsByPrimarySearchProp)
        .filter(filtersDataHasKey)
        .reduce(
          deriveSubStateFromSearchParamsWithSamePrimaryProp.bind(
            null,
            filtersData,
            searchParamsByPrimarySearchProp
          ),
          {}
        );

  console.log("urlHelper | derivedState ", state);

  return state;
};
