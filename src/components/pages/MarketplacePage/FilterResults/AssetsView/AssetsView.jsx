import React from "react";
import styled from "styled-components";

import useWindowDimensions from "../../../../../hooks/useWindowDimensions";
import AssetCard from "../../../../General/AssetCard/AssetCard";
import assetsAPI from "../../../../../lib/MarketplaceAssetsAPI";
import useMarketPreferenceContext from "../../../../../hooks/Market/PreferenceContext/useMarketPreferenceContext";
import useMarketFiltersContext from "../../../../../hooks/Market/FiltersContext/useMarketFiltersContext";
import { sortByType } from "../../../../../lib/HelperFuncs/Sort";
import {
  filterAssetCards,
  markSelectedFilters,
} from "../../../../../lib/HelperFuncs/Filter_2";

const hasQueryInAssetNameOrProjectName = (asset, query) => {
  return (
    asset.general.name.toLowerCase().includes(query) ||
    asset.general.project.name.toLowerCase().includes(query)
  );
};

const AssetsView = (props) => {
  // const { height, width } = useWindowDimensions();
  const { width } = useWindowDimensions();
  const { state: preferenceState, dispatch } = useMarketPreferenceContext();
  const { state: filtersState, dispatch: filterDispatch } =
    useMarketFiltersContext();
  const searchQueryToLowerCase = preferenceState.searchQuery.toLowerCase();

  let assetCards = [];
  // arr = [assetsAPI[0]];
  // arr = [...assetsAPI, ...assetsAPI, ...assetsAPI, ...assetsAPI, ...assetsAPI];
  assetCards = assetsAPI;

  const gridTemplateColumnStyle =
    props.className + (1500 > width ? " small-grid" : " large-grid");

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

  return (
    <Wrapper>
      <ContentX className={gridTemplateColumnStyle}>
        {filteredAssetCards.map((data) => {
          return <AssetCard key={data.id} data={data} />;
        })}
      </ContentX>
    </Wrapper>
  );
};

const ContentX = styled.div`
  padding: 2rem 1rem;

  /* background-color: var(--color-white); */
  /* background-color: red; */
  flex: 1;
  width: 100%;
  height: 100%;

  overflow: auto;

  display: grid;
  justify-content: space-between;
  justify-content: space-between;
  justify-items: center;
  gap: 2rem;

  &.small-grid {
    grid-template-columns: repeat(3, minmax(100px, 1fr));
  }

  &.large-grid {
    grid-template-columns: repeat(5, minmax(100px, 1fr));
  }
`;

const Wrapper = styled.div`
  /* background-color: green; */
  flex: 1;
`;

export default AssetsView;
