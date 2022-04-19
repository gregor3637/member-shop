import React from "react";
import styled from "styled-components";
import { useRouteMatch } from "react-router-dom";

import NavigationButton from "../../NavigationButton/NavigationButton";

import RestoreIcon from "@mui/icons-material/Restore";
import CollectionsSVG from "../../../../../../../../img/svg/Drawer/CollectionsSVG";
import SellOutlinedIcon from "@mui/icons-material/SellOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const menuIcons = {
  details: <InfoOutlinedIcon />,
  bids: <SellOutlinedIcon />,
  history: <RestoreIcon />,
  more: <CollectionsSVG />,
};

const TabNavigationButtons = () => {
  let { url } = useRouteMatch();

  return (
    <Wrapper>
      <ul>
        {Object.keys(menuIcons).map((key) => {
          return (
            <li key={key}>
              <NavigationButton
                urlPath={`${url}/${key}`}
                label={key}
                icon={menuIcons[key]}
              />
            </li>
          );
        })}
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* background-color: var(--color-white); */

  ul {
    display: flex;
    flex-direction: column;
    list-style-type: none;

    li {
      display: flex; // so we have the height of parent
    }
  }
`;

export default TabNavigationButtons;
