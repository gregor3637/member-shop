import React from "react";
import styled from "styled-components";

import AuctionTime from "./AuctionTime/AuctionTime";
import BestOffer from "./BestOffer/BestOffer";

const dummyAnnotationBadges = ["unique", "apparel", "accessory", "companion"];

const AssetCardFooter = ({ className, data }) => {
  return (
    <Wrapper className={className}>
      <MainX>
        <TitleContainerX>
          <TitleX>{data.general.name}</TitleX>
        </TitleContainerX>
        {data.auction && <AuctionTime dateEnd={data.auction} />}
        <BestOffer offers={data.bids} />
        
      </MainX>
    </Wrapper>
  );
};

// const TestX = styled.h4`
//   width: 300px;
//   display: -webkit-box;
//   -webkit-box-orient: vertical;
//   -webkit-line-clamp: 1;
//   overflow: hidden;
// `;

const TitleX = styled.p`
  /* background: red; */
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  
  font-size: 1.2rem;
  font-weight: 500;
`;

const TitleContainerX = styled.div`
  flex: 1;
  min-width: 0;
`;

const MainX = styled.div`
  padding: 0 0.5rem;
  flex: 1;

  display: flex;
  /* justify-content: space-between; */
`;

const Wrapper = styled.div`
  /* background: gold; */
  padding-top: 1.4rem;

  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export default AssetCardFooter;
