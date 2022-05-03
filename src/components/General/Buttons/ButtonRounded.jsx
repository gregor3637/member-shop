import React from "react";
import styled from "styled-components";

const ButtonRounded = (props) => {
  return (
    <Wrapper onClick={props.onClick} className={props.className}>
      {props.children}
    </Wrapper>
  );
};

const Wrapper = styled.button`
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

export default ButtonRounded;
