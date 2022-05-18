import React from "react";
import styled from "styled-components";

import FilterOptions from "./FilterMenu/FilterMenu";
import Billboard from "./Billboard/Billboard";
import Menu from "../../General/SeparationOutlookComponents/Menu";
import Display from "../../General/SeparationOutlookComponents/Display";
import PreferenceSettings from "./FilterResults/PreferenceSettings/PreferenceSettings";
import AssetsView from "./FilterResults/AssetsView/AssetsView";
import { FiltersContextProvider } from "../../../hooks/Market/FiltersContext/FiltersContext";
import { PreferenceContextProvider } from "../../../hooks/Market/PreferenceContext/PreferenceContext";

const MarketplacePage = (props) => {
  return (
    <Wrapper>
      <FiltersContextProvider>
        <Menu>
          <FilterOptions />
          <Billboard />
        </Menu>

        <Display>
          <PreferenceContextProvider>
            <PreferenceSettings />
            <AssetsView />
          </PreferenceContextProvider>
        </Display>
      </FiltersContextProvider>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: var(--marketplace-button-background);
  flex-grow: 1;
  padding: 1rem;
  height: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export default MarketplacePage;
