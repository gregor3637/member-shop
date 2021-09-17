import React from "react";
import styled from "styled-components";

const ButtonMain = (props) => {
  return <ButtonMainStyled>{props.children}</ButtonMainStyled>;
};

const ButtonMainStyled = styled.button`
  padding: 0.5rem 4rem;

  border: 0;
  border-radius: 1rem;
  box-shadow: none;

  font-size: 3.5rem;
  font-family: var(--font-primary);
  font-weight: 500;
  background-color: var(--button-black);
  color: var(--white-color);
  cursor: pointer;
  transition: all .2s ease;

  &:hover {
      transform: translateY(-1px);
  }
`;

export default ButtonMain;
