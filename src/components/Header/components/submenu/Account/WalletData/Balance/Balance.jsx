import React from "react";
import styled from "styled-components";
import { ellipsysMiddleText } from "../../../../../../../helpers/EllipsysMiddleText";

const Balance = ({balance, address}) => {

  return (
    <Wrapper>
      <TopX>
        <TopLeftX>Balance</TopLeftX>
        <TopRightX>
          <span>{ellipsysMiddleText(address)}</span>
          <div></div>
        </TopRightX>
      </TopX>
      <BodyX>{balance} ETH</BodyX>
    </Wrapper>
  );
};

const BodyX = styled.div`
  flex: 1;
  
  display: flex;
  align-items: center;

  font-size: 2rem;
  color: var(--color-black);
`;
//------------------

const TopRightX = styled.div`
  padding: 0.6rem;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  background: var(--color-grey15);
  border-radius: 0.6rem;

  span {
    line-height: 0;
  }

  & > div {
    width: 1.2rem;
    height: 1.2rem;
    background: var(--color-green);

    border-radius: 50%;
  }
`;

const TopLeftX = styled.span``;

const TopX = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4rem;

  color: var(--color-grey50);
`;

const Wrapper = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
`;

export default Balance;
