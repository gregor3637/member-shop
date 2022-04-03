import React, { useCallback } from "react";
import styled from "styled-components";

import useMarketFiltersContext from "../../../../../hooks/Market/FiltersContext/useMarketFiltersContext";
import ToggleButton from "../../../../../components/pages/MarketplacePage/CommonElements/ToggleButton/ToggleButton";

const FilterMenuOptions = (props) => {
  const {
    state: { options },
    dispatch,
  } = useMarketFiltersContext();

  const buttonClickHandle = useCallback(
    (event) => {
      dispatch({
        type: "options",
        value: event.currentTarget.dataset.label,
      });

      //TODO url change ?
    },
    [dispatch]
  );

  return (
    <Wrapper>
      {Object.keys(options).map((key) => {
        return (
          <ToggleButton
            key={key}
            isActive={options[key]}
            dataLabel={key}
            onClick={buttonClickHandle}
          >
            {key}
          </ToggleButton>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 2rem 0;

  display: flex;
  flex-direction: column;
  grid-gap: 1rem;
`;

export default FilterMenuOptions;
