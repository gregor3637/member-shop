import React from "react";
import styled from "styled-components";

import CloseSVG from "../../../../../../../img/svg/CloseSVG";

const GeneralGroup = ({ context, contextName, label, dispatch }) => {
  if (context.length === 0) {
    return <></>;
  }

  return (
    <Styled>
      <GroupButtonX
        onClick={() => {
          dispatch({ type: "reset", state: contextName });
        }}
      >
        {label}
        <CloseSVG color="#9b9b9b" size={36} />
      </GroupButtonX>
      {context.map((x, i) => {
        return (
          <ButtonX
            key={i}
            onClick={() => {
              dispatch({ type: contextName, value: x });
            }}
          >
            <span>{x}</span>
            <CloseSVG color="#000" />
          </ButtonX>
        );
      })}
    </Styled>
  );
};

const GroupButtonX = styled.button`
  background-color: var(--color-none);

  width: max-content;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  outline: none;
  border: none;

  font-size: 2.2rem;
  color: var(--color-button-dark-inactive);

  &:hover {
    color: var(--color-button-dark-hover);
    color: red;

    svg {
      stroke: red;
    }
  }

  cursor: pointer;
`;

const ButtonX = styled.button`
  width: 100%;
  min-width: max-content;
  background: gold;
  padding: 0.6rem 1rem;
  margin: 0.5rem 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: var(--marketplace-button-grey-light);
  border-radius: 1rem;
  outline: none;
  border: none;

  cursor: pointer;

  span {
    margin-right: 0.2rem;
  }

  &:hover {
    background-color: var(--marketplace-button-background);
  }
`;

const Styled = styled.div`
  display: flex;
  flex-direction: column;
`;

export default GeneralGroup;
