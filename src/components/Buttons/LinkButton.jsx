import React from "react";
import styled from "styled-components";

const LinkButton = (props) => {
  return <LinkButtonStyled>{props.children}</LinkButtonStyled>;
};

const LinkButtonStyled = styled.a`
  padding: 0.5rem 4rem;

  border: 3px solid var(--black-color);
  border-radius: 1rem;
  box-shadow: none;

  font-size: 3.5rem;
  font-family: var(--font-primary);
  font-weight: 500;
  background-color: var(--white-color);
  color: var(--black-color);
  cursor: pointer;

  &:hover {
      transform: translateY(-1px);
  }
`;

export default LinkButton;
