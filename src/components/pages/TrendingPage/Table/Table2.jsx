import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Header from "./Header/Header";
import Column from "./Column/Column";
import useTrendingPageContext from "../../../../hooks/TrendingPage/useTrendingPageContext";

const sortMethods = {
  volume: (a, b) => +b.volume - +a.volume,
  day: (a, b) => b.dailyChange - a.dailyChange,
  week: (a, b) => b.weeklyChange - a.weeklyChange,
  floorPrice: (a, b) => b.floorPrice - a.floorPrice,
  owners: (a, b) => b.owners - a.owners,
  items: (a, b) => b.items - a.items,
};

const Table2 = ({ collectionsData }) => {
  const {
    state: { categoryType, categoryTimeHorizon, blockchain, type }
  } = useTrendingPageContext();

  const handleHeaderClick = (headerName) => {
    setSelectedSortMethodName(headerName);
  };

  const [selectedSortMethodName, setSelectedSortMethodName] =
    useState("volume");

  const [sortedData, setSortedData] = useState([...collectionsData]);

  const [filteredItems, setFilteredItems] = useState([]);

  // useEffect(() => {}, [
  //   collectionsData,
  //   categoryTimeHorizon.selected,
  //   blockchain.selected,
  //   type.selected,
  // ]);

  useEffect(() => {
    const sMethod =
      sortMethods[selectedSortMethodName] || sortMethods["volume"];
    setSortedData(collectionsData.slice(0).sort(sMethod));
  }, [selectedSortMethodName, collectionsData]);

  return (
    <Wrapper>
      <Header onSort={handleHeaderClick} />
      <ColumnsContainerX>
        {sortedData.map((data, idx) => {
          return (
            <Column
              key={idx}
              id={idx + 1}
              name={data.name}
              avatar={data.avatar}
              currency={data.currency}
              volume={data.volume}
              percentageChange={data.dailyChange}
              floorPrice={data.floorPrice}
              owners={data.owners}
              items={data.items}
            />
          );
        })}
      </ColumnsContainerX>
    </Wrapper>
  );
};

const ColumnsContainerX = styled.div``;

const Wrapper = styled.div``;

export default Table2;
