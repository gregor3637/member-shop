import React from "react";
import styled from "styled-components";
import HeaderButton from "./HeaderButton";

import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import AccountBalanceWalletOutlinedIcon from "@material-ui/icons/AccountBalanceWalletOutlined";

const HeaderNav = (props) => {
  let account = <AccountCircleOutlinedIcon />;
  let wallet = <AccountBalanceWalletOutlinedIcon />;

  return (
    <HeaderNavStyled>
      <ul>
        <div className="menus">
          <li>
            <HeaderButton text="Marketplace" />
          </li>
          <li>
            <HeaderButton text="Stats" />
          </li>
          <li>
            <HeaderButton text="Resources" />
          </li>
          <li>
            <HeaderButton text="Create" />
          </li>
        </div>
        <div className="account">
          <li>
            <HeaderButton icon={account} />
          </li>
          <li>
            <HeaderButton icon={wallet} />
          </li>
        </div>
      </ul>
    </HeaderNavStyled>
  );
};

const HeaderNavStyled = styled.nav`
  display: flex;
  height: 100%;
  font-size: 2rem;

  ul {
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  .menus {
    display: flex;
  }

  .account {
    display: flex;
    li {
      display: flex;
    }
  }
`;

export default HeaderNav;
