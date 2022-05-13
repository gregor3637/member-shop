import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import CategorySVG from "../../../../img/svg/Drawer/CategorySVG";
import SortBy2 from "../../../General/SortBy/SortBy2";

const Navigation = ({ currentTab, setCurrentTab, options }) => {
  const history = useHistory();

  useEffect(() => {
    const searchParam =
      currentTab === "Trending"
        ? ""
        : "tab=" + currentTab.toLowerCase().replaceAll(" ", "-");

    history.push({
      pathname: "/collections",
      search: searchParam,
    });
  }, [currentTab, history]);

  return (
    <Wrapper>
      <ul>
        {options.map((tab) => {
          return (
            <li
              key={tab}
              onClick={() => setCurrentTab(tab)}
              className={currentTab === tab ? "active" : ""}
            >
              {tab}
            </li>
          );
        })}
      </ul>
      <SortBy2X
        options={options}
        selectedOption={currentTab}
        onOptionSelect={(val) => setCurrentTab(val)}
        icon={<CategorySVG />}
      />
    </Wrapper>
  );
};

const SortBy2X = styled(SortBy2)`
  /* background: var(--test-t); */
  display: none;

  width: 40rem;
  margin: auto;
  /* padding: auto 0; */
  height: 100%;

  font-size: 1.8rem;

  border: 1px solid var(--color-grey50);
  border-radius: 1rem;

  @media (max-width: 1450px) {
    display: flex;
  }
`;

const Wrapper = styled.div`
  /* background-color: var(--test-g); */
  height: 4rem;

  border-bottom: 1px solid var(--color-grey20);

  @media (max-width: 1450px) {
    border: none;
  }

  ul {
    height: 100%;
    max-width: 144rem;

    margin: 0 auto;
    margin: 0 auto;
    /* background: var(--test-t);   */
    display: flex;
    justify-content: space-between;

    gap: 1rem;

    text-transform: capitalize;
    list-style: none;

    @media (max-width: 1450px) {
      display: none;
    }

    li {
      position: relative;
      padding: auto 0;

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
        color: var(--color-black);

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
