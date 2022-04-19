import React, { useState } from "react";
import styled from "styled-components";

import CurrencyView from "../AssetCardInfo/CurrencyView/CurrencyIcon";
import LastBoughtPrice from "./LastBoughtPrice/LastBoughtPrice";
import CollectionData from "./CollectionData/CollectionData";
import ActionButton from "../../../pages/MarketplacePage/CommonElements/ActionButton/ActionButton";
import AuctionTime from "../AssetCardInfo/AuctionTime/AuctionTime";
import BuyModal from "../../Modal/Buy/BuyModal";
import BidModal from "../../Modal/Bid/BidModal";
import BlockchainView from "../AssetCardInfo/BlockchainView/BlockchainView";

const FooterFlexible = ({ data, className }) => {
  const [showBuyModal, setShowBuyModal] = useState(false);
  const [showBidModal, setShowBidModal] = useState(false);
  return (
    <Wrapper className={"asset-card--footer " + className}>
      {showBuyModal && (
        <BuyModal itemData={data} onClose={() => setShowBuyModal(false)} />
      )}
      {showBidModal && (
        <BidModal itemData={data} onClose={() => setShowBidModal(false)} />
      )}

      <PaddingX>
        <InfoX className="asset-card--footer-info">
          <IconsX>
            <BlockchainView blockchain={data.contract.blockchain} />
            <CollectionData items={data.bundleItems} />
          </IconsX>
          <LastBoughtPrice data={data} />
          {data.auction && <AuctionTime dateEnd={data.auction} />}
        </InfoX>
        <ButtonsContainerX className="asset-card--footer-buttons">
          <ActionButton
            text={"Bid"}
            onClick={() => setShowBidModal(true)}
            isDisabled={!data.bids.isAllowed}
          />
          <ActionButton
            text={"Buy"}
            onClick={() => setShowBuyModal(true)}
            isDisabled={!data.price.currency}
          />
        </ButtonsContainerX>
      </PaddingX>
    </Wrapper>
  );
};

const ButtonsContainerX = styled.div`
  position: absolute;
  padding: 0.8rem 1rem;

  bottom: 0;
  left: 0;
  width: 100%;

  display: flex;
  gap: 1.4rem;
  justify-content: space-evenly;
  align-items: center;

  visibility: hidden;

  & > button {
    font-size: 1.6rem;
    border-radius: 1.2rem;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  //'ButtonsContainerX display' is changed in 'AssetCard' on hover
`;

const IconsX = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;
`;

const InfoX = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: space-between;
  align-items: end;
`;

const PaddingX = styled.div`
  margin: 0.5rem 1rem 1rem 1rem;
  height: 4rem;
`;

const Wrapper = styled.div``;

export default FooterFlexible;
