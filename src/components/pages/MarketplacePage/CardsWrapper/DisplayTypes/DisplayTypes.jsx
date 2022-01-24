import React from "react";
import styled from "styled-components";
import LargeDisplaySVG from "../../../../../img/svg/LargeDisplaySVG";
import SmallDisplaySVG from "../../../../../img/svg/SmallDisplaySVG";
import HollowButton from "../../../../General/Buttons/HollowButton";

const DisplayTypes = ({ isLargeDisplay, setIsLargeDisplay }) => {
  return (
    <Wrapper>
      <ButtonYXZ
        disabled={!isLargeDisplay}
        onClick={() => setIsLargeDisplay(true)}
      >
        <LargeDisplaySVG
          color={!isLargeDisplay ? "#000" : "#888"}
          fill={!isLargeDisplay ? "#000" : "#888"}
        />
      </ButtonYXZ>
      <ButtonYXZ
        disabled={isLargeDisplay}
        onClick={() => setIsLargeDisplay(false)}
      >
        <SmallDisplaySVG color={isLargeDisplay ? "#000" : "#888"} />
      </ButtonYXZ>
    </Wrapper>
  );
};
const ButtonYXZ = styled(HollowButton)`
  display: flex;
  align-items: center;
  justify-content: center;
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
