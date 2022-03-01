import React from "react";
import styled from "styled-components";

import CurrencyView from "../AssetCardInfo/CurrencyView/CurrencyIcon";
import LastBoughtPrice from "./LastBoughtPrice/LastBoughtPrice";
import CollectionData from "./CollectionData/CollectionData";
import Button from "../../Buttons/AssetCardActionButton/ColorfulButton/ColorfulButton";

const Footer = ({ data, className }) => {
  return (
    <Wrapper className={"asset-card--footer " + className}>
      <PaddingX>
        <InfoX className="asset-card--footer-info">
          <IconsX>
            {data.price && <CurrencyView currency={data.price.currency} />}
            <CollectionData items={data.items} />
          </IconsX>
          <LastBoughtPrice data={data} />
        </InfoX>
        <ButtonsX className="asset-card--footer-buttons">
          <Button label={"Bid"} isDisabled={!data.bids.isAllowed} />
          <Button label={"Buy"} isDisabled={!data.price} />
        </ButtonsX>
      </PaddingX>
    </Wrapper>
  );
};

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
  align-items: center;
`;

const ButtonsX = styled.div`
  position: absolute;

  top: 0;
  left: 0;
  height: 100%;
  width: 100%;

  display: flex;
  gap: 2rem;
  justify-content: space-between;
  align-items: center;

  visibility: hidden;

  //'ButtonsContainerX display' is changed in 'AssetCard' on hover
`;

const PaddingX = styled.div`
  position: relative;
  height: 100%;
  margin: 0 1rem;
`;
const Wrapper = styled.div`
  /* border-top: 3px solid var(--color-border); */
  /* background: linear-gradient(rgba(226, 226, 226, 0.392) 0%, rgb(255, 255, 255) 20%); */
`;

export default Footer;
