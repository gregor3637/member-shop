import React from "react";

const ItemCardContext = React.createContext({
  id: 0,
  imgSrc: "",
  type: "",
  favorite: 1,
  collectionName: "",
  collectionBadges: [],
  currency: "",
  listing: {
    completed: false,
    hasStarted: false,
    countdownEnd: "Dec 30, 2021 23:45:00",
  },
  details: {
    name: "",
    dropDate: "",
    listPrice: 0,
    editionSupply: 10,
    edition: 1,
    editionType: "",
    season: "",
    rarity: "",
    license: "",
    brand: "",
    series: "",
    annotations: [],
  },
  bids: [],
  ownersData: [],
  historyData: [],
  more: [],
});

export default ItemCardContext;
