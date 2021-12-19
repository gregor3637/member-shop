import React from "react";
import styled from "styled-components";

import AttentionDot from "../../../../General/AttentionDot/AttentionDot";
import SectionHeadingLink from "../SectionHeadingLink";

const SectopmTrendingHeader = (props) => {
  return (
    <Styled>
      <HeadStyled>
        <AttentionDot radius={10} color={"#f67d7d"} margin="0 1rem 0 0"/>
        <h2>Trending Auctions</h2>
      </HeadStyled>
      <SectionHeadingLink text="Browse" url="https://abv.bg" />
    </Styled>
  );
};

const Styled = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 2.5rem;
`;

const HeadStyled = styled.div`
  display: flex;
  align-items: center;

  h2 {
    font-size: 3rem;
    font-weight: 600;
    position: relative;
  }
`;

export default SectopmTrendingHeader;
