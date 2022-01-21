import React, { useCallback } from "react";
import styled from "styled-components";

import useMarketFiltersContext from "../../../../../../hooks/Market/useMarketFiltersContext";
import ToggleButton from "../../Common/ToggleButton";

const Status = (props) => {
  const { state, dispatch: updateMarkedFilters } = useMarketFiltersContext();
  const buttonClickHandle = useCallback(
    (event) => {
      updateMarkedFilters({
        type: "status",
        value: event.currentTarget.dataset.label,
      });
    },
    [updateMarkedFilters]
  );

  const selectedState = state["status"];
  const containsHasOffer = selectedState.includes("Has Offers");
  const containsNew = selectedState.includes("New");
  const containsBuyNow = selectedState.includes("Buy Now");
  const containsOnAuction = selectedState.includes("On Auction");

  return (
    <Styled>
      <ToggleButton isActive={containsHasOffer} onClick={buttonClickHandle}>
        Has Offers
      </ToggleButton>
      <ToggleButton isActive={containsNew} onClick={buttonClickHandle}>
        New
      </ToggleButton>
      <ToggleButton isActive={containsBuyNow} onClick={buttonClickHandle}>
        Buy Now
      </ToggleButton>
      <ToggleButton isActive={containsOnAuction} onClick={buttonClickHandle}>
        On Auction
      </ToggleButton>
    </Styled>
  );
};

const Styled = styled.div`
  padding: 2rem 0;

  display: flex;
  flex-direction: column;
  grid-gap: 1rem;
`;

export default Status;
