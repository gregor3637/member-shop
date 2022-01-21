import React, { useCallback } from "react";
import styled from "styled-components";

import useMarketFiltersContext from "../../../../../../hooks/Market/useMarketFiltersContext";
import ToggleButton from "../../Common/ToggleButton";

const Category = (props) => {
  const { state, dispatch: updateMarkedFilters } = useMarketFiltersContext();
  const buttonClickHandle = useCallback(
    (event) => {
      updateMarkedFilters({
        type: "category",
        value: event.currentTarget.dataset.label,
      });
    },
    [updateMarkedFilters]
  );

  const selectedState = state["category"];

  console.log("selectedState ", selectedState);
  const isArt = selectedState["Art"];
  const iSports = selectedState["Sports"];

  return (
    <Styled>
      <ToggleButton isActive={isArt} onClick={buttonClickHandle}>
        Art
      </ToggleButton>
      <ToggleButton isActive={iSports} onClick={buttonClickHandle}>
        Sports
      </ToggleButton>
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
