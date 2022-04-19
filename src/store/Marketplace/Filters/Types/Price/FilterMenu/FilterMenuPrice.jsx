import React, { useEffect, useState } from "react";
import styled from "styled-components";

import useMarketFiltersContext from "../../../../../../hooks/Market/FiltersContext/useMarketFiltersContext";
import ActionButton from "../../../../../../components/pages/MarketplacePage/CommonElements/ActionButton/ActionButton";
import PriceInput from "./PriceInput/PriceInput";
import CurrencySelect from "./CurrencySelect/CurrencySelect";
import currencyOptions from "./CurrencyOptions/CurrencyOptions";

const FilterMenuPrice = () => {
  const { state, dispatch: dispatchNewPriceInfo } = useMarketFiltersContext();
  const { price } = state;

  const [currency, setCurrency] = useState(Object.keys(currencyOptions)[0]);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  useEffect(() => {
    if (!price.minValue && !price.maxValue) {
      setCurrency(Object.keys(currencyOptions)[0]);
    }

    setMinPrice(price.minValue);
    setMaxPrice(price.maxValue);
  }, [price]);

  const handleApply = () => {
    dispatchNewPriceInfo({
      type: "price",
      value: {
        currency,
        minValue: minPrice,
        maxValue: maxPrice,
      },
    });
  };

  const handleClear = () => {
    setMinPrice("");
    setMaxPrice("");
  };

  const areButtonsDisabled =
    !(minPrice || maxPrice) ||
    (minPrice === price.minValue && maxPrice === price.maxValue);

  return (
    <Wrapper>
      <CurrencySelect
        currency={currency}
        setCurrency={setCurrency}
        currencyOptions={currencyOptions}
      />

      <PriceInputWrapper>
        <PriceInput
          value={minPrice}
          onChange={setMinPrice}
          placeholder="From"
        />
        <PriceInput value={maxPrice} onChange={setMaxPrice} placeholder="To" />
      </PriceInputWrapper>

      <ButtonWrapperX>
        <ActionButton
          text={"Clear"}
          onClick={handleClear}
          isDisabled={areButtonsDisabled}
        />
        <ActionButton
          text={"Apply"}
          onClick={handleApply}
          isDisabled={areButtonsDisabled}
        />
      </ButtonWrapperX>
    </Wrapper>
  );
};

const ButtonWrapperX = styled.div`
  padding-top: 1rem;
  width: 100%;

  display: flex;
  justify-content: center;
  gap: 2rem;

  background-color: var(--color-white);
  border-top: 1px solid var(--color-border);
`;

const PriceInputWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
`;

const Wrapper = styled.div`
  padding: 2rem 1rem;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

export default FilterMenuPrice;
