import React from "react";
import styled from "styled-components";

import Navigation from "./Navigation/Navigation";

const CollectionsPage = (props) => {
  return (
    <Wrapper>
      <h2>Explore Collections</h2>
      <Navigation />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;

  h2 {
      margin: 4rem;
      text-align: center;

      font-size: 4.4rem;
  }
`;

export default CollectionsPage;
