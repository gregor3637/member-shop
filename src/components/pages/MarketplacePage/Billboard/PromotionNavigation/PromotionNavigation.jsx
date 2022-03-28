import React from "react";
import styled from "styled-components";

import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

const PromotionNavigation = ({
  onPrev,
  onNext,
  prevDisabled,
  nextDisabled,
}) => {
  return (
    <Wrapper>
      <button onClick={onPrev} disabled={prevDisabled}>
        <ArrowBackRoundedIcon />
      </button>
      <button onClick={onNext} disabled={nextDisabled}>
        <ArrowForwardRoundedIcon />
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  flex-basis: min-content;

  display: flex;
  align-items: start;
  gap: 0.5rem;

  button {
    padding: 0.5rem;

    display: flex;

    background: none;
    border-radius: 50%;
    border: none;

    cursor: pointer;

    &:hover:enabled {
      background: var(--color-grey20);
    }

    &:disabled {
      color: var(--color-grey20);
      cursor: auto;
    }

    svg {
      transform: scale(1.2);
    }
  }
`;

export default PromotionNavigation;
