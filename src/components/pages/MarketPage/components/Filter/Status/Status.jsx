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
      <div>
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
      </div>
    </Styled>
  );
};

const Styled = styled.div`
  margin-top: 1rem;

  & > div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
  }
`;

export default Status;
