import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import PolymerOutlinedIcon from "@material-ui/icons/PolymerOutlined";

const HeaderLogo = (props) => {
  return (
    <LinkX to="/">
      <PolymerOutlinedIcon />
      <span>Member</span>
    </LinkX>
  );
};

const LinkX = styled(Link)`
  display: flex;
  align-items: center;

  font-size: 3rem;
  font-weight: 600;
  text-decoration: none;
  color: inherit;

  span {
    margin-left: 0.6rem;
  }
  svg {
    font-size: 3rem;

    border-radius: 9999px;
    padding: 0.4rem;
    background: var(--color-blue);

    color: var(--color-white);
  }
`;

export default HeaderLogo;
