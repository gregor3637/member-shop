import React, { useCallback } from "react";
import styled from "styled-components";

import useMarketFiltersContext from "../../../../../../../hooks/Market/useMarketFiltersContext";
import ToggleButton from "../../../../CommonElements/ToggleButton/ToggleButton";

const SaleType = (props) => {
  const {
    state: { saleType },
    dispatch,
  } = useMarketFiltersContext();

  const buttonClickHandle = useCallback(
    (event) => {
      dispatch({
        type: "saleType",
        value: event.currentTarget.dataset.label,
      });
    },
    [dispatch]
  );

  return (
    <Wrapper>
      {Object.keys(saleType).map((key) => {
        return (
          <ToggleButton
            key={key}
            isActive={saleType[key]}
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

export default SaleType;
