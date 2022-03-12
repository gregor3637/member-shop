import React from "react";
import styled from "styled-components";

const CountdownTimer = ({ timeData }) => {
  if (timeData === undefined || timeData === null) {
    return null;
  }

  return (
    <Wrapper>
      <span>Auction ends in</span>
      <div>{timeData}</div>
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

export default CountdownTimer;
