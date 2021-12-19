import React from "react";
import styled from "styled-components";

const HollowButton = (props) => {
  return (
    <Styled
      style={props.style}
      onClick={props.onClick}
      className={props.className}
      disabled={props.disabled}
    >
      {props.children}
    </Styled>
  );
};

const Styled = styled.button`
  background-color: rgba(0, 0, 0, 0);
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  &:disabled {
    cursor: auto;
  }
`;

export default HollowButton;
