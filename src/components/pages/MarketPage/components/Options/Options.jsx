import React from "react";
import styled from "styled-components";

import Input from "../Filter/Collections/Elements/Input";
import SortBy from "./Elements/SortBy/SortBy";
import FilterMenu from "./Elements/FilterMenu/FilterMenu";
import ActiveFilters from "./Elements/ActiveFilters/ActiveFilters";
import ActiveFilters_test from "./Elements/ActiveFilters/ActiveFilters_test";
import { useState } from "react";
import DisplayTypes from "./Elements/DisplayTypes/DisplayTypes";

const Options = ({ setIsFilterMenuOn }) => {
  const [isLargeDisplay, setIsLargeDisplay] = useState(true);

  return (
    <Styled>
      <LeftX>
        <FilterMenu setIsFilterMenuOn={setIsFilterMenuOn} />
        <SpanX>Results (5985)</SpanX>
      </LeftX>
      <AdditionalButtonsX>
        <InputX inputVal={"query"} handleInput={() => {}} />

        <ActiveFilters_test
          isLargeDisplay={isLargeDisplay}
          setIsLargeDisplay={setIsLargeDisplay}
        />
        <SortBy />
        <DisplayTypes
          isLargeDisplay={isLargeDisplay}
          setIsLargeDisplay={setIsLargeDisplay}
        />
      </AdditionalButtonsX>
    </Styled>
  );
};

const InputX = styled(Input)`
  margin: 0 0.5rem;

  input {
    background-color: var(--marketplace-button-background);
  }
`;

const SpanX = styled.div`
  font-size: 1.4rem;
  font-weight: 500;

  margin-left: 1rem;
`;

const AdditionalButtonsX = styled.div`
  padding-left: 3rem;

  flex: 0 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const LeftX = styled.div`
  flex: 0 0 auto;

  display: flex;
  align-items: center;
`;

const Styled = styled.div`
  /* background: gold; */
  width: 100%;
  height: 100%;
  padding: 0.6rem 0.8rem;
  padding: 1rem 0.8rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default Options;
