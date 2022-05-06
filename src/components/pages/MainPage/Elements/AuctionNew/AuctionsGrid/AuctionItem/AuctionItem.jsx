import React from "react";
import styled from "styled-components";

const AuctionItem = ({ num }) => {
  return (
    <Wrapper>
      <h3>Slide {num}</h3>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default AuctionItem;
