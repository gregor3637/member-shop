import React, { useState } from "react";
import styled from "styled-components";
import Currency from "../../Price/Currency";
import CurrencyInput from "./CurrencyInput";
import CurrencyInputSelect from "./CurrencyInputSelect";
import PriceInput from "./PriceInput";

const PriceComponent = (props) => {
  const [currency, setCurrency] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  return (
    <>
      {/* <Currency setCurrency={setCurrency} /> */}
      <Styled>
        {/* <CurrencyInput setCurrency={setCurrency} /> */}
        <CurrencyInputSelect />

        {/* <Currency setCurrency={setCurrency} /> */}
        <MinMaxContainerX>
          <PriceInput
            value={minPrice}
            onChange={setMinPrice}
            placeholder="Min"
          />
          <span>-</span>
          <PriceInput
            value={maxPrice}
            onChange={setMaxPrice}
            placeholder="Max"
          />
        </MinMaxContainerX>
      </Styled>

      <ButtonX disabled={!minPrice && !maxPrice}> Apply </ButtonX>
    </>
  );
};

const ButtonX = styled.button`
  width: 100%;

  padding: 1rem 0;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;

  background-color: rgba(0, 0, 0, 0);
  border: 1px solid var(--border-color);
  border-radius: 0.5rem;

  cursor: pointer;

  &:hover:enabled {
    border: 1px solid var(--button-color-blue);
  }

  &:disabled {
    cursor: auto;
  }
`;

const MinMaxContainerX = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    margin: 0 3rem;
    font-size: 1.4rem;
  }
`;

const Styled = styled.div`
  margin: 1.4rem 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default PriceComponent;
