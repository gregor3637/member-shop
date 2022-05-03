import React, { useEffect, useState } from "react";
import styled from "styled-components";

import dbItemsDataMockaroo from "../../../../../../data/dbItemsDataMockaroo";
import useHomePageContext from "../../../../../../hooks/HomePage/useHomePageContext";
import SelectedIten from "../SelectedIten/SelectedIten";
import AuctionsGrid from "../AuctionsGrid/AuctionsGrid";
import sortAssetItemByHeighestFirstBid from "../../../../../../helpers/SortAssetItemByHeighestFirstBid";
import useInit from "../../../../../../hooks/useInit";

let isFirstTine = true;

const Body = () => {
  const {
    state: { categoryType, categoryTimeHorizon },
  } = useHomePageContext();
  const [downloadedItems, setDownloadedItems] = useState(dbItemsDataMockaroo);
  const [showcaseItem, setShowcaseItem] = useState(null);
  const [topAuctions, setTopAuctions] = useState([]);

  useInit(() => {
    setDownloadedItems(dbItemsDataMockaroo);
    setShowcaseItem(dbItemsDataMockaroo?.[0]);
    setTopAuctions(dbItemsDataMockaroo);
  });

  useEffect(() => {
    if (!isFirstTine) {
      const items =
        categoryType.selected === "all"
          ? downloadedItems
          : downloadedItems.filter((x) =>
              x.summary.category.includes(categoryType.selected)
            );

      let sorted = [...items]?.sort(sortAssetItemByHeighestFirstBid);

      setShowcaseItem(sorted?.[0]);
      setTopAuctions(sorted);
    }
    isFirstTine = false;
  }, [categoryType.selected, categoryTimeHorizon.selected, downloadedItems]);

  return (
    <Wrapper>
      {topAuctions?.length === 0 ? (
        <AbsentDataContainerX>
          No Items correspond to selected filters
        </AbsentDataContainerX>
      ) : (
        <>
          <SelectedIten showcaseItemData={showcaseItem} />
          <AuctionsGrid setSelected={setShowcaseItem} itemsData={topAuctions} />
        </>
      )}
    </Wrapper>
  );
};

const AbsentDataContainerX = styled.div`
  font-size: 2rem;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 46.5rem;
  display: flex;
  gap: 2rem;

  align-items: center;
  justify-content: center;
`;

export default Body;
