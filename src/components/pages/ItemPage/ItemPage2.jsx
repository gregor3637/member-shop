import React, { useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import useHttp from "../../../hooks/useHttp";
import { getSingleCard } from "../../../lib/api";
import Promotion from "../MarketplacePage/Promotion/Promotion";
import ItemView from "./ItemView/ItemView";
import Info from "./Info/Info";
import ItemCardContext2 from "../../../store/Item/ItemCardContext2";

const ItemPage2 = (props) => {
  const { quoteId } = useParams();
  const {
    sendRequest,
    data: loadedAssetCardData,
    error,
    status,
  } = useHttp(getSingleCard, true);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === "pending") {
    return <div>loading...</div>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <ItemCardContext2.Provider value={loadedAssetCardData}>
      <Wrapper>
        <LeftPanelX>
          <Info assetData={loadedAssetCardData} />
          {/* <Promotion /> */}
        </LeftPanelX>

        <ItemView imgSrc={loadedAssetCardData.general.src} />
      </Wrapper>
    </ItemCardContext2.Provider>
  );
};

const LeftPanelX = styled.div`
  position: sticky;
  top: 9rem; //1rem from Wrapper.padding // 8rem from Header
  width: 34rem;
  height: calc(100vh - 8rem - 2rem); //8rem Header, 2rem for padding.bot.top
  margin-right: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
`;

const Wrapper = styled.div`
  background-color: var(--marketplace-button-background);
  flex-grow: 1;
  padding: 1rem;
  height: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export default ItemPage2;
