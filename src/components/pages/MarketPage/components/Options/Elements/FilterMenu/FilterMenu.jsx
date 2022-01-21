import React, { useEffect, useState } from "react";
import styled from "styled-components";

import HollowButton from "../../../../../../General/Buttons/HollowButton";
import useToggle from "../../../../../../../hooks/useToggle";

const FilterMenu = ({ label, setIsFilterMenuOn }) => {
  const [isActive, toggleIsActive] = useToggle(true);

  const clickHandler = (ev) => {
    toggleIsActive();
  };

  useEffect(() => {
    setIsFilterMenuOn(isActive);
  }, [isActive, setIsFilterMenuOn]);

  return (
    <ButtonX onClick={clickHandler} className={isActive ? "checked" : ""}>
      <span>Filter Menu</span>
      <SliderX className={isActive ? "checked" : ""} />
    </ButtonX>
  );
};

const SliderX = styled.span`
    display: flex;
    cursor: pointer;
    width: 4rem;
    height: 2.4rem;
    border-radius: 10rem;
    background-color: #bfbfbf;
    position: relative;
    transition: background-color: 0.2s;
    margin-left: 0.5rem;

    &:before{
        content: "";
        position: absolute;
        top: 0.2rem;
        left: 0.2rem;
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        transition: 0.2s;
        background-color: #fff;
    }

    &.checked {
        background-color: #1890ff;

        &:before {
            left: calc(100% - 2rem - 0.2rem);
        }
    }
`;

const ButtonX = styled(HollowButton)`
  padding: 0.2rem 0.4rem 0.2rem 0.6rem;
  position: relative;

  background-color: var(--marketplace-button-background);
  border-radius: 1.2rem;
`;
export default FilterMenu;
