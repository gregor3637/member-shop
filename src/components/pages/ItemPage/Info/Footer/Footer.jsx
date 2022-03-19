import React, { useContext } from "react";
import styled from "styled-components";

import ItemCardContext2 from "../../../../../store/Item/ItemCardContext2";
import ActionButton from "../../../MarketplacePage/CommonElements/ActionButton/ActionButton";
import CountdownTimer from "./CountdownTimer/CountdownTimer";
import Bid from "./Bid/Bid";
import Buy from "./Buy/Buy";

const Footer = () => {
  const itemCtx = useContext(ItemCardContext2);
  const buyHandle = () => {};
  const bidHandle = () => {};

  return (
    <Wrapper>
      <InfoContainerX>
        <Bid bidData={itemCtx.bids} />
        <Buy priceData={itemCtx.price} />
        <CountdownTimer timeData={itemCtx.auction} />
      </InfoContainerX>
      <ButtonContainerX>
        <ActionButton
          text={"Bid"}
          onClick={bidHandle}
          isDisabled={!itemCtx.bids.isAllowed}
        />
        <ActionButton
          text={"Buy"}
          onClick={buyHandle}
          isDisabled={!itemCtx.price}
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

  flex-basis: min-content;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  border-top: 1px solid var(--color-border);
`;

export default Footer;
