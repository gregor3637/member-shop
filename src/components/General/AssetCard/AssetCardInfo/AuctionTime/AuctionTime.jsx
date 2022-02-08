import React from "react";
import styled from "styled-components";

import TimelapseIcon from "@mui/icons-material/Timelapse";

const AuctionTime = ({ dateEnd }) => {
  const countdownDate = new Date(dateEnd).getTime();
  const now = new Date().getTime();
  const distance = countdownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  //   const message = days > 1 ? days + " days left" : "a day left";
  const message = days + " days left";

  return (
    <Wrapper>
      <TestX>
        <TimelapseIcon />
        <span>{message}</span>
      </TestX>
    </Wrapper>
  );
};

const TestX = styled.div`
  /* background: red; */
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 2px;

  color: var(--color-grey50);
`;

const Wrapper = styled.div`
  /* flex-basis: 35%; */
  display: flex;
  justify-content: flex-end;
  align-items: start;
  gap: 2px;

  span {
    font-size: 1rem;
    color: var(--color-grey50);
    font-weight: 400;
    font-weight: 600;
    text-align: left;
    /* line-height: 0; */
  }

  svg {
    color: var(--color-grey50);
    font-size: 12px;
  }
`;

export default AuctionTime;
