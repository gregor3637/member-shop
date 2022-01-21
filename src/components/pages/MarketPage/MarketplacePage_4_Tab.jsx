import React, { useEffect, useState } from "react";
import styled from "styled-components";

import useToggle from "../../../hooks/useToggle";
import { MarketFilterProvider } from "../../../store/MarketFilters/MarketFilterContext";
import FilterOptions from "./components/Filter/FilterOptions";
import FilterOptions_New from "./components/Filter/FilterOptions_New";
import Options from "./components/Options/Options";
import SelectedFilters from "./components/SelectedFilters/SelectedFilters";
import ItemsContainer from "./components/Items/ItemsContainer";
import Promotion from "./components/Promotion/Promotion";
import CardsWrapper from "./components/CardsWrapper/CardsWrapper";

const MarketplacePage_4_Tab = (props) => {
  return (
    <WrappedX>
      <MarketFilterProvider>
        <LeftPanelX>
          <FilterOptions_New />
          <Promotion />
        </LeftPanelX>

        <CardsWrapper />
      </MarketFilterProvider>
    </WrappedX>
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

const WrappedX = styled.div`
  /* position: relative; */
  background-color: gold;
  background-color: var(--marketplace-button-background);
  flex-grow: 1;
  padding: 2rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export default MarketplacePage_4_Tab;
