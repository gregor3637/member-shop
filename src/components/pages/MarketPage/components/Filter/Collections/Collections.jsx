import React, { useState } from "react";
import styled from "styled-components";

import { useCollectionSearch_3333 } from "../../../../../../hooks/Market/useCollectionSearch";
import useMarketFiltersContext from "../../../../../../hooks/Market/useMarketFiltersContext";
import FilteredElements from "./Elements/FilteredElements";
import SelectedElements from "./Elements/SelectedElements";
import InputSearch from "../../Common/InputSearch";

const Collections = () => {
  const [query, setQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(0);
  const { state, dispatch } = useMarketFiltersContext();

  const [selectedCollections, setSelectedCollections] = useState([]);

  const { loading, dbItems, hasMore } = useCollectionSearch_3333(
    query,
    pageNumber
  );

  const dbItemsNotPresentInReducerState = dbItems.filter(
    (elem) => !state.collections.includes(elem.label)
    //above will be replaced by below ??!?!?!?
    // (elem) => !selectedCollections.includes(elem.label)
  );

  const handleInput = (input) => {
    setQuery(input);
    setPageNumber(0);
  };

  const handleApply = () => {
    dispatch({
      type: "collections",
      value: selectedCollections,
    });

    setSelectedCollections([]);
  };

  const handleClear = () => {
    setSelectedCollections([]);
  };

  //SelectedElements has to be 'current state[collections]'
  //+ elements that we have clicked and not yet applied

  return (
    <Wrapper>
      <div>
        <InputSearch />
      </div>
      <InputResultX>
        <SelectedElements
          selectedCollections={state.collections}
          filterDispatcher={dispatch}
        />
        <FilteredElements
          elementsData={dbItemsNotPresentInReducerState}
          filterDispatcher={dispatch}
          loading={loading}
          hasMore={hasMore}
          setPageNumber={setPageNumber}
        />
      </InputResultX>
      <ButtonWrapperX>
        <ButtonX>Clear</ButtonX>
        <ButtonX onClick={handleApply}>Apply</ButtonX>
      </ButtonWrapperX>
    </Wrapper>
  );
};
const ButtonX = styled.button`
  padding: 1rem 4.4rem;
  border-radius: var(--market-filters-button-border-radius);
  background-color: var(--market-filters-dropdown-hover);
  background-color: var(--market-filters-button-color);
  border: none;
  outline: none;
`;

const ButtonWrapperX = styled.div`
  width: 100%;
  padding: 1rem;

  display: flex;
  justify-content: center;
  gap: 1.4rem;

  background-color: var(--color-white);
  border-top: 1px solid var(--color-border);
`;

const InputResultX = styled.div`
  margin-top: 1rem;

  flex: 1 1 auto;
  overflow-y: auto;
  min-height: 0px;

  &:hover {
    &::-webkit-scrollbar-thumb {
      background-color: var(--color-scrollbar);
    }
  }

  &::-webkit-scrollbar {
    width: 0.7rem;
  }

  &::-webkit-scrollbar-track {
    background-color: var(--color-none);
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 100px;
    border-left: 0;
    border-right: 0;
    background-color: var(--color-none);
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 40rem;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export default Collections;
