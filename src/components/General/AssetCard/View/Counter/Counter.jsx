import React, { useState } from "react";
import styled from "styled-components";

import ArrowRounded from "../../../../../img/svg/ArrowRounded.svg";

const Counter = ({ items, onNextClick, onPrevClick }) => {
  const [iterator, setIterator] = useState(0);
  const totalCount = items.length - 1;

  const handlePrevClick = () => {
    // onPrevClick();
    setIterator((old) => (old - 1 < 0 ? totalCount : old - 1));
  };

  const handleNextClick = () => {
    // onNextClick();
    setIterator((old) => (old + 1 > totalCount ? 0 : old + 1));
  };

  return (
    <Counter>
      <ButtonX onClick={handlePrevClick} style={{ transform: "rotate(90deg)" }}>
        <img src={ArrowRounded} alt="" />
      </ButtonX>
      <span>
        {iterator + 1} / {totalCount + 1}
      </span>
      <ButtonX
        onClick={handleNextClick}
        style={{ transform: "rotate(-90deg)" }}
      >
        <img src={ArrowRounded} alt="" />
      </ButtonX>
    </Counter>
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
`;

const Counter = styled.div`
  position: absolute;
  background-color: white;

  display: flex;
  justify-content: space-between;

  width: 30%;
  bottom: 0;
  left: 50%;
  transform: translateY(50%) translateX(-50%);

  border: 1px solid var(--color-border);
  border-radius: 1rem;

  span {
    /* background-color: green; */
    font-size: 1.2rem;
    font-weight: 700;
  }
`;

export default Counter;
