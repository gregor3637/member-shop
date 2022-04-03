import { useEffect, useState } from "react";

import { getElementsById_inDbMockData } from "../../lib/api";
import useHttp from "../useHttp";
import useInit from "../useInit";

export function useGetAssetItemsAlike(itemsPerPage, assetCardsId) {
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(assetCardsId.length > itemsPerPage);
  const [entries, setEntries] = useState([]);
  const [idOfRelatedItems] = useState(assetCardsId);

  const {
    sendRequest,
    status,
    data: loadedRelatedItems,
    error,
  } = useHttp(getElementsById_inDbMockData, true);

  //1 on first load, send request only once so we load first items
  useInit(sendRequest, assetCardsId.slice(0, itemsPerPage));

  //2: save and update RelatedItems
  useEffect(() => {
    console.log("loadedRelatedItems ", loadedRelatedItems);
    if (loadedRelatedItems && loadedRelatedItems.length !== 0) {
      setEntries((old) => [...old, ...loadedRelatedItems]);
    }
  }, [loadedRelatedItems]);

  //3: on every page change
  useEffect(() => {
    if (page !== 0 && hasMore === true) {
      const startIndex = page * itemsPerPage;
      const endIntex = startIndex + itemsPerPage;
      const searchedIds = idOfRelatedItems.slice(startIndex, endIntex);

      sendRequest(searchedIds);

      if (endIntex > idOfRelatedItems.length - 1) {
        setHasMore(false);
      }
    }
  }, [page, idOfRelatedItems, sendRequest, hasMore, itemsPerPage]); //only page should change

  return {
    setPage,
    hasMore,
    status,
    entries,
    error,
  };
}
