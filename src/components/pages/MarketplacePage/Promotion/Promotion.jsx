import React from "react";
import styled from "styled-components";

const Promotion = (props) => {
  return (
    <Wrapper>
      <HeaderX>
        <span>Recurring buys</span>
        <a href="">Add new</a>
      </HeaderX>
      <BodyX>
        <img src="" alt="" />
        <ContentX></ContentX>
        <RightArrow></RightArrow>
      </BodyX>
    </Wrapper>
  );
};

const HeaderX = styled.div`
  padding: 1rem 2rem;

  border-bottom: 1px solid var(--color-border);

  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    font-size: 1.8rem;
    font-weight: 600;
  }

  a {
    font-size: 1.2rem;
    font-weight: 600;
    text-decoration: none;

    color: var(--button-color-blue);
  }
`;

const ContentX = styled.div``;

const RightArrow = styled.div``;
const BodyX = styled.div``;

const Wrapper = styled.div`
  background-color: var(--color-white);
  border: 1px solid var(--color-border);

  width: 100%;
  flex: 0 0 14rem;

  border-radius: var(--market-filters--outerWrapper-radius);
`;

export default Promotion;
