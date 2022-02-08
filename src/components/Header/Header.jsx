import React from "react";
import styled from "styled-components";
import HeaderLogo from "./HeaderLogo";

import HeaderNav from "./HeaderNav";
import HeaderSearch from "./HeaderSearch";

const Header = () => {
  return (
    <Styled>
      <div>
        <HeaderLogo />
        <HeaderSearch />
        <HeaderNav />
      </div>
    </Styled>
  );
};

const Styled = styled.header`
  /* opacity: 0.1; */
  flex: 0 0 8rem;
  width: 100%;

  z-index: 800;

  & > div {
    width: 100%;
    height: 8rem;
    top: 0;
    padding: 0 2rem;
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: #fff;
    border-bottom: var(--line);
  }
`;

export default Header;
