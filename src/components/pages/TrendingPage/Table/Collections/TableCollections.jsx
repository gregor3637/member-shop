import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Header from "./Header/Header";
import Column from "./Column/Column";
import useTrendingPageContext from "../../../../../hooks/TrendingPage/useTrendingPageContext";
import useInit from "../../../../../hooks/useInit";
import useHttp2 from "../../../../../hooks/useHttp2";
import { getCollections } from "../../../../../lib/api_Trending";

const sortMethods = {
  volume: (a, b) => b.statistics.volume - a.statistics.volume,
  day: (a, b) => b.statistics.today.change - a.statistics.today.change,
  week: (a, b) => b.statistics.week.change - a.statistics.week.change,
  floorPrice: (a, b) => b.statistics.floorPrice - a.statistics.floorPrice,
  owners: (a, b) => b.owners - a.owners,
  items: (a, b) => b.items - a.items,
};

const TableCollections = () => {
  const {
    state: { categoryTimeHorizon, blockchain, type },
  } = useTrendingPageContext();

  const {
    sendRequest,
    data: tableItemsData,
    error,
    status,
  } = useHttp2(getCollections, true, []);

  useInit(sendRequest);

  const [selectedSortMethodName, setSelectedSortMethodName] =
    useState("volume");

  const handleHeaderClick = (headerName) => {
    setSelectedSortMethodName(headerName);
  };

  const [sortedData, setSortedData] = useState([...tableItemsData]);

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

    setSortedData(tableItemsData.slice(0).sort(sMethod));
  }, [selectedSortMethodName, tableItemsData]);

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
              currency={data.statistics.currency}
              volume={data.statistics.volume}
              percentageChange={data.statistics.today.change}
              floorPrice={data.statistics.floorPrice}
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

export default TableCollections;
