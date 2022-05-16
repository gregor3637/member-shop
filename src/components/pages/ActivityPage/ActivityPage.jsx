import React from "react";
import styled from "styled-components";

import { ActivityPageContextProvider } from "../../../hooks/ActivityPage/ActivityPageContext";
import Footer2 from "../../Footer2/Footer2";
import Body from "./Body/Body";
import Preferences from "./Preferences/Preferences";

const ActivityPage = (props) => {
  return (
    <Wrapper>
      <ActivityPageContextProvider>
        <h2>Explore Trending</h2>
        <Preferences />
        <hr />
        <Body />
      </ActivityPageContextProvider>
    </Wrapper>
  );
};

const InnerWrapper = styled.div``;

const Wrapper = styled.div`
  width: 100%;
  max-width: 840px;
  margin: 0 auto;
  flex: 1;

  display: flex;
  flex-direction: column;

  h2 {
    margin-top: 3rem;
    margin-bottom: 2rem;

    text-align: center;
    font-size: 3rem;
  }

  hr {
    margin: 1rem 0 2rem 0;
    height: 1px;
    background-color: var(--color-grey20);
    border: none;
  }
`;

export default ActivityPage;
