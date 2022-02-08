import React from "react";
import styled from "styled-components";

import Check from "../../../../../../../img/svg/Check";

const Button = ({ isSelected, label, onClick }) => {
  return (
    <Wrapper
      className={!isSelected ? "" : "selected"}
      onClick={() => onClick(label)}
    >
      <span>{label}</span>
      <Check />
    </Wrapper>
  );
};

const Wrapper = styled.button`
  padding: 1rem 1rem;
  margin-top: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;

  text-align: start;
  font-weight: 600;

  outline: none;
  border: none;
  border-radius: 1rem;
  background: var(--color-none);
  cursor: pointer;

  svg {
    color: var(--color-none);
  }

  &.selected svg {
    color: var(--button-color-blue);
  }

  &:hover {
    background-color: var(--marketplace-button-background);
  }
`;

export default Button;
