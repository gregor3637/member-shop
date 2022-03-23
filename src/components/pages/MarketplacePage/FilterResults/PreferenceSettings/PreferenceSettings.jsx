import React from "react";
import styled from "styled-components";

import useMarketPreferenceContext from "../../../../../hooks/Market/PreferenceContext/useMarketPreferenceContext";
import useOnScrollHandler from "../../../../../hooks/useOnScrollHandler";
import InputSearch from "../../CommonElements/InputSearch/InputSearch";
import DisplayTypes from "./DisplayTypes/DisplayTypes";
import SortBy from "./../../../../General/SortBy/SortBy";
import Favorites from "./Favorites/Favorites";
import VisibleColumns from "./VisibleColumns/VisibleColumns";

const PreferenceSettings = () => {
  const [isScrollingDown] = useOnScrollHandler(true);
  const {
    state: { searchQuery, sortingOption, displayType },
    dispatch,
  } = useMarketPreferenceContext();

  return (
    <Wrapper className={isScrollingDown ? "moved-down" : "moving-up"}>
      <InputWrapper>
        <InputSearch
          inputVal={searchQuery}
          onInput={(ev) =>
            dispatch({ type: "searchQuery", value: ev.target.value })
          }
          onClear={() => dispatch({ type: "searchQuery", value: "" })}
        />
      </InputWrapper>
      <RightX>
        {(displayType === "" || displayType === "Card") && (
          <SortBy
            selectedOption={sortingOption}
            onOptionSelect={(v) =>
              dispatch({ type: "sortingOption", value: v })
            }
          />
        )}
        {displayType === "Table" && <VisibleColumns />}
        
        <Favorites /> 
        <DisplayTypes />
      </RightX>
    </Wrapper>
  );
};

const RightX = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

const InputWrapper = styled.div`
  width: 100%;
  max-width: 500px;
`;

const Wrapper = styled.div`
  z-index: 10;
  position: sticky;
  top: 0;

  height: 6rem;
  padding: 0 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  background: var(--color-white);
  border-bottom: 1px solid var(--color-border);
  transition: all 0.2s ease-in;

  &.moving-up {
    top: 8rem;
  }
`;

export default PreferenceSettings;
