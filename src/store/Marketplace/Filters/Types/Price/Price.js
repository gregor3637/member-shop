import PriceGroup from "../../../../../components/pages/MarketplacePage/FilterMenu/ActiveFilters/Filters/PriceGroup/PriceGroup";
import { extractInitialValuePerKey } from "../../CommonConditions/CommonReducerMethods";
import getFilterDataObject from "../../FilterDataObject";
import FilterMenuPrice from "./FilterMenu/FilterMenuPrice";

const optionsData = {
  currency: {
    initValue: "",
    urlLabel: "CURRENCY",
    assetCardConditionFulfilled: (assetCard) => assetCard.project.isVerified,
  },
  minValue: {
    initValue: "",
    urlLabel: "MIN",
    assetCardConditionFulfilled: (assetCard) => assetCard.project.isNSFW,
  },
  maxValue: {
    initValue: "",
    urlLabel: "MAX",
    assetCardConditionFulfilled: (assetCard) => assetCard.summary.isLazyMinted,
  },
};

const isFilterConditionsFilfillingItem = (item, state) => {
  if (!item.price) return false;

  const isSameCurrency = item.price.currency === state.price.currency;

  const isAmountEntered =
    Boolean(state.price.minValue) || Boolean(state.price.maxValue);

  const isSatisfyingMinCondition =
    state.price.minValue === "" || item.price.amount >= state.price.minValue;

  const isSatisfyingMaxCondition =
    state.price.maxValue === "" || item.price.amount <= state.price.maxValue;

  return (
    isSameCurrency &&
    isAmountEntered &&
    isSatisfyingMinCondition &&
    isSatisfyingMaxCondition
  );
};

const reducerInitValues = extractInitialValuePerKey(optionsData);

const reducerFn = (state, action) => {
  let data = {
    ...state,
    price: action.value,
  };

  data.price["fofoofo"] = "zaza";

  data.price.currency = action.value.currency;
  data.price["minValue"] = action.value.minValue;
  data.price.maxValue = action.value.maxValue;

  return data;
};

const activeFilters = (subFilterState, dispatch) => {
  return (
    <PriceGroup
      context={subFilterState}
      contextName="price"
      label="Price"
      dispatch={dispatch}
    />
  );
};

/*
http://localhost:3000/marketplace?search[options][0]=VERIFIED_ONLY&search[options][1]=SHOW_NSFW&search[options][2]=SHOW_LAZY_MINTED&search[price][currency]=ETH&search[price][minValue]=13
http://localhost:3000/marketplace?search[options][0]=VERIFIED_ONLY&search[options][1]=SHOW_NSFW&search[options][2]=SHOW_LAZY_MINTED&search[price][currency]=ETH&search[price][minValue]=13
*/
//search[collection][0]=world-of-women&search[collection][1]=bored-apes
const deriveSubStateFromSearchParamsWithSamePrimaryProp = (searchProps) => {
  let extractedState = searchProps.reduce((acc, cur) => {
    const [key, value] = cur
      .replace("search[price]", "")
      .replace(/\[|\]/g, "")
      .split("=");

    acc[key] = value;
    return acc;
  }, {});

  const subState = { ...reducerInitValues, ...extractedState };

  console.log("***Price |  price", subState);

  return subState;
};

const deriveUrlSearchPropsFromSubState = (subState) => {
  const searchProps = Object.entries(subState)
    .filter(([k, v]) => !!v)
    .map(([k, v]) => {
      return `search[price][${k}]=${v}`;
    })
    ?.join("&");

  return searchProps;
};

let data = {
  isFilterRelevantBasedOnSubState: (state) => Boolean(state.currency),
  isFilterConditionsFilfillingItem,
  getActiveSubfiltersCount: (state) => (Boolean(state.currency) ? 1 : 0),
  reducerFn,
  reducerInitValues,
  filterMenuComponent: <FilterMenuPrice />,
  activeFilterComponentFunc: activeFilters,
  deriveUrlSearchPropsFromSubState,
  deriveSubStateFromSearchParamsWithSamePrimaryProp,
};

export default getFilterDataObject(data);
