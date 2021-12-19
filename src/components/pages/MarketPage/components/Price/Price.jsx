import React, { useRef, useState } from "react";
import styled from "styled-components";
import useMarketFilters from "../../../../../hooks/Market/useMarketFilters";
import Currency from "./Currency";
import PriceField from "./PriceField";

const Price = (props) => {
  const { state, dispatch: dispatchNewPriceInfo } = useMarketFilters();
  const [currency, setCurrency] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const onFilterByPriceHandle = () => {
    dispatchNewPriceInfo({
      type: "price",
      selected: {
        currency: currency,
        min: minPrice,
        max: maxPrice,
      },
    });
    console.log("onFilterByPriceHandle");
    console.log(state);
  };

  return (
    <Styled>
      <Currency setCurrency={setCurrency} />

      <MinMaxContainerX>
        <MinX>
          <PriceField
            value={minPrice}
            onChange={setMinPrice}
            placeholder="Min"
          />
        </MinX>
        <div>to</div>
        <MaxX>
          <PriceField
            value={maxPrice}
            onChange={setMaxPrice}
            placeholder="Max"
          />
        </MaxX>
      </MinMaxContainerX>

      <ApplyButtonX>
        <button
          onClick={onFilterByPriceHandle}
          disabled={!minPrice && !maxPrice}
        >
          Apply
        </button>
      </ApplyButtonX>
    </Styled>
  );
};

const CurrencyX = styled.div`
  input {
    cursor: pointer;
  }
`;

const MinX = styled.div``;
const MaxX = styled.div``;

const Styled = styled.div`
  background-color: var(--color-white);
  width: 34rem;
  padding: 1.4rem 2rem;

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const MinMaxContainerX = styled.div`
  margin: 1.4rem 0;

  display: flex;
  align-items: center;

  ${MinX} {
    padding-right: 1.4rem;
    flex: 1;
  }

  ${MaxX} {
    padding-left: 1.4rem;
    flex: 1;
  }
`;

const ApplyButtonX = styled.div`
  button {
    width: 12rem;
    height: 4.6rem;

    background-color: var(--color-white);
    outline: none;
    border: 1px solid var(--color-border);
    border-radius: 0.8rem;

    color: var(--color-text);
    font-size: 1.6rem;
    font-weight: 700;

    cursor: pointer;

    &:disabled {
      color: var(--color-text-disabled);
      border-color: var(--color-border-disabled);

      cursor: auto;
    }
  }
`;

export default Price;
