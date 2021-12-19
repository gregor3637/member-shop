import React, { useContext } from "react";
import styled from "styled-components";
import { NavLink, useRouteMatch, Switch, Route } from "react-router-dom";

import Timer from "../../../General/Timer/Timer";
import LinkHollow from "../../../Links/LinkHollow";
import AttentionDot from "../../../General/AttentionDot/AttentionDot";
import ItemCardContext from "../../../../store/ItemCardContext";

const ItemDescriptionNavigation = ({ toggleContent }) => {
  let { path, url } = useRouteMatch();
  const ctx = useContext(ItemCardContext);

  let timer = null;
  if (ctx.listing && ctx.listing.completed === false) {
    timer = (
      <TimerContainerX>
        <AttentionDot margin="0 0.5rem 0 0" radius={5} color="#ff0000" />
        <Timer
          countDownDate={ctx.listing.countdownEnd}
          style={{ padding: "0.5rem", borderRadius: "0.5rem" }}
        />
      </TimerContainerX>
    );
  }

  return (
    <Styled>
      <NavX>
        <ul onClick={toggleContent}>
          <li>
            <NavLinkX to={url} exact>
              Details
            </NavLinkX>
          </li>
          <li>
            <NavLinkX to={`${url}/bids`}>Bids</NavLinkX>
          </li>
          <li>
            <NavLinkX to={`${url}/owners`}>Owners</NavLinkX>
          </li>
          <li>
            <NavLinkX to={`${url}/history`}>History</NavLinkX>
          </li>
          <li>
            <NavLinkX to={`${url}/more`}>More</NavLinkX>
          </li>
        </ul>
      </NavX>
      {timer}
      <Switch>
        <Route path={`${path}/bids`}>
          <ModifiedLinkX>Filters</ModifiedLinkX>
        </Route>
      </Switch>
    </Styled>
  );
};
const NavX = styled.nav`
  padding-top: 2rem;
  /* background-color: var(--color-white); */

  ul {
    display: flex;
    list-style-type: none;

    li {
      display: flex; // so we have the height of parent
    }
  }
`;

const NavLinkX = styled(NavLink)`
  margin-right: 2rem;
  position: relative;
  height: 100%;

  font-size: 1.6rem;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;

  &:link,
  &:visited,
  &:active {
    color: inherit;
    text-decoration: inherit;
    font-weight: inherit;
  }

  &.active {
    color: ${(props) => props.theme.orange};
  }

  &:hover,
  &.active {
    color: var(--color-black);

    &::after {
      content: "";
      background-color: var(--color-black);
      cursor: pointer;
      display: block;
      height: 1px;
      left: 0px;
      bottom: 0px;
      position: absolute;
      width: 100%;
    }
  }
`;

const Styled = styled.div`
  position: sticky;
  top: 7rem;
  z-index: 10;

  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  backdrop-filter: blur(5px) saturate(200%);
  -webkit-backdrop-filter: blur(5px) saturate(200%);
  background-color: rgba(255, 255, 255, 0.8);
  /* border-radius: 12px; */
  border-bottom: 1px solid var(--border-color);
`;

const ModifiedLinkX = styled(LinkHollow)`
  margin-bottom: 1rem;
  padding: 0.4rem 1.5rem;
  align-self: flex-end;

  font-size: 1.2rem;
  font-weight: 600;
  color: var(--color-black);
  border-color: var(--color-black);

  cursor: pointer;
  transition: all 0.4s ease;

  &:hover {
    color: var(--color-white);
    background-color: var(--color-black);
  }
`;

const TimerContainerX = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`;

export default ItemDescriptionNavigation;
