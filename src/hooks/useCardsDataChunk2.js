import { useEffect, useState } from "react";
import useHttp from "./useHttp";
import useInit from "./useInit";
import { getElementsById, getIDsOfRelatedItems } from "../lib/api";

const useCardsDataChunk2 = (initPage, itemsPerPage, idOfRelatedTo) => {
  const [page, setPage] = useState(initPage);
  const [isAllLoaded, setIsAllLoaded] = useState(false);
  const [entries, setEntries] = useState([]);

  const [idOfRelatedItems, setIdOfRelatedItems] = useState([]);

  const {
    sendRequest,
    status,
    data: loadedRelatedItems,
    error,
  } = useHttp(getElementsById, true);

  const initializeFirstCards = async (
    idOfRelatedTo,
    itemsPerPage,
    sendRequest,
    setIdOfRelatedItems
  ) => {
    //1: get all ids of related elements
    const ids = await getIDsOfRelatedItems(idOfRelatedTo);

    //2: load first N elements
    const searchedIds = ids.slice(0, itemsPerPage);
    sendRequest(searchedIds);
    setIdOfRelatedItems(ids);
  };

  useInit(
    initializeFirstCards,
    idOfRelatedTo,
    itemsPerPage,
    sendRequest,
    setIdOfRelatedItems
  );

  //2: save and update RelatedItems
  useEffect(() => {
    if (loadedRelatedItems && loadedRelatedItems.length !== 0) {
      setEntries((old) => [...old, ...loadedRelatedItems]);
    }
  }, [loadedRelatedItems]);

  //3: on every page change
  useEffect(() => {
    if (page !== 0 && isAllLoaded === false) {
      const startIndex = page * itemsPerPage;
      const endIntex = startIndex + itemsPerPage;
      const searchedIds = idOfRelatedItems.slice(startIndex, endIntex);

      sendRequest(searchedIds);

      if (endIntex > idOfRelatedItems.length - 1) {
        setIsAllLoaded(true);
      }
    }
  }, [page, idOfRelatedItems, sendRequest, isAllLoaded, itemsPerPage]); //only page should change

  return {
    setPage,
    isAllLoaded,
    status,
    entries,
    error,
  };
};

export default useCardsDataChunk2;
