import React from "react";
import styled from "styled-components";
import CloseSVG from "../../../../img/svg/CloseSVG";

const SelectedFulterButton = ({ onClick, text }) => {
  return (
    <Styled onClick={onClick}>
      <span>{text}</span>
      <CloseSVG color="#fff" />
    </Styled>
  );
};

const Styled = styled.button`
  height: 3rem;
  margin-right: 1rem;
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

export default SelectedFulterButton;
