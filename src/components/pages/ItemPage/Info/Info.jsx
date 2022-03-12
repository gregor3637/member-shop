import React from "react";
import styled from "styled-components";

import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Navigation from "./Navigation/Navigation";

const Info = ({ assetData }) => {
  return (
    <Wrapper>
      <Header assetData={assetData} />
      <Navigation />
      <Footer assetData={assetData} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: var(--color-white);
  width: 100%;
  flex: 1;

  display: flex;
  flex-direction: column;

  font-size: 1.2rem;

  border: 1px solid var(--color-border);
  overflow: clip;
  border-top-left-radius: var(--side-panel-border-radius);
  border-top-right-radius: var(--side-panel-border-radius);
  border-top: 2px solid var(--button-color-blue);
`;

export default Info;
