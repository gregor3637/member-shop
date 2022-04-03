import React from "react";
import styled from "styled-components";

import filtersData from "../../../../../../store/Marketplace/Filters/FiltersData";

const Filters = ({ state, dispatch }) => {
  return (
    <Wrapper>
      {Object.keys(filtersData).map((filterName, i) => {
        const fData = filtersData[filterName];
        const subState = state[filterName];
        return (
          <React.Fragment key={i}>
            {fData.activeFilterComponentFunc(subState, dispatch)}
          </React.Fragment>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  margin: 2rem;

  color: var(--color-black);
`;

export default Filters;
