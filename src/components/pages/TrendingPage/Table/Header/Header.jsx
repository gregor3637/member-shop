import React from "react";
import styled from "styled-components";

const Header = ({ onSort, selected }) => {
  return (
    <Wrapper>
      <CollectionX
        onClick={() => {
          onSort("collections");
        }}
      >
        Collection
      </CollectionX>
      <VolumeX
        onClick={() => {
          onSort("volume");
        }}

        className="sortable"
      >
        Volume
      </VolumeX>
      <DayX
        onClick={() => {
          onSort("day");
        }}
        className="disposable sortable"
      >
        Change %
      </DayX>
      <FloorPriceX
        onClick={() => {
          onSort("floorPrice");
        }}
        className="disposable sortable"
      >
        Floor Price
      </FloorPriceX>
      <OwnersX
        onClick={() => {
          onSort("owners");
        }}
        className="disposable sortable"
      >
        Owners
      </OwnersX>
      <ItemsX
        onClick={() => {
          onSort("items");
        }}
        className="disposable sortable"
      >
        Items
      </ItemsX>
    </Wrapper>
  );
};

const ItemsX = styled.div`
  flex: 0 0 15rem;

  display: flex;
  justify-content: flex-end;
`;

const OwnersX = styled.div`
  flex: 0 0 15rem;

  display: flex;
  justify-content: flex-end;
`;

const FloorPriceX = styled.div`
  flex: 0 0 15rem;

  display: flex;
  justify-content: flex-end;
`;

const WeekX = styled.div`
  flex: 0 0 15rem;

  display: flex;
  justify-content: flex-end;
`;

const DayX = styled.div`
  flex: 0 0 15rem;

  display: flex;
  justify-content: flex-end;
`;

const VolumeX = styled.div`
  flex: 0 0 15rem;

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
