import React from "react";
import styled from "styled-components";

const ActionButton = ({ text, onClick, className, isDisabled = false }) => {
  return (
    <Wrapped className={className} onClick={onClick} disabled={isDisabled}>
      <span>{text}</span>
    </Wrapped>
  );
};

const Wrapped = styled.button`
  width: 100%;
  height: 4rem;
  padding: 1rem 0;

  color: var(--action-button--color--active);
  background-color: var(--action-button--background--active);

  cursor: pointer;
  border: none;
  border-radius: var(--action-button--border-radius);
  
  &:enabled {
    background-color: var(--action-button--background--active);
  }

  &:hover:enabled {
    background-color: var(--action-button--background--hover);
  }

  &:disabled {
    cursor: auto;
    background-color: var(--action-button--background--disabled);
    color: var(--action-button--color--disabled);
    /* border: 1px solid var(--marketplace-button-background); */
  }

  span {
    font-weight: 600;
  }
`;

export default ActionButton;
