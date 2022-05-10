import React from "react";
import styled from "styled-components";

import { TrendingPageContextProvider } from "../../../hooks/TrendingPage/TrendingPageContext";
import Preferences from "./Preferences/Preferences";
import TableCollections from "./Table/Collections/TableCollections";
import Table_Creators from "./Table/Creators/TableCreators";
import Table from "./Table/Table";
// import Table2 from "./Table/Table2";

const TrendingPage = (props) => {
  //decide what api we will use based on the 'Type'
  //on change of api resend
  // const {
  //   sendRequest,
  //   data: tableItems,
  //   error,
  //   status,
  // } = useHttp2(getCollections, true, []);

  // useInit(sendRequest);

  return (
    <TrendingPageContextProvider>
      <Wrapper>
        <ContainerX>
          <h2>Explore Trending</h2>
          <h3>
            The top NFTs ranked by volume, floor price and other statistics.
          </h3>
          <Preferences />
          <Table />
        </ContainerX>
      </Wrapper>
    </TrendingPageContextProvider>
  );
};

const ContainerX = styled.div`
  max-width: 1440px;
  margin: 0 auto;

  h2 {
    margin-top: 3rem;

    text-align: center;
    font-size: 3rem;
  }

  h3 {
    font-size: 2rem;
    text-align: center;
    color: var(--color-grey50);
  }
`;

const Wrapper = styled.div`
  height: 100%;
  flex: 1;
  padding: 0 2rem 0 2rem;
`;

export default TrendingPage;
