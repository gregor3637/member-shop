import React from "react";

import Footer from "../../Footer/Footer";
import Footer2 from "../../Footer2/Footer2";
import Section from "./Elements/Section";
import Auction from "./Elements/Auction/Auction";
import Cards from "./Elements/Cards/Cards";
import Trending from "./Elements/Trending/Trending";
import Display from "./Elements/Display/Display";

const MainPage = (props) => {
  return (
    <>
      <main>
        <Display />
        <Section>
          <Auction />
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
    </>
  );
};

export default MainPage;
