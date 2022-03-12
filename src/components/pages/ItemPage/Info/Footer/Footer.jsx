import React from "react";
import styled from "styled-components";

import ActionButton from "../../../MarketplacePage/CommonElements/ActionButton/ActionButton";
import Bid from "./Bid/Bid";
import Buy from "./Buy/Buy";
import CountdownTimer from "./CountdownTimer/CountdownTimer";

const Footer = ({ assetData }) => {
  const buyHandle = () => {};
  const bidHandle = () => {};

  return (
    <Wrapper>
      <InfoContainerX>
        <Bid bidData={assetData.bids} />
        <Buy buyData={assetData.price} />
        <CountdownTimer timeData={assetData.auction} />
      </InfoContainerX>
      <ButtonContainerX>
        <ActionButton
          text={"Bid"}
          onClick={bidHandle}
          isDisabled={!assetData.bids.isAllowed}
        />
        <ActionButton
          text={"Buy"}
          onClick={buyHandle}
          isDisabled={!assetData.price}
        />
      </ButtonContainerX>
    </Wrapper>
  );
};

const InfoContainerX = styled.div`
  display: flex;
  gap: 1rem;

  & > div:not(:last-child) {
    border-right: 1px solid var(--color-grey20);
  }
`;

const ButtonContainerX = styled.div`
  /* background: var(--test-r); */
  display: flex;
  justify-content: center;
  gap: 2rem;
`;

const Wrapper = styled.div`
  /* background: var(--test-y); */
  padding: 1.6rem 2rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  border-top: 1px solid var(--color-border);
`;

export default Footer;
