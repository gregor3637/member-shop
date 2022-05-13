import React, { useEffect, useState } from "react";
import styled from "styled-components";

import useHttp2 from "../../../../hooks/useHttp2";
import useInit from "../../../../hooks/useInit";
import { getCollections } from "../../../../lib/api_Collections";
import CollectionItem from "./CollectionItem/CollectionItem";

function getFilter(x, type) {
  var filters = {
    Trending: (x) => true,
    default: (x, type) => {
      return x.details?.category.includes(type.toLowerCase());
    },
  };
  return (filters[type] || filters["default"])(x, type);
}

const ItemsContainer = ({ currentTab }) => {
  const [eligibleItems, setEligibleItems] = useState([]);
  const { sendRequest, data, error, status } = useHttp2(
    getCollections,
    true,
    []
  );

  useInit(sendRequest);

  useEffect(() => {
    setEligibleItems(data.filter((x) => getFilter(x, currentTab)));
  }, [currentTab, data]);

  return (
    <Wrapper>
      <InnerContainerX>
        {eligibleItems.map((itemData, i) => {
          return <CollectionItem key={i} data={itemData} />;
        })}
      </InnerContainerX>
    </Wrapper>
  );
};

const InnerContainerX = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  margin: 0 3rem;
`;

const Wrapper = styled.div`
  max-width: 1500px;
  margin: 3rem auto;
`;

export default ItemsContainer;
