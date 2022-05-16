import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import AccountBalanceWalletOutlinedIcon from "@material-ui/icons/AccountBalanceWalletOutlined";
import Account from "./components/submenu/Account/Account";
import Dropdown from "./components/DropDown";
import Marketplace from "./components/submenu/Marketplace";
import Resources from "./components/submenu/Resources";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import NewReleasesOutlinedIcon from "@mui/icons-material/NewReleasesOutlined";

const HeaderNav = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <Wrapper>
      <NavMenuX>
        <ul>
          <li>
            <Dropdown content={<Marketplace />}>
              <NavLinkX to={"/marketplace"}>Explore</NavLinkX>
            </Dropdown>
          </li>
          <li>
            <NavLinkX to={"/activity"}>Activity</NavLinkX>
          </li>
          <li>
            <Dropdown content={<Resources />}>
              <NavLinkX to={"/resources"}>Resources</NavLinkX>
            </Dropdown>
          </li>
        </ul>
      </NavMenuX>

      {!isLoggedIn && (
        <LogInButtonX>
          Connect Wallet <AccountBalanceWalletOutlinedIcon />
        </LogInButtonX>
      )}
      {isLoggedIn && (
        <UserContainerX2>
          <Dropdown content={<Account />} offset={"18"}>
            <NavLinkUserX to={"/accout"}>
              <IconContainerX>
                <AccountCircleOutlinedIcon />
              </IconContainerX>
            </NavLinkUserX>
          </Dropdown>
          <NavLinkUserX to={"/feed"}>
            <IconContainerX>
              <NotificationsNoneRoundedIcon />
              <span>{5}</span>
            </IconContainerX>
          </NavLinkUserX>
          <NavLinkUserX to={"/notifications"}>
            <IconContainerX>
              <NewReleasesOutlinedIcon />
            </IconContainerX>
          </NavLinkUserX>
          <CreateButtonX>Create</CreateButtonX>
        </UserContainerX2>
      )}
    </Wrapper>
  );
};

const CreateButtonX = styled.button`
  padding: 0.5rem 1rem;

  background: var(--color-black);
  border: none;
  border-radius: 999px;

  color: white;

  cursor: pointer;
`;

const LogInButtonX = styled.button`
  width: max-content;
  height: 4.6rem;
  padding: 0 1.4rem;

  display: flex;
  align-items: center;
  line-height: 0;
  gap: 0.5rem;

  background: var(--color-white);

  border: 1px solid var(--color-grey20);
  border-radius: 999px;

  color: var(--color-black);
  font-size: var(--fontSize-navigation);
  font-weight: var(--fontWeight-navigation);

  cursor: pointer;

  svg {
    font-size: 2.6rem;
  }
`;

const IconContainerX = styled.div`
  height: 100%;
  display: flex;
  align-items: center;

  svg {
    font-size: 3.5rem;
    color: white;
    color: black;
  }

  span {
    position: absolute;
    right: 0;
    top: 2px;

    font-size: 1.2rem;
    color: var(--font-dark-color);
    border-radius: 999px;

    line-height: 100%;
    /* border-radius: var(--market-filters--outerWrapper-radius); */
    padding: 0.2rem 0.6rem;
    background-color: var(--color-red-bright);
  }
`;

const UserContainerX2 = styled.div`
  height: 100%;
  height: 4.6rem;
  padding: 0 0.8rem;

  display: flex;
  align-items: center;
  gap: 1rem;

  border: 1px solid var(--color-grey20);
  border-radius: 999px;
  color: var(--color-black);

  svg {
    background: white;
    border-radius: 50%;
    transform: scale(0.8);
  }
`;

const NavLinkUserX = styled(NavLink)`
  position: relative;

  border-radius: 50%;

  &.active {
    background: var(--color-blue);
    svg {
      fill: var(--color-white);
      background: var(--color-blue);
    }
  }
`;

const NavLinkX = styled(NavLink)`
  position: relative;

  /* min-width: 7rem; */
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
      background: var(--color-blue);
      cursor: pointer;
      display: block;
      height: 4px;
      left: 0px;
      bottom: 0px;
      position: absolute;
      width: 100%;

      border-top-left-radius: 1rem;
      border-top-right-radius: 1rem;
    }
  }
`;

const NavMenuX = styled.div`
  display: flex;
  height: 100%;

  & > ul {
    display: flex;
    gap: 1.6rem;
    list-style-type: none;

    li {
    }
  }
`;

const Wrapper = styled.nav`
  height: 100%;

  display: flex;
  align-items: center;
  gap: 2rem;

  font-size: var(--fontSize-navigation);
  font-weight: var(--fontWeight-navigation);
`;

export default HeaderNav;
