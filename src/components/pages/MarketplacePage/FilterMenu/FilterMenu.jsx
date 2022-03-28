import React, { useEffect } from "react";
import styled from "styled-components";
import { useHistory, useParams, useLocation } from "react-router-dom";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import FilterChoices from "./FilterChoices/FilterChoices";
import ActiveFilters from "./ActiveFilters/ActiveFilters";
import useMarketFiltersContext from "../../../../hooks/Market/FiltersContext/useMarketFiltersContext";
import filtersData from "../../../../store/Marketplace/Filters/FiltersData";

const replaceWhiteSpaceWithUnderscore = (str) => str.replace(/ /g, "_");

const obtainSearchParamsData = (str) => {
  console.log("------------------ ");
  console.log("------------------ ");
  console.log("str ", str);

  const split = str.match(/[^?&]+/gim);
  console.log("split ", split);

  let keyRegEx = /\[(\D+)\]/;
  let valRegEx = /=(.+)/;

  let data = split?.reduce((agg, cur) => {
    let key = cur.match(keyRegEx)?.[1];
    let val = cur.match(valRegEx)?.[1];

    if (key) {
      agg[key] = {
        ...agg[key],
        [val]: true,
      };
    }

    return agg;
  }, {});

  console.log("data ", data);
};

const getPartialUrl = (obj, name) =>
  Object.entries(obj)
    .filter(([k, v]) => !!v)
    .map(([k, v], i) => {
      let morphedKey = replaceWhiteSpaceWithUnderscore(k.toUpperCase());
      return `search[${name}][${i}]=${morphedKey}`;
    })
    ?.join("&");

// use the helper method for 'status' and 'categories'
const getUrl = (obj, name) => {
  const catSfx = getPartialUrl(obj, name);
  return catSfx.length > 0 ? `${catSfx}` : "";
};

const FilterMenu = () => {
  const { state, dispatch } = useMarketFiltersContext();
  const history = useHistory();

  const urlParams = new URLSearchParams();
  const location = useLocation();
  let params = useParams();

  console.log("params ", params);
  console.log("location ", location);

  obtainSearchParamsData(location.search);

  const { options } = state;

  useEffect(() => {
    const searchProps = getUrl(options, "options");

    history.push({
      pathname: "/marketplace",
      search: searchProps,
    });
  }, [options, history]);

  const activeFiltersCount = Object.keys(state).reduce((acc, cur) => {
    const count = filtersData[cur].getActiveSubfiltersCount(state[cur]);
    return acc + count;
  }, 0);

  return (
    <STabs
      selectedTabClassName="is-selected"
      selectedTabPanelClassName="is-selected"
      forceRenderTabPanel
    >
      <STabList>
        <STab>
          <div>Filters</div>
        </STab>
        <STab>
          <div>
            Active Filters
            {activeFiltersCount > 0 && <span>{activeFiltersCount}</span>}
          </div>
        </STab>
      </STabList>
      <STabPanel>
        <FilterChoices />
      </STabPanel>
      <STabPanel>
        <ActiveFilters
          state={state}
          dispatch={dispatch}
          activeFiltersCount={activeFiltersCount}
        />
      </STabPanel>
    </STabs>
  );
};

const STabs = styled(Tabs)`
  width: 100%;
  /* height: 60rem; */
  flex: 1;

  display: flex;
  flex-direction: column;

  font-size: 1.2rem;
`;

const STab = styled(Tab)`
  z-index: 20;

  background-color: var(--color-white);
  width: 50%;
  height: 6rem;

  border: 1px solid var(--color-border);
  border-left: 0;

  padding: 4px;
  user-select: none;
  cursor: pointer;

  &.is-selected {
    border-bottom: 1px solid white;

    border-top: 2px solid var(--button-color-blue);
    border-top-left-radius: var(--market-filters-outerWrapper-radius);
    border-top-right-radius: var(--market-filters-outerWrapper-radius);

    color: var(--button-color-blue);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(0, 0, 255, 0.5);
  }

  div {
    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;

    font-size: 1.4rem;
    font-weight: 600;
  }

  span {
    position: absolute;
    right: 0;
    top: 0;

    font-size: 1rem;
    color: var(--font-dark-color);

    line-height: 100%;
    /* border-radius: var(--market-filters--outerWrapper-radius); */
    padding: 0.2rem 0.4rem;
    background-color: var(--color-red-bright);
  }
`;

const STabList = styled(TabList)`
  list-style-type: none;
  padding-bottom: 4px;
  padding-left: 0;
  padding-right: 0;
  display: flex;

  ${STab}:first-of-type {
    border-top-left-radius: var(--market-filters--outerWrapper-radius);
    border-left: 1px solid var(--color-border);
  }
  ${STab}:last-of-type {
    border-top-right-radius: var(--market-filters--outerWrapper-radius);
    border-right: 1px solid var(--color-border);
  }
`;

const STabPanel = styled(TabPanel)`
  z-index: 10;

  display: none;
  background-color: var(--color-white);

  flex: 1 1 auto;
  overflow-y: auto;
  height: 0px;

  border: 1px solid var(--color-border);
  border-bottom-left-radius: var(--market-filters--outerWrapper-radius);
  border-bottom-right-radius: var(--market-filters--outerWrapper-radius);
  margin-top: -5px;

  &.is-selected {
    display: block;
  }
`;

export default FilterMenu;
