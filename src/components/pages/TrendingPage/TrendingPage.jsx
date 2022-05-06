import React, { useState } from "react";
import styled from "styled-components";

import { TrendingPageContextProvider } from "../../../hooks/TrendingPage/TrendingPageContext";
import useHttp2 from "../../../hooks/useHttp2";
import useInit from "../../../hooks/useInit";
import { getCollections } from "../../../lib/api_Trending";
import Preferences from "./Preferences/Preferences";
import Table2 from "./Table/Table2";

const TrendingPage = (props) => {
  const {
    sendRequest,
    data: tableItems,
    error,
    status,
  } = useHttp2(getCollections, true, []);

  useInit(sendRequest);

  return (
    <TrendingPageContextProvider>
      <Wrapper>
        <ContainerX>
          <h2>Explore Trending</h2>
          <h3>
            The top NFTs ranked by volume, floor price and other statistics.
          </h3>
          <Preferences />
          <Table2 collectionsData={tableItems} />
        </ContainerX>
      </Wrapper>
    </TrendingPageContextProvider>
  );
};

const ContainerX = styled.div`
  height: 100%;
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
