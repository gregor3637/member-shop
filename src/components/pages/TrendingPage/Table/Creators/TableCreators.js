import React, { useEffect, useState } from "react";
import styled from "styled-components";

import useHttp2 from "../../../../../hooks/useHttp2";
import useInit from "../../../../../hooks/useInit";
import { getCreators } from "../../../../../lib/api_Trending";
import Column from "./Column";
import Header from "./Header";

const sortMethods = {
  uniqueCollectors: (a, b) => b.collectors.unique - a.collectors.unique,
  totalSales: (a, b) => b.sales.today.total - a.sales.today.total,
  secondarySales: (a, b) => 0,
  primarySales: (a, b) => 0,
  soldNFTs: (a, b) => 0,
  undefined: (a, b) => b.collectors.unique - a.collectors.unique,
};

const TableCreators = (props) => {
  const { sendRequest, data, error, status } = useHttp2(getCreators, true, []);
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
              uniqueCollectors={item.collectors.unique}
              soldNFTs={item.sales.today.quantity}
              currency={item.sales.currency}
              primarySales={item.sales.today.primary}
              secondarySales={item.sales.today.secondary}
              totalSales={item.sales.today.total}
            />
          );
        })}
      </ColumnsContainerX>
    </Wrapper>
  );
};

const ColumnsContainerX = styled.div``;
const Wrapper = styled.div``;

export default TableCreators;
