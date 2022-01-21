import React from "react";
import styled from "styled-components";
import HollowButton from "../../../../../General/Buttons/HollowButton";

const ClearAllFiltersButton = (dispatch) => {
  console.log("ClearAllFiltersButton CREATED");

  const clickHandler = () => {
    dispatch({ type: "reset" });
  };

  return <Styled onClick={clickHandler}>Clear All</Styled>;
};

const Styled = styled(HollowButton)`
  font-size: 1.4rem;
  font-weight: 500;
  margin-left: 1rem;
`;

export default ClearAllFiltersButton;
