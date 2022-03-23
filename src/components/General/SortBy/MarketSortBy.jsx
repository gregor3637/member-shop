import React, { useState } from "react";

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
  const [selectedOption, setSelectedOption] = useState(sortingOptions[0]);

  return (
    <>
      <SortBy2
        options={sortingOptions}
        selectedOption={selectedOption}
        onOptionSelect={(val) => setSelectedOption(val)}
      />
    </>
  );
};

export default MarketSortBy;
