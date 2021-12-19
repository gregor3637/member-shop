import React from "react";
import styled from "styled-components";
import HeaderLogo from "./HeaderLogo";

import HeaderNav from "./HeaderNav";
import HeaderSearch from "./HeaderSearch";

const HeaderStyled = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 7rem;
  padding: 0 2rem;

  z-index: 800;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: #fff;
  border-bottom: var(--line);
`;

const Header = () => {
  return (
    <HeaderStyled>
      <HeaderLogo />
      <HeaderSearch />
      <HeaderNav />
    </HeaderStyled>
  );
};

export default Header;
