import React from "react";
import styled from "styled-components";

const LastBoughtPrice = ({ boughtPrices, CurrencyView }) => {
  let lastBoughtPrice =
    boughtPrices &&
    boughtPrices.length > 0 &&
    boughtPrices[boughtPrices.length - 1];

  return (
    <>
      {lastBoughtPrice && (
        <Wrapper>
          Last
          {CurrencyView}
          {lastBoughtPrice}
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
