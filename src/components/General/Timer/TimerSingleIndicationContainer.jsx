import React from "react";
import styled from "styled-components";

const Styled = styled.div`
  padding: 0.9rem;
  /* width: 40px;
  height: 40px; */

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--color-black);

  span {
    color: var(--color-white);
    font-family: var(--font-countdownTimer), var(--font-countdownTimerSecond) !important;
    font-weight: 700;
  }
`;

const TimerSingleIndicationContainer = ({ time, provStyle }) => {
  let digits = time || "00";

  return (
    <Styled style={{ ...provStyle }}>
      <span>{digits}</span>
    </Styled>
  );
};

export default TimerSingleIndicationContainer;
