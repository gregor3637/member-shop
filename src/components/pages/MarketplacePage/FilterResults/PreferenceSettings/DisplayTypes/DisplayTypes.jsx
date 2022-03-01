import React from "react";
import styled from "styled-components";
import useMarketPreferenceContext from "../../../../../../hooks/Market/PreferenceContext/useMarketPreferenceContext";

import LargeDisplaySVG from "../../../../../../img/svg/LargeDisplaySVG";
import TableDisplaySVG from "../../../../../../img/svg/TableDisplaySVG";
import HollowButton from "../../../../../General/Buttons/HollowButton";

const DisplayTypes = () => {
  const {
    state: { displayType },
    dispatch,
  } = useMarketPreferenceContext();

  return (
    <Wrapper>
      <ButtonX
        disabled={displayType === "" || displayType === "Card"}
        onClick={() => {
          dispatch({ type: "displayType", value: "Card" });
        }}
      >
        <LargeDisplaySVG />
      </ButtonX>
      <ButtonX
        disabled={displayType === "Table"}
        onClick={() => {
          dispatch({ type: "displayType", value: "Table" });
        }}
      >
        <TableDisplaySVG />
      </ButtonX>
    </Wrapper>
  );
};
const ButtonX = styled(HollowButton)`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    fill: #888;
    stroke: #888;
  }

  &:disabled {
    svg {
      fill: #000;
      stroke: #000;
    }
  }
`;

const Wrapper = styled.div`
  height: 3.6rem;
  padding: 0 1.6rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--color-white);
  border: 1px solid var(--color-border);
  border-radius: var(--market-itemsWrapper-header-elements-border-radius);
`;

export default DisplayTypes;
