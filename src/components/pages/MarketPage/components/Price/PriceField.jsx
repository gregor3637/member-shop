import React from "react";
import styled from "styled-components";

const PriceField = ({ value, onChange, placeholder }) => {
  return (
    <InputX
      type="number"
      value={value}
      onChange={(ev) => onChange(ev.target.value)}
      placeholder={placeholder}
    />
  );
};

const InputX = styled.input`
  width: 100%;
  height: 4.6rem;
  padding: 3px 0px 3px 10px;
  margin: 5px 1px 3px 0px;

  outline: none;
  border: 1px solid var(--color-border);
  border-radius: 0.8rem;

  &:focus {
    border: 1px solid var(--color-border-focus);
  }
`;

export default PriceField;
