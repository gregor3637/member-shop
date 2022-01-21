import React from "react";
import styled from "styled-components";

import Item from "./Item";
import useWindowDimensions from "../../../../../hooks/useWindowDimensions";

const ItemsContainer = (props) => {
  // const { height, width } = useWindowDimensions();
  const { width } = useWindowDimensions();

  let arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  // arr = [1, 1, 1];

  const gridTemplateColumnStyle =
    props.className + (1500 > width ? " small-grid" : " large-grid");

  return (
    <Styled className={gridTemplateColumnStyle}>
      {arr.map((el, i) => {
        return <ItemX key={i} data={el} />;
      })}
    </Styled>
  );
};

const ItemX = styled(Item)`
  /* margin-bottom: 1rem; */
`;

const Styled = styled.div`
  padding: 2rem;
  background-color: var(--color-white);

  width: 100%;

  overflow: auto;

  display: grid;
  justify-content: space-between;
  gap: 1rem;

  &.small-grid {
    grid-template-columns: repeat(4, minmax(100px, 1fr));
  }

  &.large-grid {
    grid-template-columns: repeat(5, minmax(100px, 1fr));
  }
`;

export default ItemsContainer;
