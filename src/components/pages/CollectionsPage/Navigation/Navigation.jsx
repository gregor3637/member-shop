import React, { useEffect, useState } from "react";
import {
  NavLink,
  useHistory,
  useLocation,
  useRouteMatch,
} from "react-router-dom";
import styled from "styled-components";

const Navigation = (props) => {
  const [currentTab, setCurrentTab] = useState();
  let { path, url } = useRouteMatch();
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    history.push({
      pathname: "/collections",
      search: `tab=${currentTab}`,
    });
  }, [currentTab, history]);

  return (
    <Wrapper>
      <ul>
        <li
          onClick={() => setCurrentTab("Trending")}
          className={currentTab === "Trending" ? "active" : ""}
        >
          Trending
        </li>
        <li
          onClick={() => setCurrentTab("Top")}
          className={currentTab === "Top" ? "active" : ""}
        >
          Top
        </li>
        <li
          onClick={() => setCurrentTab("Art")}
          className={currentTab === "Art" ? "active" : ""}
        >
          Art
        </li>
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* background-color: green; */

  border-bottom: 1px solid var(--color-grey20);

  ul {
    max-width: 140rem;
    margin: 0 auto;
    /* background: var(--test-t);   */
    display: flex;
    justify-content: space-between;

    gap: 1rem;

    text-transform: capitalize;
    list-style: none;

    li {
      position: relative;
      padding: 1rem 0;

      font-size: 1.8rem;
      font-weight: 600;
      color: var(--color-grey50);

      cursor: pointer;
      &:hover {
        color: var(--color-black);
      }

      /* a {
        text-decoration: none;
        color: inherit; */
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
          /* } */
        }
      }
    }
  }
`;

export default Navigation;
