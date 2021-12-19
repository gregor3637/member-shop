import React, { useState } from "react";
import styled from "styled-components";

import PseudoCheckbox from "./PseudoCheckbox";

const CheckboxButton = ({ onClick, label}) => {
  return (
    <Styled data-label={label} onClick={onClick}>
      <PseudoCheckbox />
      <span>{label}</span>
    </Styled>
  );
};

const Styled = styled.button`
  display: flex;
  align-items: center;

  background-color: rgba(0, 0, 0, 0);

  cursor: pointer;

  border: none;

  span {
    padding: 1rem 0;
  }
`;

export default CheckboxButton;
