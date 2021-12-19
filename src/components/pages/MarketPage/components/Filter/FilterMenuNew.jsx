import React from "react";
import styled from "styled-components";
import Chain from "./Chain/Chain";
import FilterDropDownContextControllingCheckboxesWithCSS from "./FilterDropDownContextControllingCheckboxesWithCSS";
import FilterDropDownContextControllingCheckboxesWithCSSNew from "./FilterDropDownContextControllingCheckboxesWithCSSNew";
import Price from "./Price/Price";
import Collections from "./Collections/Collections";

const FilterMenuNew = ({ displayFilters }) => {
  return (
    <Styled>
      {/* <FilterDropDownContextControllingCheckboxesWithCSS
        label="status"
        style={{ borderTop: "none" }}
      /> */}
      <Price label="price" />
      <FilterDropDownContextControllingCheckboxesWithCSSNew label="status" />
      <Chain label="chains" />
      <Collections label="collections" />
      {/* <FilterDropDownContext label="status" style={{ borderTop: "none" }} /> */}
      {/* <FilterDropDown />
      <FilterDropDown />
      <FilterDropDown />
      <FilterDropDown />
      <FilterDropDown />
      <FilterDropDown />
      <FilterDropDown />
      <FilterDropDown />
      <FilterDropDown />
      <FilterDropDown />
      <FilterDropDown />
      <FilterDropDown />
      <FilterDropDown />
      <FilterDropDown />
      <FilterDropDown />
      <FilterDropDown /> */}
    </Styled>
  );
};

const Styled = styled.div`
  /* background-color: red; */
  height: 100%;
  width: 22rem;
  padding-right: 1rem;

  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0.7rem;
  }

  &::-webkit-scrollbar-track {
    background-color: none;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 100px;
    border-left: 0;
    border-right: 0;
    background-color: var(--color-scrollbar);
  }
`;

export default FilterMenuNew;
