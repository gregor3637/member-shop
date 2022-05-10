import React from "react";

import useTrendingPageContext from "../../../../hooks/TrendingPage/useTrendingPageContext";
import TableCollections from "./Collections/TableCollections";
import TableCollectors from "./Collectors/TableCollectors";
import TableCreators from "./Creators/TableCreators";
import Auctions from "./Auctions/Auctions";

const Table = (props) => {
  const {
    state: {
      type: { selected: selectedType },
    },
  } = useTrendingPageContext();

  return (
    <>
      {selectedType === "collections" && <TableCollections />}
      {selectedType === "creators" && <TableCreators />}
      {selectedType === "collectors" && <TableCollectors />}
      {selectedType === "auctions" && <Auctions />}
    </>
  );
};

export default Table;
