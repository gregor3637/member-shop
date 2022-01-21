import React, { useCallback } from "react";
import styled from "styled-components";

import useMarketFiltersContext from "../../../../../../hooks/Market/useMarketFiltersContext";
import ToggleButton from "../../Common/ToggleButton";

const Options = (props) => {
  const { state, dispatch: updateMarkedFilters } = useMarketFiltersContext();
  const buttonClickHandle = useCallback(
    (event) => {
      updateMarkedFilters({
        type: "options",
        value: event.currentTarget.dataset.label,
      });
    },
    [updateMarkedFilters]
  );

  const selectedState = state["options"];
  const isVerified = selectedState.includes("Verified only");
  const isNSFW = selectedState.includes("Show NSFW");
  const isLazyMinted = selectedState.includes("Show lazy minted");

  return (
    <Styled>
      <div>
        <ToggleButton isActive={isVerified} onClick={buttonClickHandle}>
          Verified only
        </ToggleButton>
        <ToggleButton isActive={isNSFW} onClick={buttonClickHandle}>
          Show NSFW
        </ToggleButton>
        <ToggleButton isActive={isLazyMinted} onClick={buttonClickHandle}>
          Show lazy minted
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

export default Options;
