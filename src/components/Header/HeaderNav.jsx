import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import AccountBalanceWalletOutlinedIcon from "@material-ui/icons/AccountBalanceWalletOutlined";
import Account from "./components/submenu/Account";
import Dropdown from "./components/DropDown";
import Stats from "./components/submenu/Stats";
import Marketplace from "./components/submenu/Marketplace";
import Resources from "./components/submenu/Resources";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import CircleNotificationsRoundedIcon from "@mui/icons-material/CircleNotificationsRounded";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import NewReleasesOutlinedIcon from "@mui/icons-material/NewReleasesOutlined";
import NewReleasesRoundedIcon from "@mui/icons-material/NewReleasesRounded";
import AddCommentRoundedIcon from "@mui/icons-material/AddCommentRounded";
import LightbulbCircleRoundedIcon from "@mui/icons-material/LightbulbCircleRounded";

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
            <NavLinkX to={"/about"}>About</NavLinkX>
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
            <NavLinkX to={"/accout"}>
              <IconContainerX>
                <AccountCircleOutlinedIcon />
              </IconContainerX>
            </NavLinkX>
          </Dropdown>
          <NavLinkX to={"/accout"}>
            <IconContainerX>
              <NotificationsNoneRoundedIcon />
            </IconContainerX>
          </NavLinkX>
          <NavLinkX to={"/accout"}>
            <IconContainerX>
              <NewReleasesOutlinedIcon />
            </IconContainerX>
          </NavLinkX>
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

  /* background: white; */

  svg {
    font-size: 3.5rem;
    color: white;
    color: black;
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

    /* border-radius: 0;
    color: white;
    background: black; */

    transform: scale(0.8);
  }
`;

const UserContainerX = styled.div`
  background: var(--color-black);

  height: 100%;
  height: 4.4rem;
  padding: 0 2rem;

  display: flex;
  align-items: center;
  gap: 1rem;

  border: none;
  border-radius: 999px;

  svg {
    background: white;
    border-radius: 50%;

    border-radius: 0;
    color: white;
    background: black;

    transform: scale(0.8);
  }

  color: white;
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

const NavMenuX = styled.div`
  display: flex;
  height: 100%;

  & > ul {
    display: flex;
    gap: 1.6rem;
    list-style-type: none;
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
