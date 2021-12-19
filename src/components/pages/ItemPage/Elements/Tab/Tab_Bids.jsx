import React from "react";
import styled from "styled-components";

import ItemBid from "../Bid/ItemBid";

const Tab_Bids = ({ bids }) => {
  return (
    <Styled>
      <HighestBidX>
        <ItemBidXOverride {...bids[bids.length - 1]} />
      </HighestBidX>
      <BidsContainerX>
        <Timeline></Timeline>
        <BidsX>
          {bids.map((_, idx, arr) => {
            return (
              <ItemBidXOverride key={idx} {...arr[arr.length - 1 - idx]} />
            );
          })}
        </BidsX>
      </BidsContainerX>
    </Styled>
  );
};

const ItemBidXOverride = styled(ItemBid)``;

const Styled = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  -webkit-flex-flow: column; /* doesn't work without prefix */
  flex-flow: column;
`;

const BidsX = styled.div`
  width: 100%;

  ${ItemBidXOverride} {
    margin-left: auto;
    width: 100%;
  }
`;

const HighestBidX = styled.div`
  font-size: 2rem;

  ${ItemBidXOverride} {
    margin: 1rem 0 0 0;
    padding-left: 0;

    img {
      grid-column: 1 / span 1;
      grid-row: 1 / span 2;
      width: 5rem;
      height: 5rem;
      margin-right: 1rem;

      border-radius: 50%;
    }

    &:before {
      width: 0;
      height: 0;
    }
  }
`;

const BidsContainerX = styled.div`
  display: flex;
`;
const Timeline = styled.div`
  position: relative;

  width: 5rem;

  &:before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 24px;
    width: 0;
    height: calc(100% - 2rem);
    border: 1px dotted #aaaaaa;
    border-style: dashed;
  }
`;

export default Tab_Bids;
