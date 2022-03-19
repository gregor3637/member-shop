import React from "react";
import styled from "styled-components";
import { useRouteMatch } from "react-router-dom";

import NavigationButton from "../../NavigationButton/NavigationButton";

const TabNavigationButtons = () => {
  let { url } = useRouteMatch();

  return (
    <Wrapper>
      <ul>
        <li>
          <NavigationButton urlPath={`${url}/details`} label={"Details"} />
        </li>
        <li>
          <NavigationButton urlPath={`${url}/bids`} label={"Bids"} />
        </li>
        <li>
          <NavigationButton urlPath={`${url}/history`} label={"History"} />
        </li>
        <li>
          <NavigationButton urlPath={`${url}/more`} label={"More"} />
        </li>
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
