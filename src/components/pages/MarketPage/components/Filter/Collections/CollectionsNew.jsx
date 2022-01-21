import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { useCollectionSearch_3333 } from "../../../../../../hooks/Market/useCollectionSearch";
import useMarketFiltersContext from "../../../../../../hooks/Market/useMarketFiltersContext";
import InputSearch from "../../Common/InputSearch";
import ActionButton from "../../Common/ActionButton";
import Chosen from "./Chosen";
import Filtered from "./Filtered";

const toggleItemInArray = (arr, value) => {
  const index = arr.indexOf(value);

  return index > -1
    ? [...arr.slice(0, index), ...arr.slice(index + 1)]
    : [...arr, value];
};

const CollectionsNew = () => {
  const [query, setQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(0);
  const { state, dispatch } = useMarketFiltersContext();

  const [selectedCollections, setSelectedCollections] = useState([]);

  const { loading, dbItems, hasMore } = useCollectionSearch_3333(
    query,
    pageNumber
  );

  const dbItemsNotPresentInReducerState = dbItems.filter(
    (elem) => !selectedCollections.includes(elem.label)
  );

  const handleInput = (ev) => {
    setQuery(ev.target.value);
    setPageNumber(0);
  };

  const handleClearInput = (ev) => {
    setQuery("");
    setPageNumber(0);
  };

  const handleApply = () => {
    dispatch({
      type: "collections",
      value: selectedCollections,
    });
  };

  const handleClear = () => {
    setSelectedCollections(state.collections);
  };

  const handleFilteredElementClick = (label) => {
    setSelectedCollections(toggleItemInArray(selectedCollections, label));
  };
  const handleChosenElementClick = (label) => {
    setSelectedCollections(toggleItemInArray(selectedCollections, label));
  };

  useEffect(() => {
    setSelectedCollections(state.collections);
  }, [state.collections]);

  return (
    <Wrapper>
      <div>
        <InputSearch
          inputVal={query}
          onInput={handleInput}
          onClear={handleClearInput}
          isLoading={loading}
        />
      </div>
      <InputResultX>
        <Chosen
          elements={selectedCollections}
          handleElementClick={handleChosenElementClick}
        />
        <Filtered
          elementsData={dbItemsNotPresentInReducerState}
          handleElementClick={handleFilteredElementClick}
          loading={loading}
          hasMore={hasMore}
          setPageNumber={setPageNumber}
        />
      </InputResultX>
      <ButtonWrapperX>
        <ActionButton
          text={"Clear"}
          onClick={handleClear}
          isDisabled={selectedCollections === state.collections}
        />
        <ActionButton
          text={"Apply"}
          onClick={handleApply}
          isDisabled={selectedCollections === state.collections}
        />
      </ButtonWrapperX>
    </Wrapper>
  );
};

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
  padding: 1rem 0;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export default CollectionsNew;
