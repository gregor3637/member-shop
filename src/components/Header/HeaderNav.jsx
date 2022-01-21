import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import AccountBalanceWalletOutlinedIcon from "@material-ui/icons/AccountBalanceWalletOutlined";
import Account from "./components/submenu/Account";
import Dropdown from "./components/DropDown";
import Stats from "./components/submenu/Stats";
import Marketplace from "./components/submenu/Marketplace";
import Resources from "./components/submenu/Resources";

const HeaderNav = () => {
  return (
    <HeaderNavStyled>
      <ul>
        <div className="menus">
          <li>
            <Dropdown content={<Marketplace />}>
              <NavLinkX to={"/marketplace"}>Marketplace</NavLinkX>
            </Dropdown>
          </li>
          <li>
            <Dropdown content={<Stats />}>
              <NavLinkX to={"/stats"}>Statss</NavLinkX>
            </Dropdown>
          </li>
          <li>
            <Dropdown content={<Resources />}>
              <NavLinkX to={"/resources"}>Resources</NavLinkX>
            </Dropdown>
          </li>
          <li>
            <NavLinkX to={"/create"}>Createee</NavLinkX>
          </li>
        </div>
        <UserContainerX>
          <li>
            <Dropdown content={<Account />}>
              <NavLinkX to={"/accout"}>
                <IconContainerX>
                  <AccountCircleOutlinedIcon />
                </IconContainerX>
              </NavLinkX>
            </Dropdown>
          </li>
          <li>
            <NavLinkX to={"/wallet"}>
              <IconContainerX>
                <AccountBalanceWalletOutlinedIcon />
              </IconContainerX>
            </NavLinkX>
          </li>
        </UserContainerX>
      </ul>
    </HeaderNavStyled>
  );
};

const IconContainerX = styled.div`
  height: 100%;
  display: flex;
  align-items: center;

  svg {
    font-size: 3.5rem;
    color: black;
  }
`;

const UserContainerX = styled.div`
  height: 100%;

  display: flex;
  align-items: center;

  & > li {
    height: 100%;
  }
`;

const NavLinkX = styled(NavLink)`
  position: relative;

  min-width: 7rem;
  padding: 0 1rem;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  color: inherit;
  font-weight: var(--fontWeight-navigation);
  text-decoration: none;
  cursor: pointer;

  &.active {
    &::after {
      content: "";
      background-color: orange;
      cursor: pointer;
      display: block;
      height: 2px;
      left: 0px;
      bottom: 0px;
      position: absolute;
      width: 100%;
    }
  }
`;

const HeaderNavStyled = styled.nav`
  display: flex;
  height: 100%;

  font-size: var(--fontSize-navigation);
  font-weight: var(--fontWeight-navigation);

  ul {
    display: flex;
    list-style-type: none;
  }

  .menus {
    display: flex;
  }
`;

export default HeaderNav;
