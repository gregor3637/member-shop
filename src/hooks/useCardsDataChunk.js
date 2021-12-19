import { useEffect, useState } from "react";
import useHttp from "./useHttp";
import { getPageItems } from "../lib/api";

const useCardsDataChunk = (initPage, itemsPerPage) => {
  const [page, setPage] = useState(initPage);
  const [isAllLoaded, setIsAllLoaded] = useState(false);
  const [entries, setEntries] = useState([]);

  const {
    sendRequest,
    status,
    data: loadedPageItems,
    error,
  } = useHttp(getPageItems);

  useEffect(() => {
    sendRequest(page, itemsPerPage);
  }, [page, itemsPerPage, sendRequest]);

  useEffect(() => {
    if (loadedPageItems) {
      setEntries((old) => [...old, ...loadedPageItems]);
    }
  }, [loadedPageItems]);

  useEffect(() => {
    if (loadedPageItems) {
      if (!error && loadedPageItems.length < itemsPerPage) {
        setIsAllLoaded(true);
      }
    }
  }, [loadedPageItems, itemsPerPage, error]);

  return {
    setPage,
    isAllLoaded,
    status,
    entries,
    error,
  };
};

export default useCardsDataChunk;
