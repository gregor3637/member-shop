import React from "react";
import styled from "styled-components";

const ToggleButton = ({ isActive, dataLabel, onClick, children }) => {
  return (
    <Wrapper
      className={!isActive ? "" : "active"}
      data-label={dataLabel}
      onClick={onClick}
    >
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.button`
  width: 100%;

  padding: 1rem 0;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;

  background-color: var(--market-filters--button-toggle--bgColor-enabled);
  border: 1px solid var(--border-color);
  border-radius: var(--market-filters--button-toggle--border-radius);
  color: var(--market-filters--button-toggle--color);

  cursor: pointer;

  &:hover {
    background: var(--market-filters--button-toggle--bgColor-hover);
  }

  &.active {
    background-color: var(--market-filters--button-toggle--bgColor-active);
    color: var(--market-filters--button-toggle--color-active);
  }
`;

export default ToggleButton;
