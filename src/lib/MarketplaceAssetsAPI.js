const singleItems = [
  //single item #1
  //https://opensea.io/assets/0xc631164b6cb1340b5123c9162f8558c866de1926/3639
  {
    id: 0,
    src: "https://lh3.googleusercontent.com/jQO3g8MZqUei2Cw8SAP3hD3xf7j0rM5QBNs14rSRsF5R6eUJs4F0TESuFPlBPC_fvFxr_6DdQAx8OvfsKXodIWkHAgv2fgOrpfSR=w286",

    general: {
      name: "CryptoPunk #9795",
      isNSFW: false, //******* filter 'Options.NFTW' depends ot his prop
      isLazyMinted: false, //******* filter 'Options.Show Lazy Minted' depends ot his prop
      project: {
        name: "Crypto Punks", //******* filter 'Collections' depends ot his prop
        isVerified: true, //******* filter 'Options.Verified only' depends ot his prop
        link: "link to site",
      },
      owner: {
        name: "F3BED4",
        link: "link to owner", //link to account inside site, that shows other items he has listed
      },
      socials: {
        favorites: 16,
        views: 1112,
      },
    },

    summary: {
      description: {
        creator: "DivineAnarchyS1", //link to account inside site, that shows other items he has listed
      },
      category: ["Football"], //******* filter Category depends ot his prop
      properties: {
        accessory: ["3D Glasses", "Hot Lipstick", "Wild Blonde"],
        type: ["Female"],
      },
      stats: { votingPower: "1 of 2000" },
      about: {
        general: {
          info: "The official Divine Anarchy Collection. 10, 100 Children of Anarchy.",
          imgSrc:
            "https://lh3.googleusercontent.com/GcdkvDosi5tTJEK6pfP-1tIMLsburKAXKmzKhlPRxcaG-6BkohlzL2LfmcC8GnbUw6k0VehaYuHu8EohbqX2ziF17ctH3WjKEqm6=w128",
        },
        socialMedia: {
          website: "https://www.divineanarchy.com/",
          discord: "das",
          medium: "fas",
          telegram: "gas",
          instagram: "fafa",
        },
      },
      details: {
        contractAddress: "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB",
        tokenID: 9650,
        tokenStandard: "ERC0721",
        blockchain: "Polygon", //******* filter 'Blockchain' depends ot his prop
      },
    },

    auction: "Dec 30, 2022 23:45:00", //******* filter 'Sale Type.Auction'  depends on this prop

    price: {
      //******* filter 'Sale Type.Buy Now'  depends on this prop (if object is null/undefined -> filter condition not met)
      amount: 105, //******* filter 'Price.From' & 'Price.To'  depends on this prop
      currency: "MATIC", //******* filter 'Price.Currency' depends on this prop
    },

    boughtPrices: [
      {
        amount: 3,
        currency: "MATIC",
        date: "Jan 30, 2022 23:45:00",
        from: "User5",
        to: "User6",
      },
    ],

    bids: {
      //Has bids is decided on this
      isAllowed: true, //******* filter 'Sale Type.Has Offers'  depends on this prop
      active: [
        {
          active: true,
          amount: 9.2,
          currency: "MATIC",
          expiration: "6 minutes",
          from: "KJ_5", //link to account inside site, that shows other items he has listed
        },
      ],
      history: [
        {
          active: true,
          amount: 9.2,
          currency: "MATIC",
          expiration: "6 minutes",
          from: "KJ_5", //link to account inside site, that shows other items he has listed
        },
        {
          active: true,
          amount: 5.8,
          currency: "MATIC",
          expiration: "29 minutes",
          from: "672A5F", //link to account inside site, that shows other items he has listed
        },
      ],
    },

    listings: [
      //******* filter 'Sale Type.New'  depends on last entry (if it was within N-days)
      {
        amount: 5.2,
        currency: "MATIC",
        expiration: "2 months",
        addDate: "Dec 10, 2021 23:45:00",
        from: "30F33F", //link to account inside site, that shows other items he has listed
      },
      {
        amount: 5.5,
        currency: "MATIC",
        expiration: "1 months",
        addDate: "Dec 15, 2020 23:45:00",
        from: "30F33F", //link to account inside site, that shows other items he has listed
      },
    ],

    itemActivity: [
      {
        type: "mint",
        amount: null,
        currency: "MATIC",
        from: null, //link to account inside site, that shows other items he has listed
        to: "EBF90A", //link to account inside site, that shows other items he has listed
        date: "Dec 15, 2015 23:45:00", //link transaction on EtherScan
        transaction: "EtherScanID:12313", //link transaction on EtherScan
      },
      {
        type: "sale",
        amount: 0.53,
        currency: "MATIC",
        from: "EBF90A", //link to account inside site, that shows other items he has listed
        to: "EpicNFTvillage", //link to account inside site, that shows other items he has listed
        date: "Dec 11, 2021 23:45:00", //link transaction on EtherScan
        transaction: "EtherScanID:12313", //link transaction on EtherScan
      },
      {
        type: "transfer",
        amount: null,
        currency: "MATIC",
        from: "EpicNFTvillage", //link to account inside site, that shows other items he has listed
        to: "tshirttimemachine", //link to account inside site, that shows other items he has listed
        date: "Dec 12, 2021 23:45:00",
        transaction: "EtherScanID:12313", //link transaction on EtherScan
      },
      {
        type: "offer",
        amount: 9.2,
        currency: "MATIC",
        from: "672A5F", //link to account inside site, that shows other items he has listed
        to: "", //link to account inside site, that shows other items he has listed
        date: "Dec 13, 2021 23:45:00", //link transaction on EtherScan
        transaction: "",
      },
      {
        type: "offer",
        amount: 9.6,
        currency: "MATIC",
        from: "DZE311", //link to account inside site, that shows other items he has listed
        to: "", //link to account inside site, that shows other items he has listed
        date: "Dec 15, 2021 23:45:00", //link transaction on EtherScan
        transaction: "",
      },
    ],

    //******* filter 'AssetType'
    ////if object doesnt have 'items' prop -> 'AssetType' is 'Single Items'
  },

  //single item #2
  //https://opensea.io/assets/0xc631164b6cb1340b5123c9162f8558c866de1926/3639
  {
    id: 1,
    src: "https://media.sketchfab.com/models/86fd6cec31e347289571a039852c02ed/thumbnails/d5826ebcceac4a36a2e2c1382506ab39/5da9b4d3987f4c7396a4ffe179a149bf.jpeg",

    general: {
      name: "3639",
      isNSFW: false,
      isLazyMinted: false,
      project: {
        name: "Devine Anarch",
        isVerified: false,
        link: "link to site",
      },
      owner: {
        name: "C0B7ED1",
        link: "link to owner", //link to account inside site, that shows other items he has listed
      },
      socials: {
        favorites: 30,
        views: 5096,
      },
    },

    summary: {
      description: {
        creator: "DivineAnarchyS1", //link to account inside site, that shows other items he has listed
      },
      category: ["Sports"],
      properties: {
        accessory: ["Cigarette", "earring", "Hoodie"],
        type: ["Male"],
      },
      stats: { votingPower: "1 of 2000" },
      about: {
        general: {
          info: "The official Divine Anarchy Collection. 10, 100 Children of Anarchy.",
          imgSrc:
            "https://lh3.googleusercontent.com/GcdkvDosi5tTJEK6pfP-1tIMLsburKAXKmzKhlPRxcaG-6BkohlzL2LfmcC8GnbUw6k0VehaYuHu8EohbqX2ziF17ctH3WjKEqm6=w128",
        },
        socialMedia: {
          website: "https://www.divineanarchy.com/",
          discord: "das",
          medium: "fas",
          telegram: "gas",
          instagram: "fafa",
        },
      },
      details: {
        contractAddress: "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB",
        tokenID: 6634,
        tokenStandard: "ERC0721",
        blockchain: "Polygon",
      },
    },

    auction: null,

    price: null,

    boughtPrices: [],

    bids: {
      isAllowed: true,
      active: [
        {
          active: true,
          amount: 110,
          currency: "MATIC",
          expiration: "6 minutes",
          from: "KJ_123", //link to account inside site, that shows other items he has listed
        },
        {
          active: true,
          amount: 150,
          currency: "MATIC",
          expiration: "6 minutes",
          from: "KJ_5", //link to account inside site, that shows other items he has listed
        },
      ],
      history: [
        {
          active: true,
          amount: 110,
          currency: "MATIC",
          expiration: "6 minutes",
          from: "KJ_123", //link to account inside site, that shows other items he has listed
        },
        {
          active: true,
          amount: 150,
          currency: "MATIC",
          expiration: "6 minutes",
          from: "KJ_5", //link to account inside site, that shows other items he has listed
        },
        {
          active: false,
          amount: 500,
          currency: "MATIC",
          expiration: "3 months ago",
          from: "3DG", //link to account inside site, that shows other items he has listed
        },
      ],
    },

    listings: [
      {
        amount: 11.2,
        currency: "MATIC",
        addDate: "Dec 10, 2021 23:45:00",
        expiration: "6 months",
        from: "30F33F",
      },
    ],

    itemActivity: [
      {
        type: "mint",
        amount: null,
        currency: "MATIC",
        from: null, //link to account inside site, that shows other items he has listed
        to: "comfygang", //link to account inside site, that shows other items he has listed
        date: "Dec 10, 2025 23:45:00", //link transaction on EtherScan
        transaction: "EtherScanID:12313", //link transaction on EtherScan
      },
      {
        type: "sale",
        amount: 2,
        currency: "MATIC",
        from: "comfygang", //link to account inside site, that shows other items he has listed
        to: "880407", //link to account inside site, that shows other items he has listed
        date: "6 months ago", //link transaction on EtherScan
        transaction: "EtherScanID:12313", //link transaction on EtherScan
      },
      {
        type: "sale",
        amount: 9999,
        currency: "MATIC",
        from: "880407", //link to account inside site, that shows other items he has listed
        to: "Some0n3", //link to account inside site, that shows other items he has listed
        date: "1 months ago",
        transaction: "EtherScanID:1234443", //link transaction on EtherScan
      },
    ],
  },

  {
    id: 2,
    src: "https://lh3.googleusercontent.com/OoEDcjla6PEW2PqOXVUn-ALEfn_Kw3eR8WwqZGrl1HDd8OGZTCD-qh1ExUPpfsDDIJDJUXDpXdiv-9_8r09LFHZC2JyQrPtsFDhmHQ=w600",

    general: {
      name: "Item 3",
      isNSFW: false,
      isLazyMinted: false,
      project: {
        name: "Project 3",
        isVerified: false,
        link: "link to site",
      },
      owner: {
        name: "F3BED4",
        link: "link to owner", //link to account inside site, that shows other items he has listed
      },
      socials: {
        favorites: 123,
        views: 321,
      },
    },

    summary: {
      description: {
        creator: "User3", //link to account inside site, that shows other items he has listed
      },
      category: ["Art", "Sports"],
      properties: {
        accessory: ["3D Glasses", "Hot Lipstick", "Wild Blonde"],
        type: ["Female"],
      },
      stats: { votingPower: "1 of 2000" },
      about: {
        general: {
          info: "The official Divine Anarchy Collection. 10, 100 Children of Anarchy.",
          imgSrc:
            "https://lh3.googleusercontent.com/GcdkvDosi5tTJEK6pfP-1tIMLsburKAXKmzKhlPRxcaG-6BkohlzL2LfmcC8GnbUw6k0VehaYuHu8EohbqX2ziF17ctH3WjKEqm6=w128",
        },
        socialMedia: {
          website: "https://www.divineanarchy.com/",
          discord: "das",
          medium: "fas",
          telegram: "gas",
          instagram: "fafa",
        },
      },
      details: {
        contractAddress: "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB",
        tokenID: 9650,
        tokenStandard: "ERC0721",
        blockchain: "Ethereum",
      },
    },

    auction: "Jun 11, 2022 23:45:00",

    price: {
      //"Buy Now" is decided on this
      amount: 333,
      currency: "ETH",
    },

    boughtPrices: [
      {
        amount: 333333,
        currency: "ETH",
        date: "Jan 15, 2022 23:45:00",
        from: "User5",
        to: "User6",
      },
    ],

    bids: {
      //Has bids is decided on this
      isAllowed: true,
      active: [
        {
          active: true,
          amount: 9.2,
          currency: "MATIC",
          expiration: "6 minutes",
          from: "KJ_5", //link to account inside site, that shows other items he has listed
        },
      ],
      history: [
        {
          active: true,
          amount: 9.2,
          currency: "WETH",
          expiration: "6 minutes",
          from: "KJ_5", //link to account inside site, that shows other items he has listed
        },
        {
          active: true,
          amount: 5.8,
          currency: "WETH",
          expiration: "29 minutes",
          from: "672A5F", //link to account inside site, that shows other items he has listed
        },
      ],
    },

    listings: [
      {
        amount: 5.2,
        currency: "ETH",
        expiration: "2 months",
        addDate: "Dec 10, 2021 23:45:00",
        from: "30F33F", //link to account inside site, that shows other items he has listed
      },
      {
        amount: 5.5,
        currency: "ETH",
        expiration: "1 months",
        addDate: "Dec 15, 2021 23:45:00",
        from: "30F33F", //link to account inside site, that shows other items he has listed
      },
    ],

    itemActivity: [
      {
        type: "mint",
        amount: null,
        currency: "ETH",
        from: null, //link to account inside site, that shows other items he has listed
        to: "EBF90A", //link to account inside site, that shows other items he has listed
        date: "Dec 15, 2021 23:45:00", //link transaction on EtherScan
        transaction: "EtherScanID:12313", //link transaction on EtherScan
      },
      {
        type: "sale",
        amount: 0.53,
        currency: "ETH",
        from: "EBF90A", //link to account inside site, that shows other items he has listed
        to: "EpicNFTvillage", //link to account inside site, that shows other items he has listed
        date: "Dec 11, 2021 23:45:00", //link transaction on EtherScan
        transaction: "EtherScanID:12313", //link transaction on EtherScan
      },
      {
        type: "transfer",
        amount: null,
        currency: "ETH",
        from: "EpicNFTvillage", //link to account inside site, that shows other items he has listed
        to: "tshirttimemachine", //link to account inside site, that shows other items he has listed
        date: "Dec 12, 2021 23:45:00",
        transaction: "EtherScanID:12313", //link transaction on EtherScan
      },
      {
        type: "offer",
        amount: 9.2,
        currency: "WETH",
        from: "672A5F", //link to account inside site, that shows other items he has listed
        to: "", //link to account inside site, that shows other items he has listed
        date: "Dec 13, 2021 23:45:00", //link transaction on EtherScan
        transaction: "",
      },
      {
        type: "offer",
        amount: 9.6,
        currency: "WETH",
        from: "DZE311", //link to account inside site, that shows other items he has listed
        to: "", //link to account inside site, that shows other items he has listed
        date: "Dec 15, 2021 23:45:00", //link transaction on EtherScan
        transaction: "",
      },
    ],
  },

  {
    id: 3,
    src: "https://lh3.googleusercontent.com/oAWRhYA67_O0Udeo1KfzFGDFACQPrzZr8j1FEVo5BGJ2WH3RFGfkC1IKpWPUIyLMYim-R3uTW-UuFMym_lAD1vVHT5AVcnY3guA47Q=w286",

    general: {
      name: "Item 44444",
      isNSFW: false,
      isLazyMinted: false,
      project: {
        name: "Project 4444",

        isVerified: false,
        link: "link to site",
      },
      owner: {
        name: "F3BED4",
        link: "link to owner", //link to account inside site, that shows other items he has listed
      },
      socials: {
        favorites: 1234,
        views: 4321,
      },
    },

    summary: {
      description: {
        creator: "User3", //link to account inside site, that shows other items he has listed
      },
      category: [],
      properties: {
        accessory: ["3D Glasses", "Hot Lipstick", "Wild Blonde"],
        type: ["Female"],
      },
      stats: { votingPower: "1 of 2000" },
      about: {
        general: {
          info: "The official Divine Anarchy Collection. 10, 100 Children of Anarchy.",
          imgSrc:
            "https://lh3.googleusercontent.com/GcdkvDosi5tTJEK6pfP-1tIMLsburKAXKmzKhlPRxcaG-6BkohlzL2LfmcC8GnbUw6k0VehaYuHu8EohbqX2ziF17ctH3WjKEqm6=w128",
        },
        socialMedia: {
          website: "https://www.divineanarchy.com/",
          discord: "das",
          medium: "fas",
          telegram: "gas",
          instagram: "fafa",
        },
      },
      details: {
        contractAddress: "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB",
        tokenID: 9650,
        tokenStandard: "ERC0721",
        blockchain: "Ethereum",
      },
    },

    auction: "Jun 30, 2022 23:45:00",

    price: {
      //"Buy Now" is decided on this
      amount: 4444,
      currency: "ETH",
    },

    boughtPrices: [
      {
        amount: 4444,
        currency: "ETH",
        date: "Jan 10, 2022 23:45:00",
        from: "User5",
        to: "User6",
      },
    ],

    bids: {
      //Has bids is decided on this
      isAllowed: true,
      active: [
        {
          active: true,
          amount: 9.2,
          currency: "MATIC",
          expiration: "6 minutes",
          from: "KJ_5", //link to account inside site, that shows other items he has listed
        },
      ],
      history: [
        {
          active: true,
          amount: 9.2,
          currency: "WETH",
          expiration: "6 minutes",
          from: "KJ_5", //link to account inside site, that shows other items he has listed
        },
        {
          active: true,
          amount: 5.8,
          currency: "WETH",
          expiration: "29 minutes",
          from: "672A5F", //link to account inside site, that shows other items he has listed
        },
      ],
    },

    listings: [
      {
        amount: 5.2,
        currency: "ETH",
        expiration: "2 months",
        addDate: "Dec 10, 2021 23:45:00",
        from: "30F33F", //link to account inside site, that shows other items he has listed
      },
      {
        amount: 5.5,
        currency: "ETH",
        expiration: "1 months",
        addDate: "Dec 15, 2021 23:45:00",
        from: "30F33F", //link to account inside site, that shows other items he has listed
      },
    ],

    itemActivity: [
      {
        type: "mint",
        amount: null,
        currency: "ETH",
        from: null, //link to account inside site, that shows other items he has listed
        to: "EBF90A", //link to account inside site, that shows other items he has listed
        date: "Dec 15, 2020 23:45:00", //link transaction on EtherScan
        transaction: "EtherScanID:12313", //link transaction on EtherScan
      },
      {
        type: "sale",
        amount: 0.53,
        currency: "ETH",
        from: "EBF90A", //link to account inside site, that shows other items he has listed
        to: "EpicNFTvillage", //link to account inside site, that shows other items he has listed
        date: "Dec 11, 2021 23:45:00", //link transaction on EtherScan
        transaction: "EtherScanID:12313", //link transaction on EtherScan
      },
      {
        type: "transfer",
        amount: null,
        currency: "ETH",
        from: "EpicNFTvillage", //link to account inside site, that shows other items he has listed
        to: "tshirttimemachine", //link to account inside site, that shows other items he has listed
        date: "Dec 12, 2021 23:45:00",
        transaction: "EtherScanID:12313", //link transaction on EtherScan
      },
      {
        type: "offer",
        amount: 9.2,
        currency: "WETH",
        from: "672A5F", //link to account inside site, that shows other items he has listed
        to: "", //link to account inside site, that shows other items he has listed
        date: "Dec 13, 2021 23:45:00", //link transaction on EtherScan
        transaction: "",
      },
      {
        type: "offer",
        amount: 9.6,
        currency: "WETH",
        from: "DZE311", //link to account inside site, that shows other items he has listed
        to: "", //link to account inside site, that shows other items he has listed
        date: "Dec 15, 2021 23:45:00", //link transaction on EtherScan
        transaction: "",
      },
    ],
  },

  {
    id: 4,
    src: "https://lh3.googleusercontent.com/oAWRhYA67_O0Udeo1KfzFGDFACQPrzZr8j1FEVo5BGJ2WH3RFGfkC1IKpWPUIyLMYim-R3uTW-UuFMym_lAD1vVHT5AVcnY3guA47Q=w286",

    general: {
      name: "Item 555555555",
      isNSFW: false,
      isLazyMinted: false,
      project: {
        name: "Project 5555555",

        isVerified: false,
        link: "link to site",
      },
      owner: {
        name: "F3BED4",
        link: "link to owner", //link to account inside site, that shows other items he has listed
      },
      socials: {
        favorites: 5555,
        views: 5555,
      },
    },

    summary: {
      description: {
        creator: "User5", //link to account inside site, that shows other items he has listed
      },
      category: [],
      properties: {
        accessory: ["3D Glasses", "Hot Lipstick", "Wild Blonde"],
        type: ["Female"],
      },
      stats: { votingPower: "3 of 2000" },
      about: {
        general: {
          info: "The official Divine Anarchy Collection. 10, 100 Children of Anarchy.",
          imgSrc:
            "https://lh3.googleusercontent.com/GcdkvDosi5tTJEK6pfP-1tIMLsburKAXKmzKhlPRxcaG-6BkohlzL2LfmcC8GnbUw6k0VehaYuHu8EohbqX2ziF17ctH3WjKEqm6=w128",
        },
        socialMedia: {
          website: "https://www.divineanarchy.com/",
          discord: "das",
          medium: "fas",
          telegram: "gas",
          instagram: "fafa",
        },
      },
      details: {
        contractAddress: "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB",
        tokenID: 9650,
        tokenStandard: "ERC0721",
        blockchain: "Ethereum",
      },
    },

    auction: "Jun 30, 2022 23:45:00",

    price: {
      //"Buy Now" is decided on this
      amount: 5555,
      currency: "ETH",
    },

    boughtPrices: [
      {
        amount: 5555,
        currency: "ETH",
        date: "Jan 10, 2022 23:45:00",
        from: "User5",
        to: "User6",
      },
      {
        amount: 555563,
        currency: "ETH",
        date: "Jan 10, 2022 23:45:00",
        from: "User5",
        to: "User6",
      },
    ],

    bids: {
      //Has bids is decided on this
      isAllowed: true,
      active: [
        {
          active: true,
          amount: 9.2,
          currency: "MATIC",
          expiration: "6 minutes",
          from: "KJ_5", //link to account inside site, that shows other items he has listed
        },
      ],
      history: [
        {
          active: true,
          amount: 9.2,
          currency: "WETH",
          expiration: "6 minutes",
          from: "KJ_5", //link to account inside site, that shows other items he has listed
        },
        {
          active: true,
          amount: 5.8,
          currency: "WETH",
          expiration: "29 minutes",
          from: "672A5F", //link to account inside site, that shows other items he has listed
        },
      ],
    },

    listings: [
      {
        amount: 5.2,
        currency: "ETH",
        expiration: "2 months",
        addDate: "Dec 10, 2021 23:45:00",
        from: "30F33F", //link to account inside site, that shows other items he has listed
      },
      {
        amount: 5.5,
        currency: "ETH",
        expiration: "1 months",
        addDate: "Dec 15, 2021 23:45:00",
        from: "30F33F", //link to account inside site, that shows other items he has listed
      },
    ],

    itemActivity: [
      {
        type: "mint",
        amount: null,
        currency: "ETH",
        from: null, //link to account inside site, that shows other items he has listed
        to: "EBF90A", //link to account inside site, that shows other items he has listed
        date: "Dec 15, 2020 23:45:00", //link transaction on EtherScan
        transaction: "EtherScanID:12313", //link transaction on EtherScan
      },
      {
        type: "sale",
        amount: 0.53,
        currency: "ETH",
        from: "EBF90A", //link to account inside site, that shows other items he has listed
        to: "EpicNFTvillage", //link to account inside site, that shows other items he has listed
        date: "Dec 11, 2021 23:45:00", //link transaction on EtherScan
        transaction: "EtherScanID:12313", //link transaction on EtherScan
      },
      {
        type: "transfer",
        amount: null,
        currency: "ETH",
        from: "EpicNFTvillage", //link to account inside site, that shows other items he has listed
        to: "tshirttimemachine", //link to account inside site, that shows other items he has listed
        date: "Dec 12, 2021 23:45:00",
        transaction: "EtherScanID:12313", //link transaction on EtherScan
      },
      {
        type: "offer",
        amount: 9.2,
        currency: "WETH",
        from: "672A5F", //link to account inside site, that shows other items he has listed
        to: "", //link to account inside site, that shows other items he has listed
        date: "Dec 13, 2021 23:45:00", //link transaction on EtherScan
        transaction: "",
      },
      {
        type: "offer",
        amount: 9.6,
        currency: "WETH",
        from: "DZE311", //link to account inside site, that shows other items he has listed
        to: "", //link to account inside site, that shows other items he has listed
        date: "Dec 15, 2021 23:45:00", //link transaction on EtherScan
        transaction: "",
      },
    ],
  },
];

