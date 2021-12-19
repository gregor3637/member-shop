import React from "react";
import { useEffect } from "react";
import styled from "styled-components";
import useMarketFilters from "../../../../../hooks/Market/useMarketFilters";

import useToggle from "../../../../../hooks/useToggle";
import DropdownArrow from "../../../../General/Arrow/DropdownArrow";
import CheckboxButton from "./CheckboxButton";

const styleByVisibility = (isVisible) => {
  return {
    height: isVisible ? "auto" : "0px",
    overflow: "hidden",
  };
};

const FilterDropDownContext = ({ label, style }) => {
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

  useEffect(() => {
    console.log("---------------- FilterDropDownContext > useEffect -------");
  }, [state["rank"]]);

  const [isOpen, toggleIsOpen] = useToggle();
  const [isMoreVisible, toggleIsMoreVisible] = useToggle();

  return (
    // <Styled className={props.className}>
    <Styled style={style}>
      <SpanX onClick={toggleIsOpen}>
        <DivLabelX>{label}</DivLabelX>
        <DropdownArrow isOpen={isOpen} />
      </SpanX>
      <MenuOptionsContainerX style={styleByVisibility(isOpen)}>
        {checkboxButtons}
        {/* <CheckboxButton text="Under 1.99" />
        <CheckboxButton text="Under 2.99" />
        <CheckboxButton text="Under 2.99" />
        <CheckboxButton text="Under 2.99" /> */}
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
const ShowMoreX = styled.div``;

const OverflowContentContainerX = styled.div``;

const ButtonMoreX = styled.button`
  background-color: rgba(0, 0, 0, 0);
  width: 100%;
  padding-left: 1rem;
  padding-bottom: 1rem;

  text-align: start;

  border: none;

  cursor: pointer;
`;

const MenuOptionsContainerX = styled.div`
  display: block;
  height: auto;

  overflow: hidden;
  &.open {
    background-color: red;
    height: 0px;
  }
`;

export default FilterDropDownContext;
