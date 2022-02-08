import React, { useCallback } from "react";
import styled from "styled-components";

import useMarketFiltersContext from "../../../../../../../hooks/Market/useMarketFiltersContext";
import ToggleButton from "../../../../CommonElements/ToggleButton/ToggleButton";

const Options = (props) => {
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
    },
    [dispatch]
  );

  return (
    <Styled>
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
    </Styled>
  );
};

const Styled = styled.div`
  padding: 2rem 0;

  display: flex;
  flex-direction: column;
  grid-gap: 1rem;
`;

export default Options;
