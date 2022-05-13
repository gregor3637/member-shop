import React, { useState } from "react";
import styled from "styled-components";
import Footer2 from "../../Footer2/Footer2";

import ItemsContainer from "./ItemsContainer/ItemsContainer";
import Navigation from "./Navigation/Navigation";

const options = [
  "Trending",
  "Top",
  "Art",
  "Collectables",
  "Domain Names",
  "Music",
  "Photography",
  "Sports",
  "Trading Cards",
  "Utility",
  "Virtual Worlds",
];

const CollectionsPage = (props) => {
  const [currentTab, setCurrentTab] = useState("Trending");

  return (
    <>
      <Wrapper>
        <h2>Explore Collections</h2>
        <Navigation
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
          options={options}
        />
        <ItemsContainer currentTab={currentTab} />
      </Wrapper>
      <Footer2 />
    </>
  );
};

const Wrapper = styled.div`
  height: 100%;

  h2 {
    margin: 4rem 0 2rem 0;
    text-align: center;

    font-size: 4.4rem;
  }
`;

export default CollectionsPage;
