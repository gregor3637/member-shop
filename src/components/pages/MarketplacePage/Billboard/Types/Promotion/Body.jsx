import React from "react";
import styled from "styled-components";

import YieldEarn from "../../../../../../img/Billboard/YieldEarn.png";

const Body = (props) => {
  return (
    <Wrapper>
      <img src={YieldEarn} alt="" />
      <div>
        <AnnotationX>Lend your NFTs and earn up to 2.71% APY</AnnotationX>
        <ButtonX>Get started</ButtonX>
      </div>
    </Wrapper>
  );
};

const AnnotationX = styled.span`
  text-align: justify;
  font-size: 1.4rem;
  font-weight: 500;
  color: var(--color-grey50);
`;

const ButtonX = styled.button`
  background: none;
  border: none;

  font-weight: 600;

  width: auto;
  align-self: end;

  color: var(--color-blue);
  cursor: pointer;
`;

const Wrapper = styled.div`
  margin-right: 2rem;
  margin-left: 1rem;
  height: 100%;

  display: flex;
  justify-content: space-between;
  gap: 3rem;

  img {
    height: 100%;
    width: auto;
  }

  div {
    display: flex;
    flex-direction: column;
  }
`;

export default Body;
