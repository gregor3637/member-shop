import React, { useMemo } from "react";
import styled from "styled-components";

import StatusButtons from "./Buttons/StatusButtons";
import PriceButton from "./Buttons/PriceButton";
import ChainButtons from "./Buttons/ChainButtons";
import CollectionButtons from "./Buttons/CollectionButtons";
import useMarketFiltersContext from "../../../../../hooks/Market/useMarketFiltersContext";
import ClearAllFiltersButton from "./Buttons/ClearAllFiltersButton";

const SelectedFilters = () => {
  const {
    state: { status, price, chains, collections },
    dispatch,
  } = useMarketFiltersContext();

  const statusButtons = useMemo(() => {
    return StatusButtons("status", status, dispatch);
  }, [status, dispatch]);

  const priceButton = useMemo(() => {
    return PriceButton("price", price, dispatch);
  }, [price, dispatch]);

  const chainButtons = useMemo(() => {
    return ChainButtons("chains", chains, dispatch);
  }, [chains, dispatch]);

  const collectionButtons = useMemo(() => {
    return CollectionButtons("collections", collections, dispatch);
  }, [collections, dispatch]);

  const showClearAllButton =
    statusButtons.length > 0 ||
    collectionButtons.length > 0 ||
    chainButtons.length > 0 ||
    priceButton;

  const clearAllButton = useMemo(() => {
    return showClearAllButton ? ClearAllFiltersButton(dispatch) : null;
  }, [showClearAllButton, dispatch]);

  return (
    <>
      {showClearAllButton && (
        <Styled>
          {statusButtons}
          {priceButton}
          {chainButtons}
          {collectionButtons}
          {clearAllButton}
        </Styled>
      )}
    </>
  );
};

const Styled = styled.div`
  background-color: var(--color-white);
  background-color: var(--color-white);
  margin-bottom: 2rem;
  padding: 1rem;

  display: flex;
  flex-wrap: wrap;

  border-radius: var(--marketplace-border-radius);
`;

export default SelectedFilters;
