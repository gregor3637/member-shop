import React from "react";
import styled from "styled-components";

import useWindowDimensions from "../../../../../hooks/useWindowDimensions";
import AssetCard from "../../../../General/AssetCard/AssetCard";
import assetsAPI from "../../../../../lib/MarketplaceAssetsAPI";

const AssetsView = (props) => {
  // const { height, width } = useWindowDimensions();
  const { width } = useWindowDimensions();

  let arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  // arr = [assetsAPI[0]];
  arr = [...assetsAPI, ...assetsAPI, ...assetsAPI, ...assetsAPI, ...assetsAPI];
  // arr = assetsAPI;

  const gridTemplateColumnStyle =
    props.className + (1500 > width ? " small-grid" : " large-grid");

  return (
    <Wrapper>
      <ContentX className={gridTemplateColumnStyle}>
        {arr.map((data, i) => {
          return (
            <AssetCard key={i} data={data} isBundle={Math.random() > 0.5} />
          );
        })}
      </ContentX>
    </Wrapper>
  );
};

const ContentX = styled.div`
  padding: 2rem 1rem;

  /* background-color: var(--color-white); */
  /* background-color: red; */
  flex: 1;
  width: 100%;
  height: 100%;

  overflow: auto;

  display: grid;
  justify-content: space-between;
  justify-content: space-between;    
  justify-items: center;
  gap: 2rem;

  &.small-grid {
    grid-template-columns: repeat(3, minmax(100px, 1fr));
  }

  &.large-grid {
    grid-template-columns: repeat(5, minmax(100px, 1fr));
  }
`;

const Wrapper = styled.div`
background-color: green;
  flex: 1;
`;

export default AssetsView;
