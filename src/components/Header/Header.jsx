import React from "react";
import styled from "styled-components";
import HeaderLogo from "./HeaderLogo";

import HeaderNav from "./HeaderNav";
import HeaderSearch from "./HeaderSearch";

const Header = () => {
  return (
    <Wrapper>
      <div>
        <InnerWrapperX>
          <HeaderLogo />
          <HeaderSearch />
          <HeaderNav />
        </InnerWrapperX>
      </div>
    </Wrapper>
  );
};

const InnerWrapperX = styled.div`

  max-width: 1440px;
  margin: 0 auto;
  height: 8rem;
  top: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
`;

const Wrapper = styled.header`
  flex: 0 0 8rem;
  width: 100%;

  & > div {
    width: 100%;
    position: fixed;
    padding: 0 2rem;

    background-color: var(--color-white);
    border-bottom: var(--line);

    z-index: 999;
  }
`;

export default Header;
