import React, { useEffect, useMemo } from "react";

import useMarketPreferenceContext from "../../../../../hooks/Market/PreferenceContext/useMarketPreferenceContext";
import assetsAPI from "../../../../../data/dbDataMock";
import CardsView from "./CardsView/CardsView";
import TableView from "./TableView/TableView";
import {
  filterAssetCards,
  markSelectedFilters,
} from "../../../../../lib/HelperFuncs/Filter_2";
import useMarketFiltersContext from "../../../../../hooks/Market/FiltersContext/useMarketFiltersContext";
import { sortByType } from "../../../../../lib/HelperFuncs/Sort";
import useLocalStorage2 from "../../../../../hooks/useLocalStorage2";
import useLocalStorage_Event from "../../../../../hooks/useLocalStorage_Event";
import useLocalStorageNonString from "../../../../../hooks/useLocalStorageNonString";

const hasQueryInAssetNameOrProjectName = (asset, query) => {
  return (
    asset.general.name.toLowerCase().includes(query) ||
    asset.project.name.toLowerCase().includes(query)
  );
};

const AssetsView = () => {
  const { state: preferenceState } = useMarketPreferenceContext();
  const { state: filtersState } = useMarketFiltersContext();

  const searchQueryToLowerCase = preferenceState.searchQuery.toLowerCase();

  const { storedValue, setStoredValue } = useLocalStorage_Event("favorites");

  let assetCards = useMemo(() => {
    return !preferenceState.showFavoritesOnly
      ? assetsAPI
      : assetsAPI.filter((card) => storedValue.includes(card.id));
  }, [storedValue, preferenceState.showFavoritesOnly]);

  assetCards = assetCards.filter((x) =>
    hasQueryInAssetNameOrProjectName(x, searchQueryToLowerCase)
  );

  const activeFilters = markSelectedFilters(filtersState);
  const filteredAssetCards = filterAssetCards(
    assetCards,
    activeFilters,
    filtersState
  );
  
  filteredAssetCards.sort(sortByType[preferenceState.sortingOption]);

  const { displayType } = preferenceState;

  return (
    <>
      {(displayType === "Card" || displayType === "") && (
        <CardsView data={filteredAssetCards} />
      )}
      {displayType === "Table" && <TableView data={filteredAssetCards} />}
    </>
  );
};

export default AssetsView;
