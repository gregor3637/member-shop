import React from "react";
import styled from "styled-components";

import Button from "./Button/Button";

const Options = ({ selectedOption, onOptionSelect, options }) => {
  return (
    <Wrapper>
      {options.map((option) => {
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
