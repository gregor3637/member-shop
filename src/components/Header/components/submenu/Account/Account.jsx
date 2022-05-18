import React, { useState } from "react";
import styled from "styled-components";

import IMG from "../../../../../img/header/navigation/allnfts-light.svg";
import { LinkX, UlX, ImgX } from "../../StyleComponents";

import WalletData from "./WalletData/WalletData";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarSVG from "../../../../../img/svg/StarSVG";
import PlaylistAddCheckOutlinedIcon from "@mui/icons-material/PlaylistAddCheckOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import StarHalfOutlinedIcon from "@mui/icons-material/StarHalfOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import Switch from "../../../../General/Buttons/Switch/Switch";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";

const Account = (props) => {
  const [nightMode, setNightMode] = useState(false);

  const toggleThemeHandle = () => {
    setNightMode((oldValue) => !oldValue);
  };

  return (
    <Wrapper>
      <WalletData />
      <MenuX>
        <ul>
          <li>
            <LinkX to="/profile">
              <PermIdentityOutlinedIcon />
              <span>Profile</span>
            </LinkX>
          </li>
          <li>
            <LinkX to="/favorites" className="favorites">
              <StarSVG />
              {/* <StarHalfOutlinedIcon /> */}
              <span>Favorites</span>
            </LinkX>
          </li>
          {/* <li>
            <LinkX to="/collections">
              <PlaylistAddCheckOutlinedIcon />
              <span>My Collections</span>
            </LinkX>
          </li> */}
          <li>
            <LinkX to="/settings">
              <SettingsOutlinedIcon />
              <span>Settings</span>
            </LinkX>
          </li>
          <li onClick={toggleThemeHandle}>
            <SwitchButtonX>
              <span>
                <DarkModeOutlinedIcon />
                <span>Night Mode</span>
              </span>
              <Switch isChecked={nightMode} />
            </SwitchButtonX>
          </li>
          <li>
            <SwitchButtonX>
              <span>
                <PowerSettingsNewIcon />
                <span>Disconnect</span>
              </span>
            </SwitchButtonX>
          </li>
        </ul>
      </MenuX>
    </Wrapper>
  );
};

const SwitchButtonX = styled.div`
  height: 6rem;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  cursor: pointer;

  font-size: var(--fontSize-dropdown);
  user-select: none;

  & > span {
    display: flex;
  }
`;

const MenuX = styled.div`
  margin-top: 1rem;
`;

const Wrapper = styled.div`
  padding: 1rem 1rem;

  .favorites {
    svg {
      fill: var(--color-none);
      /* color: var(--color-none); */
      stroke: var(--color-black);
      stroke-width: 2;
    }
  }

  ul {
    color: var(--color-black);
  }

  li {
    list-style-type: none;
    width: 100%;
    height: 6rem;
    padding: 0 1.5rem;
    background-color: rgba(0, 0, 0, 0);
    border-radius: 1rem;

    span {
      font-size: 1.6rem;
      font-weight: 700;
    }

    svg {
      /* color: var(--color-grey50); */
      /* transform: scale(1.6); */
      width: max-content;
      margin-right: 1rem;
      width: 24px;
      height: 24px;

      background: var(--color-none);
    }

    &:not(:last-child) {
      /* border-bottom: 1px solid var(--color-border); */
    }

    &:hover {
      /* box-shadow: var(--boxShadow-dropdown); */
      background: var(--color-grey10);
    }
  }
`;

export default Account;
