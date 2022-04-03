import React from "react";
import styled from "styled-components";

import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Main from "./Main/Main";

const Info = ({setFooterHeight}) => {
  return (
    <Wrapper>
      <div id="backdrop-info"></div>
      <div id="overlay-info"></div>
      <Header />
      <Main />
      <Footer setFooterHeight={setFooterHeight}/>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: var(--color-white);
  /* background-color: var(--test-g); */
  width: 100%;
  height: 100%;
  flex: 1;
  position: relative;

  #backdrop-info {
    /* position: relative; */
    /* width: 100%;
    height: 100%; */

    background: var(--color-black);
    opacity: 0.5;
    z-index: 100;
  }
  #overlay-info {
    /* position: relative; */
    /* width: 100%;
    height: 100%; */
    /*
    opacity: 0.5;
    z-index: 110; */
    z-index: 800;
  }

  display: flex;
  flex-direction: column;

  font-size: 1.2rem;

  border: 1px solid var(--color-border);
  overflow: hidden;
  border-top-left-radius: var(--side-panel-border-radius);
  border-top-right-radius: var(--side-panel-border-radius);
  border-top: 2px solid var(--button-color-blue);
`;

export default Info;
