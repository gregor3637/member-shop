import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";

import SortBy2 from "../../../../../../../General/SortBy/SortBy2";
import ItemBid from "../../../../../Elements/Bid/ItemBid";
import { sortMethods } from "../../../../../../../../helpers/ItemBidsTabSortingMethods";
import SortSVG from "../../../../../../../../img/currency/SortSVG";

let firstTime = true;

const TabBids = ({ bids }) => {
  const [selectedOption, setSelectedOption] = useState();
  const [bidEntries, setBidEntries] = useState([...bids]);

  useEffect(() => {
    if (firstTime === false) {
      setBidEntries((old) => [...old].sort(sortMethods[selectedOption]));
    }

    firstTime = false;
  }, [selectedOption]);

  return (
    <Wrapper>
      <SortingContainerX>
        <SortBy2X
          options={Object.keys(sortMethods)}
          selectedOption={selectedOption}
          onOptionSelect={(val) => setSelectedOption(val)}
          icon={<SortSVG />}
        />
      </SortingContainerX>
      <DivX>
        <ScrollbarX forceVisible="y" autoHide={true}>
          {bidEntries.map((bid, idx) => {
            return <ItemBidXOverride key={idx} data={bid} />;
          })}
        </ScrollbarX>
      </DivX>
    </Wrapper>
  );
};

const SortBy2X = styled(SortBy2)`
  border: 1px solid var(--color-grey20);
  border-radius: 1rem;
  font-size: 1.4rem;
  padding: 0.5rem 0;
`;


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
