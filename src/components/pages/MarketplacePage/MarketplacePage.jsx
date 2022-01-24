import React from "react";
import styled from "styled-components";

import { MarketFilterProvider } from "../../../store/MarketFilters/MarketFilterContext";
import FilterOptions from "./FilterMenu/FilterMenu";
import Promotion from "./Promotion/Promotion";
import CardsWrapper from "./CardsWrapper/CardsWrapper";

const MarketplacePage = (props) => {
  return (
    <Wrapper>
      <MarketFilterProvider>
        <LeftPanelX>
          <FilterOptions />
          <Promotion />
        </LeftPanelX>

        <CardsWrapper />
      </MarketFilterProvider>
    </Wrapper>
  );
};

const LeftPanelX = styled.div`
  position: sticky;
  top: 10rem;
  width: 34rem;
  height: 85vh;
  margin-right: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = styled.div`
  background-color: var(--marketplace-button-background);
  flex-grow: 1;
  padding: 2rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export default MarketplacePage;
