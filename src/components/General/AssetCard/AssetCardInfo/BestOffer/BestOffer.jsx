import React from "react";
import styled from "styled-components";
import CurrencyView from "../CurrencyView/CurrencyView";

const BestOffer = ({ offers }) => {
  let best = null;

  if (offers.isAllowed && offers.history.length > 0) {
    let descActiveOrders = offers.history
      .filter((x) => x.active)
      .sort((a, b) => b.price - a.price);

    // best = descActiveOrders.length > 0 ? descActiveOrders[0] : null;
    best = descActiveOrders?.[0];
  }

  if (!best) return <></>;

  return (
    <Wrapper>
      <div>Best Offer</div>
      <PriceContainerX>
        <CurrencyView currency={best.currency} />
        {best.price}
      </PriceContainerX>
    </Wrapper>
  );
};

const PriceContainerX = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
`;

const Wrapper = styled.div``;

export default BestOffer;
