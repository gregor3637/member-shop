import React from "react";
import styled from "styled-components";

const ToggleButton = ({ onClick, label }) => {
  return (
    <Styled className="filled-button" data-label={label} onClick={onClick}>
      <span>{label}</span>
    </Styled>
  );
};

const Styled = styled.button`
  width: 100%;

  padding: 1rem 0;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;

  background-color: rgba(0, 0, 0, 0);
  border: 1px solid var(--border-color);
  border-radius: 0.5rem;

  cursor: pointer;

  &:hover {
    border: 1px solid var(--button-color-blue);
  }
`;

export default ToggleButton;
