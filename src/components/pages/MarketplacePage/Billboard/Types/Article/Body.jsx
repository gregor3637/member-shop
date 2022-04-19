import React from "react";
import styled from "styled-components";

import GiftImg from "../../../../../../img/Billboard/Gift.png";

const Body = (props) => {
  return (
    <Wrapper>
      <div>
        <p>Start creating</p>
        <ButtonsContainerX>
          <ButtonBlueX>Create</ButtonBlueX>
          <ButtonTransparentX>Learn more</ButtonTransparentX>
        </ButtonsContainerX>
      </div>
      <img src={GiftImg} alt="" />
    </Wrapper>
  );
};

const ButtonTransparentX = styled.button`
  padding: 0.5rem 1rem;

  color: var(--color-black);
  background: var(--color-none);

  &:hover {
    background: var(--color-grey20);
  }
`;

const ButtonBlueX = styled.button`
  padding: 0.5rem 2rem;

  background: var(--color-blue);
  color: var(--color-white);

  &:hover {
    background: var(--action-button--background--hover);
  }
`;

const ButtonsContainerX = styled.div`
  button {
    font-weight: 600;

    border: none;
    border-radius: 0.6rem;
    cursor: pointer;
  }

  margin-top: 0.5rem;
  display: flex;
  gap: 1rem;
  align-items: center;

  font-size: 1.4rem;
  font-weight: 500;
  color: var(--color-white);
`;

const Wrapper = styled.div`
  height: 100%;
  overflow: hidden;
  margin: 0 1rem;

  display: flex;
  justify-content: space-between;

  p {
    font-size: 1.4rem;
    font-weight: 500;
    color: var(--color-grey50);
  }

  img {
    height: 100%;
    width: auto;
  }
`;

export default Body;
