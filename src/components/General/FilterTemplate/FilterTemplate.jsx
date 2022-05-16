import React from "react";
import styled from "styled-components";

const FilterTemplate = ({
  filterOptionsComponent,
  billboardComponent,
  filterResultsComponent,
}) => {
  return (
    <Wrapper>
      <LeftPanelX>
        {filterOptionsComponent}
        {billboardComponent}
      </LeftPanelX>

      {filterResultsComponent}
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

export default FilterTemplate;
