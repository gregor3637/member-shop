import React from "react";
import styled from "styled-components";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";

import MarketSortBy from "../../../../../../../General/SortBy/MarketSortBy";
import ItemBid from "../../../../../Elements/Bid/ItemBid";

const TabBids = ({ bids }) => {
  return (
    <Wrapper>
      <SortingContainerX>
        <MarketSortBy />
      </SortingContainerX>
      <DivX>
        <ScrollbarX forceVisible="y" autoHide={true}>
          {bids.map((_, idx, arr) => {
            return (
              <ItemBidXOverride key={idx} {...arr[arr.length - 1 - idx]} />
            );
          })}
        </ScrollbarX>
      </DivX>
    </Wrapper>
  );
};

const ItemBidXOverride = styled(ItemBid)`
  border-bottom: 1px solid var(--color-grey20);
  padding: 1rem 0;
`;

const ScrollbarX = styled(SimpleBar)`
  height: 100%;

  ${ItemBidXOverride}:last-child {
    border-bottom: none;
  }
`;

const DivX = styled.div`
  flex: 1;
  overflow: hidden;
  padding-top: 1rem;
`;

const SortingContainerX = styled.div`
  flex-basis: min-content;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export default TabBids;
