import React from "react";
import styled from "styled-components";

const Buy = ({ buyData }) => {
  if (buyData === undefined || buyData === null) {
    return null;
  }

  return (
    <Wrapper>
      <span>Buy Price</span>
      <div>
        {buyData.currency} {buyData.amount}
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
