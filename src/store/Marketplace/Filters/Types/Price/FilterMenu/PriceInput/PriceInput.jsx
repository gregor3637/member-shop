import React from "react";
import styled from "styled-components";

const PriceInput = ({ className: version, value, onChange, placeholder }) => {
  const handleChange = (e) => {
    let inputVal = e.target.value.replace(/[^0-9.]/g, "");
    onChange(inputVal);
  };

  return (
    <InputX className={version} value={value} onChange={handleChange} placeholder={placeholder} />
  );
};

const InputX = styled.input`
  width: 100%;
  padding: 0 1rem;
  height: 4rem;

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
