import React from "react";
import styled from "styled-components";

import CurrencyView from "../../AssetCardInfo/CurrencyView/CurrencyIcon";

const LastBoughtPrice = ({ data: { boughtPrices } }) => {
  let lastBoughtPrice = boughtPrices?.[boughtPrices.length - 1];

  return (
    <>
      {lastBoughtPrice && (
        <Wrapper>
          Last
          <CurrencyView currency={lastBoughtPrice.currency} />
          {lastBoughtPrice.amount}
        </Wrapper>
      )}
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  font-size: 1.2rem;

  svg {
    width: 1rem;
    height: auto;
    margin: 0 0.2rem;
  }
`;

export default LastBoughtPrice;
