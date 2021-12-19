import React, { useCallback } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import useMarketFilters from "../../../../../hooks/Market/useMarketFilters";

import useToggle from "../../../../../hooks/useToggle";
import DropdownArrow from "../../../../General/Arrow/DropdownArrow";
import FilledButton from "./Buttons/FilledButton";
import CheckboxButton from "./CheckboxButton";

const styleByVisibility = (isVisible) => {
  return {
    height: isVisible ? "auto" : "0px",
    overflow: "hidden",
  };
};

const FilterDropDownContextControllingCheckboxesWithCSS = ({
  label,
  style,
}) => {
  const { state, dispatch: updateMarkedFilters } = useMarketFilters();

  const statusObj = state[label];
  const rankArr = state["rank"];
  console.log("statusObj", statusObj);
  console.log("rankArr", rankArr);

  console.log("---------------- render -------rankArr", rankArr);
  let checkboxButtons = Object.keys(statusObj).map((filterName, i) => {
    console.log("----- map -------", rankArr.includes(filterName));
    let includes = rankArr.includes(filterName);
    return (
      <CheckboxButton
        // onClick={() => {
        // updateMarkedFilters({
        //   type: label,
        //   key: filterName,
        // });
        // }}
        // isChecked={statusObj[filterName]}

        onClick={() => {
          updateMarkedFilters({
            type: "rank",
            value: filterName,
          });
        }}
        isChecked={rankArr.includes(filterName)}
        isSelected={includes}
        key={filterName}
        text={filterName}
        label={label}
      />
    );
  });

  const [isOpen, toggleIsOpen] = useToggle();

  const buttonClickHandle = useCallback(
    (event) => {
      updateMarkedFilters({
        type: "rank",
        value: event.currentTarget.dataset.label,
      });
    },
    [updateMarkedFilters]
  );

  const containsHasOffer = rankArr.includes("Has Offers");
  const containsNew = rankArr.includes("New");

  return (
    <Styled style={style}>
      <SpanX onClick={toggleIsOpen}>
        <DivLabelX>{label}</DivLabelX>
        <DropdownArrow isOpen={isOpen} />
      </SpanX>
      <MenuOptionsContainerX style={styleByVisibility(isOpen)}>
        <div className={containsHasOffer ? "active" : ""}>
          <CheckboxButton onClick={buttonClickHandle} label="Has Offers" />
        </div>
        <div className={containsNew ? "active" : ""}>
          <CheckboxButton onClick={buttonClickHandle} label="New" />
        </div>
      </MenuOptionsContainerX>
    </Styled>
  );
};

const Styled = styled.div`
  width: 100%;
  /* padding-right: 1.2rem; */

  border-top: 1px solid var(--color-border);

  span {
    padding: 1rem 0;

    display: flex;
    align-items: center;

    cursor: pointer;

    div {
      margin-right: 1rem;
    }
  }
`;

const DivLabelX = styled.div`
  font-size: 1.6rem;
  font-weight: 400;
`;

const SpanX = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MenuOptionsContainerX = styled.div`
  display: block;
  height: auto;

  overflow: hidden;
  &.open {
    background-color: red;
    height: 0px;
  }
  & > div {
    &.active {
      .checkbox {
        background-color: var(--color-black);
        border-color: var(--color-black);

        .checkmark {
          display: inline-block;
        }
      }
    }
  }
`;

export default FilterDropDownContextControllingCheckboxesWithCSS;
