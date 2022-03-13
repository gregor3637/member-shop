import React from "react";

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

const hasQueryInAssetNameOrProjectName = (asset, query) => {
  return (
    asset.general.name.toLowerCase().includes(query) ||
    asset.general.project.name.toLowerCase().includes(query)
  );
};

const AssetsView = () => {
  const { state: preferenceState } = useMarketPreferenceContext();
  const { state: filtersState } = useMarketFiltersContext();

  const searchQueryToLowerCase = preferenceState.searchQuery.toLowerCase();

  let assetCards = assetsAPI;

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
