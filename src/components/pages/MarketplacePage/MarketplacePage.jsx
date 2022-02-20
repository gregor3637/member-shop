import React from "react";
import styled from "styled-components";

import { FiltersContextProvider } from "../../../hooks/Market/FiltersContext/FiltersContext";
import FilterOptions from "./FilterMenu/FilterMenu";
import Promotion from "./Promotion/Promotion";
import FilterResults from "./FilterResults/FilterResults";

const MarketplacePage = (props) => {
  return (
    <Wrapper>
      <FiltersContextProvider>
        <LeftPanelX>
          <FilterOptions />
          <Promotion />
        </LeftPanelX>

        <FilterResults />
      </FiltersContextProvider>
    </Wrapper>
  );
};

const LeftPanelX = styled.div`
  position: sticky;
  top: 9rem; //1rem from Wrapper.padding // 8rem from Header
  width: 34rem;
  height: calc(100vh - 8rem - 2rem); //8rem Header, 2rem for padding.bot.top
  margin-right: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
`;

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
