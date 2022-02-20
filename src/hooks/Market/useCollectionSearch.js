import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

import { getMarketplaceCollectionsBySubstrAtPage } from "../../lib/api";
import useBouncer from "../useBouncer";

export default function useCollectionSearch(query, pageNumber) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [collections, setCollections] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setCollections([]);
  }, [query]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    let cancel;

    axios({
      method: "GET",
      url: "http://openlibrary.org/search.json",
      // params: { q: query, page: pageNumber },
      params: { q: "LOTR", page: 1 },
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then(({ data, hasMore }) => {
        setHasMore(hasMore);
        setCollections((old) => [...old, ...data]);
        setLoading(false);
      })
      .catch((err) => {
        if (axios.isCancel(err)) return;

        console.log("useCollectionSearch | Error", err);
        setError(true);
      });

    return () => cancel();
  }, [query, pageNumber]);

  return { loading, error, collections, hasMore };
}

let firstTime = true;
export function useCollectionSearch_3333(query, pageNumber) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  // const debouncedReq = useBouncer((q, abort) => {
  //   console.log("--------- Req throught useBouncer");
  //   console.log(`query>${q}<`);
  //   console.log(`query>`, q);
  //   return getMarketplaceCollectionsBySubstrAtPage(q, 0, abort);
  // }, 3000);
  const debouncedReq = useBouncer(
    getMarketplaceCollectionsBySubstrAtPage,
    3000
  );

  const directReq = (q, abort, page) => {
    return getMarketplaceCollectionsBySubstrAtPage(q, abort, page);
  };

  useEffect(() => {
    setLoading(true);
    setError(false);
    const controller = new AbortController();

    let serverReq = pageNumber === 0 && !firstTime ? debouncedReq : directReq;

    serverReq(query, controller, pageNumber)
      .then(({ data, hasMore }) => {
        if (pageNumber === 0) setItems(data);
        else setItems((old) => [...old, ...data]);

        setHasMore(hasMore);
        setLoading(false);
      })
      .catch((err) => {
        if (axios.isCancel(err)) {
          console.log("canceled the request");
          return;
        }

        setError(true);
      });

    firstTime = false;

    return () => {
      console.log("controller.abort()");
      controller.abort();
    };
  }, [debouncedReq, query, pageNumber]);

  return { loading, dbItems: items, hasMore, error };
}
