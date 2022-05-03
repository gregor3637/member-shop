import React from "react";
import styled from "styled-components";
import { ellipsysMiddleText } from "../../../../../../../helpers/EllipsysMiddleText";

const OfferBalance = ({ balance }) => {
  return (
    <Wrapper>
      <TopX>
        <span>Offer Balance</span>
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

export default OfferBalance;
