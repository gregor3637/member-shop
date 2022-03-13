import React from "react";
import styled from "styled-components";

import CurrencyView from "../CurrencyView/CurrencyIcon";

const PriceLabelBlock = ({ data }) => {
  let label, currency, amount;

  if (data.price.currency !== "") {
    label = "Price";
    amount = data.price.amount;
    currency = data.price.currency;
  } else if (data.bids.isAllowed) {
    let best = data.bids.history
      ?.filter((x) => x.active)
      .sort((a, b) => b.amount - a.amount)[0];

    if (best) {
      label = "Best offer";
      amount = best.amount;
      currency = best.currency;
    }
  }

  if (label === undefined) {
    return <></>;
  }

  return (
    <Wrapper>
      <div>{label}</div>
      <PriceX>
        <CurrencyView currency={currency} />
        <span>{amount}</span>
      </PriceX>
    </Wrapper>
  );
};

const PriceX = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
`;

export default PriceLabelBlock;
