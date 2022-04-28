import React from "react";
import styled from "styled-components";

import useWindowDimensions from "../../../../../../hooks/useWindowDimensions";
import AssetCard from "../../../../../General/AssetCard/AssetCard";

const CardsView = ({ data, className }) => {
  const { width } = useWindowDimensions();

  const gridTemplateColumnStyle =
    className + (1500 > width ? " small-grid" : " large-grid");

  return (
    <Wrapper>
      <ContentX className={gridTemplateColumnStyle}>
        {data.map((data) => (
          <AssetCard key={data.id} data={data} />
        ))}
      </ContentX>
    </Wrapper>
  );
};

const ContentX = styled.div`
  padding: 2rem 1rem;

  flex: 1;
  width: 100%;
  min-width: 86rem;
  height: 100%;

  overflow: auto;

  display: grid;
  justify-items: center;
  gap: 2rem;
  grid-template-columns: repeat(3, minmax(100px, 1fr));

  /* &.small-grid { */
  /* grid-template-columns: repeat(3, minmax(100px, 1fr)); */
  /* } */

  /* &.large-grid {
    grid-template-columns: repeat(5, minmax(100px, 1fr));
  } */

  @media (min-width: 1550px) {
    grid-template-columns: repeat(4, minmax(100px, 1fr));
  }
  @media (min-width: 1800px) {
    grid-template-columns: repeat(5, minmax(100px, 1fr));
  }
`;

const Wrapper = styled.div`
  flex: 1;
`;

export default CardsView;
