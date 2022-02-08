import React from "react";
import styled from "styled-components";

import CloseSVG from "../../../../../../../img/svg/CloseSVG";

const ActiveFilterButton = ({ onClick, children }) => {
  return (
    <Wrapper onClick={onClick}>
      {children}
      <CloseSVG color="#000" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  min-width: max-content;
  background: gold;
  padding: 0.6rem 1rem;
  margin: 0.5rem 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: var(--marketplace-button-grey-light);
  border-radius: 1rem;
  outline: none;
  border: none;

  cursor: pointer;

  &:hover {
    background-color: var(--marketplace-button-background);
  }
`;

export default ActiveFilterButton;
