import React from "react";
import styled from "styled-components";
import Checkmark from "../../../../../../../General/Checkmark/Checkmark";

const ButtonSelected = ({ name, updateMarkedFilters, type }) => {
  return (
    <Styled
      key={name}
      onClick={() =>
        updateMarkedFilters({
          type: type,
          value: name,
        })
      }
    >
      <CircleHolderX>
        <Checkmark />
      </CircleHolderX>
      <span>{name}</span>
    </Styled>
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

const Styled = styled.button`
  width: 100%;
  padding-left: 1rem;

  display: flex;
  align-items: center;

  background-color: var(--color-none);
  border-radius: var(--market-filters-button-border-radius);
  border: none;
  outline: none;
  cursor: pointer;

  span {
    padding: 1.2rem 0.5rem;
  }

  &:hover {
    background-color: var(--market-filters-dropdown-hover);
  }
`;

export default ButtonSelected;
