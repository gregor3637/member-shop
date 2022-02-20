import React from "react";
import styled from "styled-components";

import ArrowRoundedSVG from "../../../../../../img/svg/ArrowRounded";

const NavigationMenu = ({ curremtPage, totalPages, onNext, onPrev }) => {
  return (
    <Wrapper>
      <ButtonX
        onClick={onPrev}
        style={{ transform: "rotate(90deg)" }}
        disabled={curremtPage === 0}
      >
        <ArrowRoundedSVG />
      </ButtonX>
      <span>
        {curremtPage + 1} / {totalPages + 1}
      </span>
      <ButtonX
        onClick={onNext}
        style={{ transform: "rotate(-90deg)" }}
        disabled={curremtPage === totalPages}
      >
        <ArrowRoundedSVG />
      </ButtonX>
    </Wrapper>
  );
};

const ButtonX = styled.button`
  padding: 0;

  display: flex;
  align-items: center;

  border: none;
  outline: none;
  background-color: var(--color-none);

  cursor: pointer;

  svg {
    font-size: 1.6rem;
  }
  &:disabled {
    svg {
      fill: var(--button-disabled);
    }
  }
`;

const Wrapper = styled.div`
  position: absolute;
  background-color: white;

  display: flex;
  justify-content: space-between;

  width: 100%;
  bottom: 0;
  left: 50%;
  transform: translateY(100%) translateX(-50%);

  border: 1px solid var(--color-border);
  border-radius: 1rem;

  span {
    /* background-color: green; */
    font-size: 1.2rem;
    font-weight: 700;
  }
`;

export default NavigationMenu;
