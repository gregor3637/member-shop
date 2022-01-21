import React from "react";
import styled from "styled-components";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Filters from "./Filters/Filters";

const FilterOptions_New = (props) => {
  return (
    <STabs
      selectedTabClassName="is-selected"
      selectedTabPanelClassName="is-selected"
    >
      <STabList>
        <STab>
          <div>Filters</div>
        </STab>
        <STab>
          <div>
            Active Filters
            <span>13</span>
          </div>
        </STab>
      </STabList>
      <STabPanel>
        <Filters />
      </STabPanel>
      <STabPanel>Panel 2</STabPanel>
    </STabs>
  );
};

const STabs = styled(Tabs)`
  width: 100%;
  height: 74rem;

  display: flex;
  flex-direction: column;

  font-size: 1.2rem;
`;

const STab = styled(Tab)`
  z-index: 110;

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

    background: red;
    line-height: 100%;
    border-radius: 0.4rem;
    padding: 0.2rem 0.4rem;
  }
`;

const STabList = styled(TabList)`
  list-style-type: none;
  padding-bottom: 4px;
  padding-left: 0;
  padding-right: 0;
  display: flex;

  ${STab}:first-of-type {
    border-top-left-radius: 0.4rem;
    border-left: 1px solid var(--color-border);
  }
  ${STab}:last-of-type {
    border-top-right-radius: 0.4rem;
    border-right: 1px solid var(--color-border);
  }
`;

const STabPanel = styled(TabPanel)`
  z-index: 100;

  display: none;
  background-color: var(--color-white);

  flex: 1 1 auto;
  overflow-y: auto;
  height: 0px;

  border: 1px solid var(--color-border);
  border-bottom-left-radius: 0.4rem;
  border-bottom-right-radius: 0.4rem;
  margin-top: -5px;
  padding: 1rem 0;

  &.is-selected {
    display: block;
  }
`;

export default FilterOptions_New;
