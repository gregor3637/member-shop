import React from "react";
import styled from "styled-components";

const PriceInput = ({ value, onChange, placeholder }) => {
  const handleChange = (e) => {
    // let value = e.target.value.replace(/\D/g, "");
    let value = e.target.value.replace(/[^0-9.]/g, "");
    onChange(value);
  };

  return (
    <InputX value={value} onChange={handleChange} placeholder={placeholder} />
  );
};

const InputX = styled.input`
  width: 100%;

  outline: none;
  border: none;
  border-bottom: 1px solid var(--color-border);

  text-align: center;

  &:hover {
    border-bottom: 1px solid var(--button-color-blue);
  }
  &:focus {
    border-bottom: 2px solid var(--button-color-blue);
  }
`;

export default PriceInput;
