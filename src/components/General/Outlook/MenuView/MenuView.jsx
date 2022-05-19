import React, { Children } from "react";
import styled from "styled-components";

const MenuView = (props) => {
  const childrenArray = Children.toArray(props.children);
  const menuSlot = childrenArray.find((child) => child?.props?.name === "menu");
  const viewSlot = childrenArray.find((child) => child?.props?.name === "view");

  return (
    <Wrapper>
      <MenuX>{menuSlot?.props?.children}</MenuX>
      <ViewX>{viewSlot?.props?.children}</ViewX>
    </Wrapper>
  );
};

const ViewX = styled.div`
  background: var(--color-white);
  flex: 1;
  height: 100%;

  overflow: clip;
  display: flex;
  flex-direction: column;

  border: 1px solid var(--color-border);
  border-radius: var(--market-filters--outerWrapper-radius);
`;

const MenuX = styled.div`
  position: sticky;
  top: 9rem; //1rem from Wrapper.padding // 8rem from Header
  width: 34rem;
  height: calc(100vh - 8rem - 2rem); //8rem Header, 2rem for padding.bot.top
  margin-right: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

const Wrapper = styled.div`
  background-color: var(--marketplace-button-background);
  flex-grow: 1;
  padding: 1rem;
  height: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export default MenuView;
