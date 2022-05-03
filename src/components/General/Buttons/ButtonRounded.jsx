import React from "react";
import styled from "styled-components";

const ButtonRoundedStyled = styled.button`
  padding: 0.5rem 6rem;

  border: 0;
  border-radius: 1.6rem;
  box-shadow: none;

  background-color: var(--button-black);

  font-size: 3.5rem;
  font-family: var(--font-primary);
  font-weight: 500;
  color: var(--color-white);

  cursor: pointer;
`;

const ButtonRounded = (props) => {
  return (
    <ButtonRoundedStyled onClick={props.onClick} className={props.className}>
      {props.children}
    </ButtonRoundedStyled>
  );
};

export default ButtonRounded;
