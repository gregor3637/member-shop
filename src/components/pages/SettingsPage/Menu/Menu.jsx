import React from "react";
import styled from "styled-components";
import { useHistory, useLocation, useParams } from "react-router-dom";

import AssetTypeSVG from "../../../../img/svg/Drawer/AssetTypeSVG";
import MenuOption from "./MenuOption/MenuOption";

const menus = [
  "profile",
  "messaging",
  "offers",
  "earnings",
  "account support",
];

const Menu = (props) => {
  const history = useHistory();
  const location = useLocation();

  const clickHandler = (label) => {
    history.push({
      pathname: location.pathname,
      search: `tab=${label}`,
    });
  };

  return (
    <Wrapper>
      <TitleX>SETTINGS</TitleX>
      <OptionsContainerX>
        {menus.map((name) => {
          return (
            <MenuOption
              label={name}
              icon={<AssetTypeSVG />}
              key={name}
              onClick={clickHandler}
              isOpen={false}
            />
          );
        })}
      </OptionsContainerX>
    </Wrapper>
  );
};

const OptionsContainerX = styled.div`
  margin: 1rem;
`;

const TitleX = styled.div`
  font-size: 1.4rem;
  font-weight: 700;
  text-align: center;
  color: var(--color-grey50);
  padding: 1rem 0 1.4rem 1rem;

  border-bottom: 1px solid var(--color-grey20);
`;

const Wrapper = styled.div`
  background: var(--color-white);

  width: 100%;

  flex: 1;

  display: flex;
  flex-direction: column;

  font-size: 1.2rem;
  border-radius: var(--market-filters--outerWrapper-radius);
  border: 1px solid var(--color-border);
`;

export default Menu;
