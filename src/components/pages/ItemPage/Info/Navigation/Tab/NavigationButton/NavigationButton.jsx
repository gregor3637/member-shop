import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import CollectionsSVG from "../../../../../../../img/currency/CollectionsSVG";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";

const NavigationButton = ({
  urlPath,
  label,
  isOpen = false,
  isForwards = true,
}) => {
  return (
    <LabelX to={urlPath} className={isOpen ? "active" : ""}>
      <InfoX>
        <SvgWrapperX className={isOpen ? "open" : ""}>
          <CollectionsSVG />
        </SvgWrapperX>
        <span>{label}</span>
      </InfoX>
      {isForwards ? (
        <ArrowForwardIosRoundedIcon />
      ) : (
        <ArrowBackIosRoundedIcon />
      )}
    </LabelX>
  );
};

const SvgWrapperX = styled.div`
  border-radius: 50%;
  border: 1px solid var(--color-border);

  width: 4rem;
  height: 4rem;

  display: flex;
  justify-content: center;
  align-items: center;

  &.open {
    background: var(--button-color-blue);
    border: 1px solid var(--color-none);

    svg {
      fill: var(--color-white);
    }
  }
`;

const InfoX = styled.div`
  display: flex;
  align-items: center;

  & > div {
    margin-right: 1rem;
  }

  span {
    font-weight: 700;
  }
`;

const LabelX = styled(NavLink)`
  width: 100%;
  height: 5.6rem;
  padding: 0 1rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  border-radius: var(--market-filters--button-dropdown--border-radius);
  cursor: pointer;

  &:link,
  &:visited {
    text-decoration: inherit;
    color: inherit;
    cursor: pointer;
  }

  & > div {
    font-size: 1.6rem;
    font-weight: 400;
  }

  &.active,
  &:hover {
    background: var(--market-filters--button-dropdown--bgColor-hover);
  }
`;

export default NavigationButton;
