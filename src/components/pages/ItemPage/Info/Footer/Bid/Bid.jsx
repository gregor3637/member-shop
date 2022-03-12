import React from "react";
import styled from "styled-components";

const Bid = ({ bidData }) => {
  if (
    bidData === undefined ||
    bidData.isAllowed === false ||
    bidData.active.length === 0
  ) {
    return null;
  }

  const lastBid = bidData.active[bidData.active.length - 1];

  return (
    <Wrapper>
      <span>Minimum bid</span>
      <div>
        {lastBid.currency} {lastBid.amount}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* background-color: green; */
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

export default Bid;
