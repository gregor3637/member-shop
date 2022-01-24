import React from "react";
import styled from "styled-components";

import Filters from "./Filters/Filters";
import useMarketFiltersContext from "../../../../../hooks/Market/useMarketFiltersContext";

const ActiveFilters = (props) => {
  const { state, dispatch } = useMarketFiltersContext();

  return (
    <>
      <Filters state={state} dispatch={dispatch} />
      <FooterX>
        <ButtonX
          style={{ marginRight: "1rem" }}
          onClick={() => {
            dispatch({ type: "reset" });
          }}
        >
          Clear All
        </ButtonX>
      </FooterX>
    </>
  );
};

const ButtonX = styled.button`
  padding: 0.2rem 1.4rem;
  width: max-content;

  border-radius: 1rem;
  background-color: var(--marketplace-button-background);
  border: none;
  outline: none;

  cursor: pointer;
`;

const FooterX = styled.div`
  padding: 1rem 0;

  display: flex;
  justify-content: center;
  align-items: center;

  border-top: 1px solid var(--color-border);
`;

export default ActiveFilters;