export const Bundles = [
  //BUNDLE item #1 option #1
  {
    id: 104,
    src: "https://lh3.googleusercontent.com/GcdkvDosi5tTJEK6pfP-1tIMLsburKAXKmzKhlPRxcaG-6BkohlzL2LfmcC8GnbUw6k0VehaYuHu8EohbqX2ziF17ctH3WjKEqm6=w128",

    general: {
      // name: "2x top 1000 rarity s",
      name: "2x top 1000 rarity SAVE POLARBEAR SAVE GASssssssss",
      isNSFW: false,
      isLazyMinted: false,
      project: {
        name: "Crypto Punks",
        isVerified: true,
        link: "link to site",
      },
      owner: {
        name: "C0B7ED1",
        link: "link to owner", //link to account inside site, that shows other items he has listed
      },
      socials: {
        favorites: 30,
        views: 5096,
      },
    },

    summary: {
      description: {
        creator: "C0B7ED1", //link to account inside site, that shows other items he has listed
        info: "rarity 800 something and 900 something",
      },
      category: ["Art", "Sports"],
      details: {
        contractAddress: "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB",
        blockchain: "Polygon",
      },
    },

    auction: "Sep 30, 2022 23:45:00",

    price: null, //"Buy Now" is decided on this

    boughtPrices: [],

    bids: {
      isAllowed: false,
      active: [],
      history: [],
    },

    listings: [
      {
        amount: 11.2,
        currency: "ETH",
        expiration: "6 months",
        addDate: "Dec 10, 2019 23:45:00",
        from: "Noon3", //link to account inside site, that shows other items he has listed
      },
    ],

    bundleItems: [
      {
        count: 1,
        ...singleItems[0],
        // itemSourceId: 0, //before it was just 'id'
        // imgSrc:
        //   "https://lh3.googleusercontent.com/GcdkvDosi5tTJEK6pfP-1tIMLsburKAXKmzKhlPRxcaG-6BkohlzL2LfmcC8GnbUw6k0VehaYuHu8EohbqX2ziF17ctH3WjKEqm6=w128",
      },
      {
        count: 1,
        ...singleItems[1],
        // itemSourceId: 1, //before it was just 'id'
        // imgSrc:
        //   "https://media.sketchfab.com/models/86fd6cec31e347289571a039852c02ed/thumbnails/d5826ebcceac4a36a2e2c1382506ab39/5da9b4d3987f4c7396a4ffe179a149bf.jpeg",
      },
      {
        count: 1,
        ...singleItems[2],
        // itemSourceId: 2, //before it was just 'id'
        // count: 1,
        // imgSrc:
        //   "https://lh3.googleusercontent.com/GcdkvDosi5tTJEK6pfP-1tIMLsburKAXKmzKhlPRxcaG-6BkohlzL2LfmcC8GnbUw6k0VehaYuHu8EohbqX2ziF17ctH3WjKEqm6=w128",
      },
    ],
  },
];

let singleBundleData = [];
singleBundleData = [...singleItems, ...Bundles, ...singleItems];
// singleBundleData = [...singleItems, ...Bundles];

console.log("singleBundleData ", singleBundleData);
//  singleBundleData = [MarketplaceAssetsAPI[MarketplaceAssetsAPI.length - 1]];

export default singleBundleData;
