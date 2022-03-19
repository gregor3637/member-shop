import React, { useState } from "react";
import styled from "styled-components";

import SortBy2 from "./SortBy2";

const sortingOptions = [
  "Newest",
  "Oldest",
  "Ascending Name",
  "Descending Name",
  "Price: High to Low",
  "Price: Low to High",
];

const MarketSortBy = (props) => {
  const [selectedOption, setselectedOption] = useState(sortingOptions[0]);

  return (
    <>
      <SortBy2
        options={sortingOptions}
        selectedOption={selectedOption}
        onOptionSelect={(val) => setselectedOption(val)}
      />
    </>
  );
};

export default MarketSortBy;
