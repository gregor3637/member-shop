import React, { useCallback } from "react";
import styled from "styled-components";

import useMarketFiltersContext from "../../../../../../../hooks/Market/useMarketFiltersContext";
import ToggleButton from "../../../../CommonElements/ToggleButton/ToggleButton";

const Category = (props) => {
  const {
    state: { category },
    dispatch: updateMarkedFilters,
  } = useMarketFiltersContext();
  const buttonClickHandle = useCallback(
    (event) => {
      updateMarkedFilters({
        type: "category",
        value: event.currentTarget.dataset.label,
      });
    },
    [updateMarkedFilters]
  );

  return (
    <Styled>
      {Object.keys(category).map((key) => {
        return (
          <ToggleButton
            key={key}
            isActive={category[key]}
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

export default Category;
