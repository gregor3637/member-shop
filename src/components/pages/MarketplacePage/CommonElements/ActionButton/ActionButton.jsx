import React from "react";
import styled from "styled-components";

const ActionButton = ({ text, onClick, isDisabled = false }) => {
  return (
    <Wrapped onClick={onClick} disabled={isDisabled}>
      <span>{text}</span>
    </Wrapped>
  );
};

const Wrapped = styled.button`
  width: 100%;
  padding: 1rem 0;

  background-color: var(--market-filters-button-action-color-enabled);
  border: 1px solid var(--button-color-blue);
  border-radius: var(--market-filters--button-action--border-radius);

  outline: none;
  color: var(--market-filters--button-action--color-active);

  cursor: pointer;

  &:hover:enabled {
    background-color: var(--button-color-blue);
    color: var(--market-filters--button-action--color-hover);
  }

  &:disabled {
    cursor: auto;
    background-color: var(--market-filters--button-action--bgColor-disabled);
    color: var(--market-filters--button-action--color-disabled);
    border: 1px solid var(--marketplace-button-background);
  }

  span {
    font-weight: 600;
  }
`;

export default ActionButton;
