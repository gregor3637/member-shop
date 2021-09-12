import React, { useEffect, useState } from "react";
import styled from "styled-components";
import HeaderLogo from "./HeaderLogo";

import HeaderNav from "./HeaderNav";
import HeaderSearch from "./HeaderSearch";

const Header = (props) => {
  return (
    <HeaderStyled>
      <HeaderLogo />
      <HeaderSearch />
      <HeaderNav />
    </HeaderStyled>
  );
};

const HeaderStyled = styled.header`
  height: 7rem;
  max-width: 100vw;
  position: sticky;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: #fff;
  border-bottom: var(--line);

  
`;

export default Header;
