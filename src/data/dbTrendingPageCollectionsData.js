const collections = [
  {
    id: 1,
    name: "Bored Ape Yacht Club",
    avatar:
      "https://lh3.googleusercontent.com/lHexKRMpw-aoSyB1WdFBff5yfANLReFxHzt1DOj_sg7mS14yARpuvYcUtsyyx-Nkpk6WTcUPFoG53VnLJezYi8hAs0OxNZwlw6Y-dmI=s100",

    isVerified: true,
    blockchain: "ethereum",
    category: ["art"],
    creationDate: "12/23/2021",

    statistics: {
      currency: "ETH",
      floorPrice: 1.16,
      volume: 36467.4,

      today: {
        change: 227.26,
      },
      week: {
        change: -193.71,
      },
      month: {
        change: +14.71,
      },
    },

    owners: "6300",
    items: "10000",
  },
  {
    id: 2,
    name: "Doodles",
    avatar:
      "https://lh3.googleusercontent.com/7B0qai02OdHA8P_EOVK672qUliyjQdQDGNrACxs7WnTgZAkJa_wWURnIFKeOh5VTf8cfTqW3wQpozGedaC9mteKphEOtztls02RlWQ=s100",

    isVerified: true,
    blockchain: "ethereum",
    category: ["art"],
    creationDate: "1/23/2022",

    statistics: {
      currency: "ETH",
      floorPrice: 24.8,
      volume: 1680.21,

      today: {
        change: 138.06,
      },
      week: {
        change: -221.71,
      },
      month: {
        change: 51.33,
      },
    },

    owners: "5430",
    items: "10000",
  },
  {
    id: 3,
    name: "Azuki",
    avatar:
      "https://lh3.googleusercontent.com/H8jOCJuQokNqGBpkBN5wk1oZwO7LM8bNnrHCaekV2nKjnCqw6UB5oaH8XyNeBDj6bA_n1mjejzhFQUP3O1NfjFLHr3FOaeHcTOOT=s100",

    isVerified: false,
    category: ["sports"],
    blockchain: "solana",
    creationDate: "1/1/2022",

    statistics: {
      currency: "SOL",
      floorPrice: 27.8,
      volume: 11002.21,

      today: {
        change: -5.59,
      },
      week: {
        change: -128.54,
      },
      month: {
        change: -33.12,
      },
    },

    owners: "4900",
    items: "10000",
  },
];

export default collections;
