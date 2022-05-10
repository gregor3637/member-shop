import React from "react";
import styled from "styled-components";

const Header = ({ onSort, selected }) => {
  return (
    <Wrapper>
      <CollectionX># Rank</CollectionX>
      <UniqueCollectorsX
        onClick={() => onSort("uniqueCollectors")}
        className="sortable"
      >
        Unique Collectors
      </UniqueCollectorsX>
      <NFTsSoldX
        onClick={() => onSort("soldNFTs")}
        className="disposable sortable"
      >
        NFTs Sold
      </NFTsSoldX>
      <PrimarySalesX
        onClick={() => onSort("primarySales")}
        className="disposable sortable"
      >
        Primary Sales
      </PrimarySalesX>
      <SecondarySalesX
        onClick={() => onSort("secondarySales")}
        className="disposable sortable"
      >
        Secondary Sales
      </SecondarySalesX>
      <TotalSalesX onClick={() => onSort("totalSales")} className="sortable">
        Total Sales
      </TotalSalesX>
    </Wrapper>
  );
};

const TotalSalesX = styled.div`
  flex: 0 0 15rem;
`;

const SecondarySalesX = styled.div`
  flex: 0 0 15rem;
`;

const PrimarySalesX = styled.div`
  flex: 0 0 15rem;

  display: flex;
  justify-content: flex-end;
`;

const NFTsSoldX = styled.div`
  flex: 0 0 15rem;

  display: flex;
  justify-content: flex-end;
`;

const UniqueCollectorsX = styled.div`
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
    display: none;
  }

  .sortable {
    cursor: pointer;
  }
`;

export default Header;
