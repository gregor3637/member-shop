import React from "react";
import styled from "styled-components";

const NotFoundPage = (props) => {
  console.log("--------------------111!! NotFoundPage ==============");
  return (
    <Wrapper>
      <InnerWrapper>
        <div>Comming Soon</div>
        <p>We will be celebrating the lounch of our new site very soon!</p>
        <button>Notify ME !</button>
      </InnerWrapper>
    </Wrapper>
  );
};

const InnerWrapper = styled.div`
  /* background: var(--test-y); */

  & > div {
    margin: 0 auto;
    font-size: 6rem;
    font-weight: 900;

    text-align: center;
  }

  p {
    font-size: 2rem;
  }

  button {
    margin: 2rem 0;
    padding: 0.5rem 2rem;
    background: var(--color-blue);

    border: none;
    border-radius: 0.5rem;

    font-size: 1.6rem;
    color: var(--color-white);

    cursor: pointer;
  }
`;

const Wrapper = styled.div`
  /* background: var(--test-r); */
  height: 100%;
  margin: auto;
  text-align: center;

  display: flex;
  align-items: center;
`;

export default NotFoundPage;
