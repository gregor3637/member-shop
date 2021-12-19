import React, { useState } from "react";
import styled from "styled-components";

import IMG from "../../../../img/header/navigation/allnfts-light.svg";
import { LinkX, UlX, LiX, ImgX } from "../StyleComponents";

const Account = (props) => {
  const [nightMode, setNightMode] = useState(false);

  const toggleThemeHandle = () => {
    setNightMode((oldValue) => !oldValue);
  };

  return (
    <UlX>
      <LiX>
        <LinkX to="/profile">
          <ImgX src={IMG} alt="" />
          <span>Profile</span>
        </LinkX>
      </LiX>
      <LiX>
        <LinkX to="/favorites">
          <ImgX src={IMG} alt="" />
          <span>Favorites</span>
        </LinkX>
      </LiX>
      <LiX>
        <LinkX to="/collections">
          <ImgX src={IMG} alt="" />
          <span>My Collections</span>
        </LinkX>
      </LiX>
      <LiX>
        <LinkX to="/settings">
          <ImgX src={IMG} alt="" />
          <span>Settings</span>
        </LinkX>
      </LiX>
      <li>
        <SwitchButtonX onClick={toggleThemeHandle}>
          <ImgX src={IMG} alt="" />
          <span>{nightMode ? "Night Mode" : "Light Mode"}</span>
        </SwitchButtonX>
      </li>
    </UlX>
  );
};

const SwitchButtonX = styled.div`
  height: 6rem;
  width: 100%;
  padding: 0 1.5rem;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  cursor: pointer;

  font-size: var(--fontSize-dropdown);
  user-select: none;

  &:hover {
    box-shadow: var(--boxShadow-dropdown);
  }
`;

export default Account;
