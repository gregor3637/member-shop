import React from "react";
import styled from "styled-components";

const Menu = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  position: sticky;
  top: 9rem; //1rem from Wrapper.padding // 8rem from Header
  width: 34rem;
  height: calc(100vh - 8rem - 2rem); //8rem Header, 2rem for padding.bot.top
  margin-right: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
`;

export default Menu;
