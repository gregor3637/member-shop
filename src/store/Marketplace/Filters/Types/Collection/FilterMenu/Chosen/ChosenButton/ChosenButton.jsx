import React from "react";
import styled from "styled-components";

import Checkmark from "../../../../../../../../components/General/Checkmark/Checkmark";

const index = ({ name, handleElementClick }) => {
  return (
    <Wrapped onClick={() => handleElementClick(name)}>
      <CircleHolderX>
        <Checkmark />
      </CircleHolderX>
      <span>{name}</span>
    </Wrapped>
  );
};

const CircleHolderX = styled.div`
  height: 30px;
  width: 30px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--color-white);
  background-color: var(--button-color-blue);
  border: 1px solid var(--color-border);
  border-radius: 50%;
  overflow: hidden;
  transform: scale(0.9);

  img {
    height: 100%;
    width: 100%;
    background-color: var(--color-white);
  }
`;

const Wrapped = styled.div`
  width: 100%;
  padding-left: 1rem;

  display: flex;
  align-items: center;

  background-color: var(--market-filters--collection--button--bgColor-enabled);
  border-radius: var(--market-filters--collection--button--border-radius);
  border: none;
  outline: none;
  cursor: pointer;

  span {
    padding: 1.2rem 0.5rem;
  }

  &:hover {
    background-color: var(--market-filters--collection--button--bgColor-hover);
  }
`;

export default index;
