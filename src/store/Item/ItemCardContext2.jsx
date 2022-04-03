import { isUndefined } from "lodash";
import React from "react";

const ItemCardContext2 = React.createContext({
  id: 0,

  general: {
    name: "CryptoPunk #9795",
    src: "https://lh3.googleusercontent.com/jQO3g8MZqUei2Cw8SAP3hD3xf7j0rM5QBNs14rSRsF5R6eUJs4F0TESuFPlBPC_fvFxr_6DdQAx8OvfsKXodIWkHAgv2fgOrpfSR=w286",
  },

  project: {
    name: "Crypto Punks", //******* filter 'Collections' depends ot his prop
    isVerified: true, //******* filter 'Options.Verified only' depends ot his prop
    link: "link to site",
  },

  contract: {
    contractAddress: "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB",
    tokenID: 9650,
    tokenStandard: "ERC0721",
    blockchain: "Polygon", //******* filter 'Blockchain' depends ot his prop
    owner: {
      name: "F3BED4",
      link: "link to owner", //link to account inside site, that shows other items he has listed
      avatar:
        "https://img.rarible.com/prod/image/upload/t_avatar_big/prod-users/0xee63d9ca6ecaa334ba0c3311b3dbd5de0132ba4c/avatar/QmZQcqw38q6z7yKGXZx86o6Mn2mnUPF4CoscnMbCTXqboQ",
    },
    creator: {
      name: "DivineAnarchyS1",
      link: "link to owner",
      avatar:
        "https://img.rarible.com/prod/image/upload/t_avatar_big/prod-users/0xee63d9ca6ecaa334ba0c3311b3dbd5de0132ba4c/avatar/QmZQcqw38q6z7yKGXZx86o6Mn2mnUPF4CoscnMbCTXqboQ",
      royalties: 0,
    },
  },

  socialMedia: {
    stats: {
      favorites: 11111111,
      views: 1112,
    },
    links: {
      website: "https://www.divineanarchy.com/",
      discord: "das",
      medium: "fas",
      telegram: "gas",
      instagram: "fafa",
    },
  },

  summary: {
    isNSFW: false, //******* filter 'Options.NFTW' depends ot his prop
    isLazyMinted: false, //******* filter 'Options.Show Lazy Minted' depends ot his prop
    category: ["Football"], //******* filter Category depends ot his prop
    properties: {
      accessory: ["3D Glasses", "Hot Lipstick", "Wild Blonde"],
      type: ["Female"],
    },
    stats: { votingPower: "1 of 2000" },
    details: {
      dropDate: "09 Oct 2021",
      listPrice: 90,
      editionSupply: 10,
      edition: 3,
      editionType: "Con Exclusive",
      season: "2",
      rarity: "Secret",
      license: "Marvel",
      brand: "Captain America",
      collection: "Zombie",
      series: "Zombie CaptainAmerica",
      annotations: ["rare", "wearable", "armor"],
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit commodi deleniti itaque adipisci sunt ducimus aperiam optio iste odit similique esse minima sed, tempore quo sapiente incidunt magnam alias nisi doloribus quae earum obcaecati ratione? Beatae, tempora voluptas adipisci in, suscipit praesentium explicabo odio quaerat, dolorem eaque tempore. Porro, saepe.",
    },
  },

  auction: "Dec 30, 2022 23:45:00", //******* filter 'Sale Type.Auction'  depends on this prop

  price: {
    amount: 0, //******* filter 'Price.From' & 'Price.To' depends on this prop
    currency: "", //******* filter 'Sale Type.Buy Now' depends on this prop (if 'currency' === (emptyString) -> filter condition not met) //******* filter 'Price.Currency' depends on this prop
    history: [
      {
        amount: 3,
        currency: "MATIC",
        date: "Jan 30, 2022 23:45:00",
        from: "User5",
        to: "User6",
      },
    ],
  },

  bids: {
    isAllowed: true,
    active: [], //******* filter 'Sale Type.Has Offers'  depends on this prop && Has bids is decided on this
    history: [],
  },

  listings: [], //******* filter 'Sale Type.New'  depends on last entry (if it was within N-days)

  itemActivity: [],
  bundleItems: undefined,
});

export default ItemCardContext2;
