import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import useHttp from "../../../hooks/useHttp";
import { getSingleCard } from "../../../lib/api";
import ItemViewContainer from "./ItemView/ItemViewContainer";
import Info from "./Info/Info";
import ItemCardContext2 from "../../../store/Item/ItemCardContext2";

const ItemPage2 = () => {
  const [footerHeight, setFooterHeight] = useState("");
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

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <ItemCardContext2.Provider value={loadedAssetCardData}>
      <Wrapper>
        <LeftPanelX>
          <Info status={status} setFooterHeight={setFooterHeight} />
        </LeftPanelX>

        <ItemViewContainer status={status} footerHeight={footerHeight} />
      </Wrapper>
    </ItemCardContext2.Provider>
  );
};

const LeftPanelX = styled.div`
  position: sticky;
  top: 9rem; //1rem from Wrapper.padding // 8rem from Header
  width: 34rem;
  height: calc(100vh - 8rem - 2rem); //8rem Header, 2rem for padding.bot.top

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Wrapper = styled.div`
  background-color: var(--marketplace-button-background);
  flex-grow: 1;
  padding: 1rem;
  height: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1rem;
`;

export default ItemPage2;
