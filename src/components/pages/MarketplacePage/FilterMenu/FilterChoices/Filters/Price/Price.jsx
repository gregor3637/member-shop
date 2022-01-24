import React, { useEffect, useState } from "react";
import styled from "styled-components";

import EthereumImg from "../../../../../../../img/currency/Ether.png";
import BitcoinImg from "../../../../../../../img/currency/BTC.svg";
import USDTImg from "../../../../../../../img/currency/USDT.svg";

import useMarketFiltersContext from "../../../../../../../hooks/Market/useMarketFiltersContext";
import PriceInput from "./PriceInput/PriceInput";
import ActionButton from "../../../../CommonElements/ActionButton/ActionButton";

import CurrencySelect from "./CurrencySelect/CurrencySelect";

//TODO: this will come from server ???
const currencyOptions = {
  ETH: {
    value: "ETH",
    label: "Ethereum (ETH)",
    currencyImg: <img src={EthereumImg} alt="BTC" />,
  },
  BTC: {
    value: "BTC",
    label: "Bitcoin (BTC)",
    currencyImg: <img src={BitcoinImg} alt="ETH" />,
  },
  USDT: {
    value: "USDT",
    label: "Tether (USDT)",
    currencyImg: <img src={USDTImg} alt="USD" />,
  },
};

const Price = () => {
  const {
    state: { price },
    dispatch: dispatchNewPriceInfo,
  } = useMarketFiltersContext();

  const [currency, setCurrency] = useState(Object.keys(currencyOptions)[0]);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  useEffect(() => {
    if (!price.min && !price.max) {
      setCurrency(Object.keys(currencyOptions)[0]);
    }
    setMinPrice(price.min);
    setMaxPrice(price.max);
  }, [price]);

  const handleApply = () => {
    dispatchNewPriceInfo({
      type: "price",
      selected: {
        currency: currency.value,
        min: minPrice,
        max: maxPrice,
      },
    });
  };

  const handleClear = () => {
    setMinPrice("");
    setMaxPrice("");
  };

  const areButtonsDisabled = !(minPrice || maxPrice);

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
  background: Gold;
  padding: 2rem 1rem;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

export default Price;
