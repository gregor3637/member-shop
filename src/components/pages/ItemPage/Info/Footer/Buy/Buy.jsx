import React from "react";
import styled from "styled-components";

const Buy = ({ priceData }) => {
  if (priceData.currency === "") {
    return null;
  }

  return (
    <Wrapper>
      <span>Buy Price</span>
      <div>
        {priceData.currency} {priceData.amount}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  span,
  div {
    text-align: center;
  }

  span {
    font-size: 1rem;
    font-weight: 600;
  }
`;

export default Buy;
