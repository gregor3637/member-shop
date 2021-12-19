import React, { useCallback, useEffect,  useState } from "react";
import AuctionHeading from "./AuctionHeading";
import AuctionContainer from "./AuctionContainer";

import auctionsData from "../../../../../data/auctionsData";

const Auction = (props) => {
  const [downloadedItems, setDownloadedItems] = useState([]);
  const [shownItems, setShownItems] = useState([]);
  const [filterOptions, setFilterOptions] = useState({ chains: [], types: [] });


  useEffect(() => {
    const timer = setTimeout(() => {
      const allChains = [
        ...auctionsData.reduce((all, cur) => all.add(...cur.chain), new Set()),
      ];

      const allTypes = [
        ...auctionsData.reduce((all, cur) => all.add(...cur.type), new Set()),
      ];

      setFilterOptions({
        chains: allChains,
        types: allTypes,
      });

      setDownloadedItems(auctionsData);

      setShownItems(auctionsData);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const filterHandler = useCallback(
    (currencies, types) => {
      let items = [...downloadedItems];

      if (currencies.length > 0) {
        items = items.filter((el) =>
          currencies.some((c) => el.chain.indexOf(c) >= 0)
        );
      }

      if (types.length > 0) {
        items = items.filter((el) =>
          types.some((t) => el.type.indexOf(t) >= 0)
        );
      }

      setShownItems(items);
    },
    [downloadedItems]
  );

  return (
    <>
      <AuctionHeading
        itemCurrencies={filterOptions.chains}
        itemTypes={filterOptions.types}
        onSelectedChain={filterHandler}
      />
      {shownItems.length !== 0 ? (
        <AuctionContainer items={shownItems} />
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default Auction;
