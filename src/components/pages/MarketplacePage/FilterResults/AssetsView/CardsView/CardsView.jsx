import React from "react";
import styled from "styled-components";

import useWindowDimensions from "../../../../../../hooks/useWindowDimensions";
import AssetCard from "../../../../../General/AssetCard/AssetCard";

const CardsView = (props) => {
  const { width } = useWindowDimensions();

  const gridTemplateColumnStyle =
    props.className + (1500 > width ? " small-grid" : " large-grid");

  return (
    <Wrapper>
      <ContentX className={gridTemplateColumnStyle}>
        {props.data.map((data) => {
          return <AssetCard key={data.id} data={data} />;
        })}
      </ContentX>
    </Wrapper>
  );
};

const ContentX = styled.div`
  padding: 2rem 1rem;

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
  /* background-color: green; */
  flex: 1;
`;

export default CardsView;
