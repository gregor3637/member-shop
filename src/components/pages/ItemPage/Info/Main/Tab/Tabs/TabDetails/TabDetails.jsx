import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";

import ItemCardContext2 from "../../../../../../../../store/Item/ItemCardContext2";
import InfoProp from "./InfoProp/InfoProp";

const TabDetails = () => {
  const {
    contract: { creator, owner },
    summary: {
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
    },
  } = useContext(ItemCardContext2);

  return (
    <Wrapper>
      <InfoProp label="Creator" annotations={creator.royalties + "% royalties"}>
        <UserContainerX>
          <img src={creator.avatar} alt="" />
          <Link to={`/user/${creator.name}`}>{creator.name}</Link>
        </UserContainerX>
      </InfoProp>

      <InfoProp label="Owner">
        <UserContainerX>
          <img src={owner.avatar} alt="" />
          <Link to={`/user/${owner.name}`}>{owner.name}</Link>
        </UserContainerX>
      </InfoProp>

      {/* <SummaryDetails details={details} /> */}
      <InfoProp label="Description" style={{ marginTop: "1rem" }}>
        <div>{description}</div>
      </InfoProp>

      <InfoPropX label="Drop Date" style={{ marginTop: "1rem" }}>
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

const UserContainerX = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 4rem;
    margin-right: 1rem;
    border-radius: 50%;
  }

  a {
    font-size: 2rem;
    text-decoration: none;
  }
`;

const InfoPropX = styled(InfoProp)`
  /* padding-bottom: 1rem; */
  /* border-bottom: 1px solid var(--color-grey20); */
  /* background-color: var(--color-grey20); */
`;

const Wrapper = styled(SimpleBar)`
  height: 100%;

  a {
    text-decoration: inherit;
    color: inherit;
  }

  ${InfoPropX}:nth-child(even) {
    background-color: var(--color-grey10);
  }
`;

export default TabDetails;
