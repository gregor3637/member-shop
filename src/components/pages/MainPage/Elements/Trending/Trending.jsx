import React from "react";
import styled from "styled-components";

import SectopmTrendingHeader from "./TrendingHeader";
import GridView from "./GridView/GridView";

const Trending = (props) => {
  return (
    <Wrapper>
      <SectopmTrendingHeader />
      <GridView />
    </Wrapper>
  );
};

const Wrapper = styled.div`
`;

export default Trending;
