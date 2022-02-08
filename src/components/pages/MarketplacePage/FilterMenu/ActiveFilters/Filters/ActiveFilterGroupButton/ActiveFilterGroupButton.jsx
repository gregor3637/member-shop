import React from "react";
import styled from "styled-components";

import CloseSVG from "../../../../../../../img/svg/CloseSVG";

const ActiveFilterGroupButton = ({ onClick, label }) => {
  return (
    <Wrapper onClick={onClick}>
      {label}
      <CloseSVG color="#9b9b9b" size={36} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: var(--color-none);

  width: max-content;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  outline: none;
  border: none;

  font-size: 2.2rem;
  font-weight: 400;
  color: var(--color-button-dark-inactive);

  &:hover {
    color: var(--color-button-dark-hover);
    color: red;

    svg {
      stroke: red;
    }
  }

  cursor: pointer;
`;

export default ActiveFilterGroupButton;
