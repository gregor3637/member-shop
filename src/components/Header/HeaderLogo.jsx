import React from "react";
import styled from "styled-components";

import PolymerOutlinedIcon from "@material-ui/icons/PolymerOutlined";

const HeaderLogo = (props) => {
  return (
    <HeaderLogoStyled>
      <PolymerOutlinedIcon />
      <span>Member</span>
    </HeaderLogoStyled>
  );
};

const HeaderLogoStyled = styled.div`
  display: flex;
  align-items: center;
  padding-right: 15rem;

  font-size: 3rem;

  span {
    margin-left: 2rem;
  }
  svg {
    font-size: 3rem;
  }
`;

export default HeaderLogo;
