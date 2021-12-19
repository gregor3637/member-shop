import React from "react";
import styled from "styled-components";

const FormButton = (props) => {
  return (
    <Styled
      className={props.className}
      type={props.type}
      margin={props.margin}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.children}
    </Styled>
  );
};

const Styled = styled.button`
  margin: ${(props) => props.margin || "3rem 0 0 0"};

  padding: 1.2rem 1.8rem;
  align-self: center;

  border: 1px solid black;

  font-size: 1.8rem;
  font-weight: 600;

  border-radius: 1rem;
  box-shadow: none;

  background-color: var(--button-black);
  font-family: var(--font-primary);
  color: var(--color-white);

  cursor: pointer;

  :disabled {
    cursor: auto;
    background-color: var(--button-disabled);
  }
`;

export default FormButton;
