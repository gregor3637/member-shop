import React from "react";
import styled from "styled-components";

const Header = ({ onSort, selected }) => {
  return (
    <Wrapper>
      <CollectionX># Rank</CollectionX>
      <CreatorsSupportedX
        onClick={() => onSort("creatorsSupported")}
        className="creatorsSupported sortable"
      >
        Creators Supported
      </CreatorsSupportedX>
      <BoughtNFTsX
        onClick={() => onSort("boughtNFTs")}
        className="disposable sortable"
      >
        NFTs Bought
      </BoughtNFTsX>
      <TotalSpentX
        onClick={() => onSort("totalSpent")}
        className="disposable sortable"
      >
        Total Spent
      </TotalSpentX>
    </Wrapper>
  );
};

const TotalSpentX = styled.div`
  flex: 0 0 15rem;

  display: flex;
  justify-content: flex-end;
`;

const BoughtNFTsX = styled.div`
  flex: 0 0 15rem;

  display: flex;
  justify-content: flex-end;
`;

const CreatorsSupportedX = styled.div`
  flex: 0 0 20rem;

  display: flex;
  justify-content: flex-end;
`;

const CollectionX = styled.div`
  flex: 0 0 40rem;
`;

const Wrapper = styled.div`
  padding: 1rem 1rem;

  display: flex;
  justify-content: space-between;

  font-size: 1.6rem;
  font-weight: 600;

  border-bottom: 1px solid var(--color-grey40);

  @media (max-width: 1350px) {
    /* display: none; */
    visibility: hidden;
  }

  .sortable {
    cursor: pointer;
  }
`;

export default Header;
