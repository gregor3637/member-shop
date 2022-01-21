import React, { useEffect, useState } from "react";
import styled from "styled-components";

import EthereumImg from "../../../../../../img/currency/Ether.png";
import BitcoinImg from "../../../../../../img/currency/BTC.svg";
import USDTImg from "../../../../../../img/currency/USDT.svg";
import USDCImg from "../../../../../../img/currency/USDC.svg";

import useMarketFiltersContext from "../../../../../../hooks/Market/useMarketFiltersContext";
import CurrencyInputSelect from "./Elements/CurrencyInputSelect";
import PriceInput from "./Elements/PriceInput";

//TODO: this will come from server ???
const currencyOptions = new Map([
  [
    "ETH",
    {
      value: "ETH",
      label: "Ethereum (ETH)",
      currencyImg: <img src={EthereumImg} alt="ETH" />,
    },
  ],
  [
    "BTC",
    {
      value: "BTC",
      label: "Bitcoin (BTC)",
      currencyImg: <img src={BitcoinImg} alt="ETH" />,
    },
  ],
  [
    "USDC",
    {
      value: "USDC",
      label: "Unated States Dollar (USDC)",
      currencyImg: <img src={USDCImg} alt="ETH" />,
    },
  ],
  [
    "USDT",
    {
      value: "USDT",
      label: "Tether Dollar (USDT)",
      currencyImg: <img src={USDTImg} alt="ETH" />,
    },
  ],
]);

const Price = () => {
  const { state, dispatch: dispatchNewPriceInfo } = useMarketFiltersContext();

  const [currency, setCurrency] = useState(currencyOptions.get("BTC"));
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const onFilterByPriceHandle = () => {
    dispatchNewPriceInfo({
      type: "price",
      selected: {
        currency: currency.value,
        min: minPrice,
        max: maxPrice,
      },
    });
  };

  useEffect(() => {
    if (!state.price.min && !state.price.max) {
      setCurrency(currencyOptions.get("BTC"));
    }
    setMinPrice(state.price.min);
    setMaxPrice(state.price.max);
  }, [state.price]);

  return (
    <Styled>
      <CurrencyInputSelect
        currency={currency}
        setCurrency={setCurrency}
        options={[...currencyOptions.values()]}
      />

      <MinMaxDivX>
        <PriceInput value={minPrice} onChange={setMinPrice} placeholder="Min" />
        <span>-</span>
        <PriceInput value={maxPrice} onChange={setMaxPrice} placeholder="Max" />
      </MinMaxDivX>

      <ButtonX
        onClick={onFilterByPriceHandle}
        disabled={!minPrice && !maxPrice}
      >
        Apply
      </ButtonX>
    </Styled>
  );
};

const ButtonX = styled.button`
  width: 100%;

  padding: 1rem 0;
  margin-top: 1.5rem;

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
    color: var(--button-color-blue);
  }

  &:disabled {
    cursor: auto;
    border: 1px solid var(--color-border-disabled);
  }
`;

const MinMaxDivX = styled.div`
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

export default Price;
