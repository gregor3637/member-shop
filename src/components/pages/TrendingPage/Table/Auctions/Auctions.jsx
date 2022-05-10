import React, { useEffect, useState } from "react";
import styled from "styled-components";

import useHttp2 from "../../../../../hooks/useHttp2";
import useInit from "../../../../../hooks/useInit";
import { getAuctions } from "../../../../../lib/api_Trending";
import SelectedItemNew from "../../../MainPage/Elements/AuctionNew/SelectedIten/SelectedItemNew";

const Auctions = (props) => {
  const { sendRequest, data, error, status } = useHttp2(getAuctions, true, []);
  const [itemsData, setItemsData] = useState([...data]);

  useInit(sendRequest);

  useEffect(() => {
    setItemsData(data.slice(0, 5));
  }, [data]);

  return (
    <Wrapper>
      {itemsData.map((data, idx) => {
        return <SelectedItemNew key={idx} showcaseItemData={data} />;
      })}
      <span></span>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 2rem 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  @media (max-width: 1300px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

export default Auctions;
