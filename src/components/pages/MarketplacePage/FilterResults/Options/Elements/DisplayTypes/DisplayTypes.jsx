import React from "react";
import styled from "styled-components";
import LargeDisplaySVG from "../../../../../../../img/svg/LargeDisplaySVG";
import SmallDisplaySVG from "../../../../../../../img/svg/SmallDisplaySVG";
import HollowButton from "../../../../../../General/Buttons/HollowButton";

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
  padding: 0.2rem 0.8rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--marketplace-button-background);
  border-radius: 1.2rem;
`;

export default DisplayTypes;
