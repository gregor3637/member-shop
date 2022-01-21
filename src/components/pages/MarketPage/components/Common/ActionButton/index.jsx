import React from "react";
import styled from "styled-components";

const index = ({ text, isDisabled, onClick }) => {
  return (
    <Wrapped onClick={onClick} disabled={isDisabled}>
      {text}
    </Wrapped>
  );
};

const Wrapped = styled.button`
  padding: 1rem 4.4rem;

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
    background-color: var(--market-filters-button-action-color-disabled);
    color: var(--market-filters--button-action--color-disabled);
    border: 1px solid var(--marketplace-button-background);
  }
`;

export default index;
