import React from "react";
import styled from "styled-components";

import InfoProp from "../InfoProp/InfoProp";

const SummaryDetails = ({
  details: {
    dropDate,
    listPrice,
    editionSupply /* eslint-disable-line */,
    edition,
    editionType /* eslint-disable-line */,
    season,
    rarity,
    license,
    brand,
    collection,
    series,
    annotations /* eslint-disable-line */,
    description,
  },
}) => {
  return (
    <Wrapper>
      <InfoProp label="Description">
        <div>{description}</div>
      </InfoProp>

      <InfoPropX label="Drop Date">
        <span>{dropDate}</span>
      </InfoPropX>

      <InfoPropX label="List Price">
        <span>{listPrice}</span>
      </InfoPropX>

      <InfoPropX label="Editions">
        <span>{edition}</span>
      </InfoPropX>

      <InfoPropX label="Season">
        <span>{season}</span>
      </InfoPropX>

      <InfoPropX label="Rarity">
        <span>{rarity}</span>
      </InfoPropX>

      <InfoPropX label="License">
        <span>{license}</span>
      </InfoPropX>

      <InfoPropX label="Brand">
        <span>{brand}</span>
      </InfoPropX>

      <InfoPropX label="Series">
        <span>{series}</span>
      </InfoPropX>

      <InfoPropX label="Collection">
        <span>{collection}</span>
      </InfoPropX>
    </Wrapper>
  );
};

const InfoPropX = styled(InfoProp)``;

const Wrapper = styled.div`
  ${InfoPropX}:nth-child(even) {
    background-color: var(--color-grey10);
  }
`;

export default SummaryDetails;
