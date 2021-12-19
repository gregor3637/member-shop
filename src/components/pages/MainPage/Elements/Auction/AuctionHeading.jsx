import React from "react";
import styled from "styled-components";

import SectionHeadingLink from "../SectionHeadingLink";
import DropDownTest from "../../../DropDownTest.jsx";

const Styled = styled.div`
  margin: "0";
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.2s ease;
`;

const formatDropdownData = (x) => {
  return { label: x, value: x };
};

const AuctionHeading = ({ itemCurrencies, itemTypes, onSelectedChain }) => {
  const groupOptions = [
    { label: "Currencies", options: itemCurrencies.map(formatDropdownData) },
    { label: "Types", options: itemTypes.map(formatDropdownData) },
  ];

  const onFilterHandler = (selectedOptions) => {
    //selectedOptions comes in the form of: [{label: 'Wearable', value: 'Wearable'}]

    const selectedCurrencies = itemCurrencies.filter((currency) =>
      selectedOptions.some((op) => op.label === currency)
    );

    const selectedTypes = itemTypes.filter((type) =>
      selectedOptions.some((op) => op.label === type)
    );

    onSelectedChain(selectedCurrencies, selectedTypes);
  };

  return (
    <Styled>
      <DropDownTest
        groupedOptions={groupOptions}
        onFilterSelect={onFilterHandler}
      />
      <SectionHeadingLink text="See More" url="abv.bg" />
    </Styled>
  );
};

export default AuctionHeading;
