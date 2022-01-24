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
  padding: 1rem;

  outline: none;
  border: 1px solid var(--market-filters--price--input-price--border-color);
  border-radius: var(--market-filters--price--input-price--border-radius);
  color: var(--market-filters--price--input-price--placeholder-color);
  
  text-align: center;
  
  &::placeholder {
    color: var(--market-filters--price--input-price--placeholder-color);
    opacity: 1; /* Firefox */
  }

  &:hover {
    border-color: var(--market-filters--price--input-price--border-color-hover);
  }
  &:focus {
    border-color: var(--market-filters--price--input-price--border-color-focus);
  }
`;

export default PriceInput;
