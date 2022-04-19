import GeneralGroup from "../../../../../components/pages/MarketplacePage/FilterMenu/ActiveFilters/Filters/GeneralGroup/GeneralGroup";
import CollectionsSVG from "../../../../../img/svg/Drawer/CollectionsSVG";
import { hasTruthyOrNonEmptyArrayOrObject } from "../../CommonConditions/CommonConditions";
import { toggleItemInArray } from "../../CommonConditions/CommonReducerMethods";
import getFilterDataObject from "../../FilterDataObject";
import FilterMenuCollections from "./FilterMenu/FilterMenuCollections";

const isFilterConditionsFilfillingItem = (item, filterState) => {
  console.log('---------- filterState.collections ', filterState.collections);
  console.log('---------- item.project.name ', item.project.name);
  let isMinCriteriaMet = filterState.collections.includes(item.project.name);
  return isMinCriteriaMet;
};

const reducerFn = (state, action) => {
  if (Array.isArray(action.value)) {
    return {
      ...state,
      [action.type]: action.value,
    };
  }

  return toggleItemInArray(state, action);
};

const activeFilters = (subFilterState, dispatch) => {
  return (
    <GeneralGroup
      context={subFilterState}
      contextName="collections"
      label="Collections"
      dispatch={dispatch}
    />
  );
};

const deriveSubStateFromSearchParamsWithSamePrimaryProp = (searchProps) => {
  let price = searchProps.reduce((acc, cur) => {
    const collectionName = cur.split("=")[1].replace("-", " ");
    acc.push(collectionName);
    return acc;
  }, []);

  return price;
};

const deriveUrlSearchPropsFromSubState = (subState) => {
  const searchProps = Object.entries(subState)
    .filter(([k, v]) => !!v)
    .map(([k, v], i) => {
      const val = v.split(" ").join("-");
      return `search[collections][${i}]=${val}`;
    })
    ?.join("&");

  return searchProps;
};

let data = {
  isFilterRelevantBasedOnSubState: hasTruthyOrNonEmptyArrayOrObject,
  isFilterConditionsFilfillingItem,
  getActiveSubfiltersCount: (subState) => subState.length,
  reducerFn,
  reducerInitValues: [],
  filterMenuComponent: <FilterMenuCollections />,
  filterIcon: <CollectionsSVG />,
  activeFilterComponentFunc: activeFilters,
  deriveUrlSearchPropsFromSubState,
  deriveSubStateFromSearchParamsWithSamePrimaryProp,
};

export default getFilterDataObject(data);
