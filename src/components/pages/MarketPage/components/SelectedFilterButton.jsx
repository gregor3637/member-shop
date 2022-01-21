import React from "react";
import styled from "styled-components";

const SelectedFilterButton = ({ onClick, children }) => {
  return <Styled onClick={onClick}>{children}</Styled>;
};

const Styled = styled.button`
  height: 3rem;
  margin: 0.2rem 0.5rem;
  /* margin-top: 0.5rem; */

  padding: 0 0.5rem 0 1rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--button-color-blue);
  border: 1px solid var(--color-link-blue);
  border-radius: var(--marketplace-button-border-radius);
  cursor: pointer;

  color: var(--color-white);
  font-weight: 500;
`;

export default SelectedFilterButton;
