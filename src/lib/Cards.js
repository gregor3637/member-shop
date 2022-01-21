const cards = [
  {
    id: 0,
    name: "CryptoPunk #9795",

    details: {
      "Contract Address": "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB",
      Collection: "Crypto Punks",
      "Token ID": 9650,
      Status: ["Has Offers", "Buy Now"],
      Blockchain: "Ethereum",
      Price: {
        value: 105,
        currencyChain: "ETH",
      },
    },

    properties: {
      accessory: ["3D Glasses", "Hot Lipstick", "Wild Blonde"],
      type: ["Female"],
    },

    socials: {
      favorites: 16,
      views: 1112,
      owner: "C3BED4", //link to account inside site, that shows other items he has listed
    },

    offers: [
      {
        price: 9.2,
        currency: "WETH",
        expiration: "6 minutes",
        from: "KJ_5", //link to account inside site, that shows other items he has listed
      },
      {
        price: 5.8,
        currency: "WETH",
        expiration: "29 minutes",
        from: "672A5F", //link to account inside site, that shows other items he has listed
      },
    ],

    listings: [
      {
        price: 11.2,
        currency: "ETH",
        expiration: "6 months",
        from: "30F33F", //link to account inside site, that shows other items he has listed
      },
    ],

    "Item Activity": [
      {
        type: "mint",
        price: null,
        currency: "ETH",
        from: null, //link to account inside site, that shows other items he has listed
        to: "EBF90A", //link to account inside site, that shows other items he has listed
        date: "6 months ago", //link transaction on EtherScan
        transaction: "EtherScanID:12313", //link transaction on EtherScan
      },
      {
        type: "sale",
        price: 0.53,
        currency: "ETH",
        from: "EBF90A", //link to account inside site, that shows other items he has listed
        to: "EpicNFTvillage", //link to account inside site, that shows other items he has listed
        date: "6 months ago", //link transaction on EtherScan
        transaction: "EtherScanID:12313", //link transaction on EtherScan
      },
      {
        type: "transfer",
        price: null,
        currency: "ETH",
        from: "EpicNFTvillage", //link to account inside site, that shows other items he has listed
        to: "tshirttimemachine", //link to account inside site, that shows other items he has listed
        date: "6 months ago",
        transaction: "EtherScanID:12313", //link transaction on EtherScan
      },
      {
        type: "offer",
        price: 9.2,
        currency: "WETH",
        from: "672A5F", //link to account inside site, that shows other items he has listed
        to: "", //link to account inside site, that shows other items he has listed
        date: "25 minutes ago", //link transaction on EtherScan
        transaction: "",
      },
      {
        type: "offer",
        price: 9.6,
        currency: "WETH",
        from: "DZE311", //link to account inside site, that shows other items he has listed
        to: "", //link to account inside site, that shows other items he has listed
        date: "13 minutes ago", //link transaction on EtherScan
        transaction: "",
      },
    ],
  },
];

export default cards;
