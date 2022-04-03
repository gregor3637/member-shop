import React, { useMemo } from "react";

import useMarketPreferenceContext from "../../../../../hooks/Market/PreferenceContext/useMarketPreferenceContext";
import assetsAPI from "../../../../../data/dbDataMock";
import CardsView from "./CardsView/CardsView";
import TableView from "./TableView/TableView";
import { eligibleItemsByFilterState } from "../../../../../lib/HelperFuncs/Filter";
import useMarketFiltersContext from "../../../../../hooks/Market/FiltersContext/useMarketFiltersContext";
import { sortByType } from "../../../../../lib/HelperFuncs/Sort";
import useLocalStorage_Event from "../../../../../hooks/useLocalStorage_Event";

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

  const { storedValue } = useLocalStorage_Event("favorites");

  let assetCards = useMemo(() => {
    return !preferenceState.showFavoritesOnly
      ? assetsAPI
      : assetsAPI.filter((card) => storedValue.includes(card.id));
  }, [storedValue, preferenceState.showFavoritesOnly]);

  assetCards = assetCards.filter((x) =>
    hasQueryInAssetNameOrProjectName(x, searchQueryToLowerCase)
  );

  const eligibleItems = eligibleItemsByFilterState(
    assetCards,
    filtersState
  ).sort(sortByType[preferenceState.sortingOption]);

  console.log("av | eligibleItems ", eligibleItems);

  const { displayType } = preferenceState;

  return (
    <>
      {(displayType === "Card" || displayType === "") && (
        <CardsView data={eligibleItems} />
      )}
      {displayType === "Table" && <TableView data={eligibleItems} />}
    </>
  );
};

export default AssetsView;
