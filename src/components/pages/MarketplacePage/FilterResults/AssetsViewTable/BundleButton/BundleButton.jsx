import React from "react";
import styled from "styled-components";

const BundleButton = ({ isExpanded = false }) => {
  return <Wrapper className={isExpanded ? "expanded" : ""}> Bundle</Wrapper>;
};

const Wrapper = styled.button`
  height: 3.6rem;
  padding: 0 1.6rem;
  background: var(--color-white);

  border: 1px solid var(--color-border);
  border-radius: var(--market-itemsWrapper-header-elements-border-radius);
  cursor: pointer;

  &:hover {
    background-color: var(--color-grey20);
  }

  &.expanded {
    background-color: var(--button-color-blue);
    color: var(--color-white);
  }
`;

export default BundleButton;
