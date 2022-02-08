import React from "react";
import styled from "styled-components";

import Button from "./Button/Button";

const sortingOptions = [
  "Recently sold",
  "Recently added",
  "Recently created",
  "Oldest",
  "Auction ending soon",
  "Price: High to Low",
  "Price: Low to High",
  "Highest last sale",
];

const Options = ({ selectedOption, onOptionSelect }) => {
  return (
    <Wrapper>
      {sortingOptions.map((option) => {
        return (
          <Button
            key={option}
            isSelected={option === selectedOption}
            label={option}
            onClick={onOptionSelect}
          />
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 1rem 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;

  color: var(--color-black);
`;
export default Options;
