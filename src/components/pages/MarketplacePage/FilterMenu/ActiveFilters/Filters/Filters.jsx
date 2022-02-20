import React from "react";
import styled from "styled-components";
import AssetTypeGroup from "./AssetTypeGroup/AssetTypeGroup";

import GeneralGroup from "./GeneralGroup/GeneralGroup";
import PriceGroup from "./PriceGroup/PriceGroup";

const Filters = ({
  state: {
    options,
    blockchain,
    category,
    assetType,
    saleType,
    price,
    collections,
  },
  dispatch,
}) => {
  return (
    <Wrapper>
      <GeneralGroup
        context={Object.keys(options).filter((x) => options[x])}
        contextName="options"
        label="Options"
        dispatch={dispatch}
      />
      <GeneralGroup
        context={Object.keys(blockchain).filter((x) => blockchain[x])}
        contextName="blockchain"
        label="Blockchain"
        dispatch={dispatch}
      />
      <GeneralGroup
        context={Object.keys(category).filter((x) => category[x])}
        contextName="category"
        label="Category"
        dispatch={dispatch}
      />
      <GeneralGroup
        context={Object.keys(saleType).filter((x) => saleType[x])}
        contextName="saleType"
        label="Sale Type"
        dispatch={dispatch}
      />
      <GeneralGroup
        context={collections}
        contextName="collections"
        label="Collections"
        dispatch={dispatch}
      />
      <PriceGroup
        context={price}
        contextName="price"
        label="Price"
        dispatch={dispatch}
      />
      <AssetTypeGroup
        context={Object.keys(assetType).filter((x) => assetType[x])}
        contextName="assetType"
        label="AssetType"
        dispatch={dispatch}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  margin: 2rem;

  color: var(--color-black);
`;

export default Filters;
