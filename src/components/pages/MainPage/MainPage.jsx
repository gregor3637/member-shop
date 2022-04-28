import React from "react";

import Footer2 from "../../Footer2/Footer2";
import Section from "./Elements/Section";
import Auction from "./Elements/Auction/Auction";
import Cards from "./Elements/Cards/Cards";
import Trending from "./Elements/Trending/Trending";
import Display from "./Elements/Display/Display";
import TopCollections from "./TopCollections/TopCollections";
import AuctionNew from "./Elements/AuctionNew/AuctionNew";
import { HomePageContextProvider } from "../../../hooks/HomePage/HomePageContext";

const MainPage = (props) => {
  return (
    <HomePageContextProvider>
      <main>
        <Display />
        <Section>
          {/* <Auction /> */}
          <AuctionNew />
        </Section>
        <Section>
          <TopCollections />
        </Section>
        <Section>
          <Trending />
        </Section>
        <Section>
          <Cards />
        </Section>
      </main>
      {/* <Footer  /> */}
      <Footer2 />
    </HomePageContextProvider>
  );
};

export default MainPage;
