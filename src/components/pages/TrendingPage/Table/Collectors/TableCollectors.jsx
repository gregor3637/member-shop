import React, { useEffect, useState } from "react";
import styled from "styled-components";

import useHttp2 from "../../../../../hooks/useHttp2";
import useInit from "../../../../../hooks/useInit";
import { getCollectors } from "../../../../../lib/api_Trending";
import Column from "./Column";
import Header from "./Header";

const sortMethods = {
  creatorsSupported: (a, b) =>
    b.statistics.today.creatorsSupported - a.statistics.today.creatorsSupported,
  boughtNFTs: (a, b) =>
    b.statistics.today.boughtNFTs - a.statistics.today.boughtNFTs,
  totalSpent: (a, b) =>
    b.statistics.today.totalSpent - a.statistics.today.totalSpent,
  undefined: (a, b) =>
    b.statistics.today.creatorsSupported - a.statistics.today.creatorsSupported,
};

const TableCollectors = (props) => {
  const { sendRequest, data, error, status } = useHttp2(
    getCollectors,
    true,
    []
  );
  const [sortedData, setSortedData] = useState([...data]);

  useInit(sendRequest);

  const handleHeaderClick = (headerName) => {
    setSelectedSortMethodName(headerName);
  };

  const [selectedSortMethodName, setSelectedSortMethodName] =
    useState("totalSpent");

  useEffect(() => {
    const sMethod =
      sortMethods[selectedSortMethodName] || sortMethods["undefined"];

    setSortedData(data.slice(0).sort(sMethod));
  }, [selectedSortMethodName, data]);

  return (
    <Wrapper>
      <Header onSort={handleHeaderClick} />
      <ColumnsContainerX>
        {sortedData.map((item, idx) => {
          return (
            <Column
              key={idx}
              id={idx + 1}
              name={item.name}
              walletAddress={item.walletAddress}
              avatar={item.avatar}
              creatorsSupported={item.statistics.today.creatorsSupported}
              boughtNFTs={item.statistics.today.boughtNFTs}
              currency={item.statistics.currency}
              totalSpent={item.statistics.today.totalSpent}
            />
          );
        })}
      </ColumnsContainerX>
    </Wrapper>
  );
};

const ColumnsContainerX = styled.div``;
const Wrapper = styled.div``;

export default TableCollectors;
