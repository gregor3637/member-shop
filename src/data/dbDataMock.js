const singleItems = [
  //single item #1
  //https://opensea.io/assets/0xc631164b6cb1340b5123c9162f8558c866de1926/3639
  {
    id: 0,

    general: {
      name: "CryptoPunk #97953123123123555559999921321asd",
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
      blockchain: "Ethereum", //******* filter 'Blockchain' depends ot his prop
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
        favorites: 11111115,
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
      category: ["Sports", "Football"], //******* filter Category depends ot his prop
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
      //******* filter 'Sale Type.Buy Now'  depends on this prop (if object is null/undefined -> filter condition not met)
      amount: 105, //******* filter 'Price.From' & 'Price.To'  depends on this prop
      currency: "ETH", //******* filter 'Price.Currency' depends on this prop
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
      //Has bids is decided on this
      isAllowed: true, //******* filter 'Sale Type.Has Offers'  depends on this prop
      active: [
        {
          id: 1,
          user: {
            name: "HyperStudio",
            avatar:
              "https://img.rarible.com/prod/image/upload/t_avatar_big/prod-users/0xee63d9ca6ecaa334ba0c3311b3dbd5de0132ba4c/avatar/QmZQcqw38q6z7yKGXZx86o6Mn2mnUPF4CoscnMbCTXqboQ",
          },
          type: "bid",
          time: "1/12/2019 13:38:55",
          amount: "10.6",
          currency: "BUSD",
        },
        {
          id: 2,
          user: {
            name: "HyperStudio",
            avatar:
              "https://img.rarible.com/prod/image/upload/t_avatar_big/prod-users/0xee63d9ca6ecaa334ba0c3311b3dbd5de0132ba4c/avatar/QmZQcqw38q6z7yKGXZx86o6Mn2mnUPF4CoscnMbCTXqboQ",
          },
          type: "bid",
          time: "2/02/2022 13:37:00",
          amount: "20",
          currency: "BUSD",
        },
        {
          id: 3,
          user: {
            name: "HyperStudio",
            avatar:
              "https://img.rarible.com/prod/image/upload/t_avatar_big/prod-users/0xee63d9ca6ecaa334ba0c3311b3dbd5de0132ba4c/avatar/QmZQcqw38q6z7yKGXZx86o6Mn2mnUPF4CoscnMbCTXqboQ",
          },
          type: "bid",
          time: "3/12/2021 13:35:00",
          amount: "30.9",
          currency: "BUSD",
        },
        {
          id: 4,
          user: {
            name: "HyperStudio",
            avatar:
              "https://img.rarible.com/prod/image/upload/t_avatar_big/prod-users/0xee63d9ca6ecaa334ba0c3311b3dbd5de0132ba4c/avatar/QmZQcqw38q6z7yKGXZx86o6Mn2mnUPF4CoscnMbCTXqboQ",
          },
          type: "bid",
          time: "4/12/2021 13:33:23",
          amount: "40.9",
          currency: "BUSD",
        },
        {
          id: 5,
          user: {
            name: "HyperStudio1",
            avatar:
              "https://img.rarible.com/prod/image/upload/t_avatar_big/prod-users/0xee63d9ca6ecaa334ba0c3311b3dbd5de0132ba4c/avatar/QmZQcqw38q6z7yKGXZx86o6Mn2mnUPF4CoscnMbCTXqboQ",
          },
          type: "bid",
          time: "5/12/2021 13:30:23",
          amount: "50.99",
          currency: "BUSD",
        },
        {
          id: 6,
          user: {
            name: "HyperStudio1111111hhhhhhhhhhhhhhhh11111azzzzzzsd55",
            avatar:
              "https://img.rarible.com/prod/image/upload/t_avatar_big/prod-users/0xee63d9ca6ecaa334ba0c3311b3dbd5de0132ba4c/avatar/QmZQcqw38q6z7yKGXZx86o6Mn2mnUPF4CoscnMbCTXqboQ",
          },
          type: "bid",
          time: "5/12/2021 13:30:23",
          amount: "50.99",
          currency: "BUSD",
        },
        {
          id: 7,
          user: {
            name: "HyperStudio1111111hhhhhhhhhhhhhhhh11111azzzzzzsd55",
            avatar:
              "https://img.rarible.com/prod/image/upload/t_avatar_big/prod-users/0xee63d9ca6ecaa334ba0c3311b3dbd5de0132ba4c/avatar/QmZQcqw38q6z7yKGXZx86o6Mn2mnUPF4CoscnMbCTXqboQ",
          },
          type: "bid",
          time: "5/12/2021 13:30:23",
          amount: "50.99",
          currency: "BUSD",
        },
        {
          id: 8,
          user: {
            name: "HyperStudio1111111hhhhhhhhhhhhhhhh11111azzzzzzsd55",
            avatar:
              "https://img.rarible.com/prod/image/upload/t_avatar_big/prod-users/0xee63d9ca6ecaa334ba0c3311b3dbd5de0132ba4c/avatar/QmZQcqw38q6z7yKGXZx86o6Mn2mnUPF4CoscnMbCTXqboQ",
          },
          type: "bid",
          time: "5/12/2021 13:30:23",
          amount: "50.99",
          currency: "BUSD",
        },
        {
          id: 9,
          user: {
            name: "HyperStudio1111111hhhhhhhhhhhhhhhh11111azzzzzzsd55",
            avatar:
              "https://img.rarible.com/prod/image/upload/t_avatar_big/prod-users/0xee63d9ca6ecaa334ba0c3311b3dbd5de0132ba4c/avatar/QmZQcqw38q6z7yKGXZx86o6Mn2mnUPF4CoscnMbCTXqboQ",
          },
          type: "bid",
          time: "5/12/2021 13:30:23",
          amount: "50.99",
          currency: "BUSD",
        },
        {
          id: 10,
          user: {
            name: "HyperStudio1111111hhhhhhhhhhhhhhhh11111azzzzzzsd55",
            avatar:
              "https://img.rarible.com/prod/image/upload/t_avatar_big/prod-users/0xee63d9ca6ecaa334ba0c3311b3dbd5de0132ba4c/avatar/QmZQcqw38q6z7yKGXZx86o6Mn2mnUPF4CoscnMbCTXqboQ",
          },
          type: "bid",
          time: "5/12/2021 13:30:23",
          amount: "50.99",
          currency: "BUSD",
        },
        {
          id: 11,
          user: {
            name: "HyperStudio1111111hhhhhhhhhhhhhhhh11111azzzzzzsd55",
            avatar:
              "https://img.rarible.com/prod/image/upload/t_avatar_big/prod-users/0xee63d9ca6ecaa334ba0c3311b3dbd5de0132ba4c/avatar/QmZQcqw38q6z7yKGXZx86o6Mn2mnUPF4CoscnMbCTXqboQ",
          },
          type: "bid",
          time: "5/12/2021 13:30:23",
          amount: "50.99",
          currency: "BUSD",
        },
        {
          id: 12,
          user: {
            name: "HyperStudio1111111hhhhhhhhhhhhhhhh11111azzzzzzsd55",
            avatar:
              "https://img.rarible.com/prod/image/upload/t_avatar_big/prod-users/0xee63d9ca6ecaa334ba0c3311b3dbd5de0132ba4c/avatar/QmZQcqw38q6z7yKGXZx86o6Mn2mnUPF4CoscnMbCTXqboQ",
          },
          type: "bid",
          time: "5/12/2021 13:30:23",
          amount: "50.99",
          currency: "BUSD",
        },
        {
          id: 13,
          user: {
            name: "HyperStudio1111111hhhhhhhhhhhhhhhh11111azzzzzzsd55",
            avatar:
              "https://img.rarible.com/prod/image/upload/t_avatar_big/prod-users/0xee63d9ca6ecaa334ba0c3311b3dbd5de0132ba4c/avatar/QmZQcqw38q6z7yKGXZx86o6Mn2mnUPF4CoscnMbCTXqboQ",
          },
          type: "bid",
          time: "5/12/2021 13:30:23",
          amount: "50.99",
          currency: "BUSD",
        },
        {
          id: 14,
          user: {
            name: "HyperStudio1111111hhhhhhhhhhhhhhhh11111azzzzzzsd55",
            avatar:
              "https://img.rarible.com/prod/image/upload/t_avatar_big/prod-users/0xee63d9ca6ecaa334ba0c3311b3dbd5de0132ba4c/avatar/QmZQcqw38q6z7yKGXZx86o6Mn2mnUPF4CoscnMbCTXqboQ",
          },
          type: "bid",
          time: "5/12/2021 13:30:23",
          amount: "50.99",
          currency: "BUSD",
        },
        {
          id: 15,
          user: {
            name: "HyperStudio1111111hhhhhhhhhhhhhhhh11111azzzzzzsd55",
            avatar:
              "https://img.rarible.com/prod/image/upload/t_avatar_big/prod-users/0xee63d9ca6ecaa334ba0c3311b3dbd5de0132ba4c/avatar/QmZQcqw38q6z7yKGXZx86o6Mn2mnUPF4CoscnMbCTXqboQ",
          },
          type: "bid",
          time: "5/12/2021 13:30:23",
          amount: "50.99",
          currency: "BUSD",
        },
        {
          id: 16,
          user: {
            name: "HyperStudio1111111hhhhhhhhhhhhhhhh11111azzzzzzsd55",
            avatar:
              "https://img.rarible.com/prod/image/upload/t_avatar_big/prod-users/0xee63d9ca6ecaa334ba0c3311b3dbd5de0132ba4c/avatar/QmZQcqw38q6z7yKGXZx86o6Mn2mnUPF4CoscnMbCTXqboQ",
          },
          type: "bid",
          time: "5/12/2021 13:30:23",
          amount: "50.99",
          currency: "BUSDD",
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

    itemHistory: [
      {
        type: "Mint",
        cost: null,
        from: null, //link to account inside site, that shows other items he has listed
        to: {
          name: "user123",
          src: "https://lh3.googleusercontent.com/jQO3g8MZqUei2Cw8SAP3hD3xf7j0rM5QBNs14rSRsF5R6eUJs4F0TESuFPlBPC_fvFxr_6DdQAx8OvfsKXodIWkHAgv2fgOrpfSR=w286",
          address: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F", //link to account inside site, that shows other items he has listed}
        },
        date: "Dec 15, 2015 23:45:00", //link transaction on EtherScan
        transaction: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F", //link transaction on EtherScan
      },
      {
        type: "Sale",
        cost: {
          amount: 0.53,
          currency: "MATIC",
          usdEquivalent: 13,
        },
        from: {
          name: "user123",
          src: "https://lh3.googleusercontent.com/jQO3g8MZqUei2Cw8SAP3hD3xf7j0rM5QBNs14rSRsF5R6eUJs4F0TESuFPlBPC_fvFxr_6DdQAx8OvfsKXodIWkHAgv2fgOrpfSR=w286",
          address: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F", //link to account inside site, that shows other items he has listed}
        },
        to: {
          name: "user123",
          src: "https://lh3.googleusercontent.com/jQO3g8MZqUei2Cw8SAP3hD3xf7j0rM5QBNs14rSRsF5R6eUJs4F0TESuFPlBPC_fvFxr_6DdQAx8OvfsKXodIWkHAgv2fgOrpfSR=w286",
          address: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F", //link to account inside site, that shows other items he has listed}
        },
        date: "Dec 11, 2021 23:45:00", //link transaction on EtherScan
        transaction: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F", //link transaction on EtherScan
      },
      {
        type: "Transfer",
        cost: {
          amount: 0.53,
          currency: "MATIC",
          usdEquivalent: 13,
        },
        from: {
          name: "user123",
          src: "https://lh3.googleusercontent.com/jQO3g8MZqUei2Cw8SAP3hD3xf7j0rM5QBNs14rSRsF5R6eUJs4F0TESuFPlBPC_fvFxr_6DdQAx8OvfsKXodIWkHAgv2fgOrpfSR=w286",
          address: "0x123656EC7ab88b098defB751B7401B5f6d8976F", //link to account inside site, that shows other items he has listed}
        },
        to: {
          name: "user123",
          src: "https://lh3.googleusercontent.com/jQO3g8MZqUei2Cw8SAP3hD3xf7j0rM5QBNs14rSRsF5R6eUJs4F0TESuFPlBPC_fvFxr_6DdQAx8OvfsKXodIWkHAgv2fgOrpfSR=w286",
          address: "0x321656EC7ab88b098defB751B7401B5f6d8976F", //link to account inside site, that shows other items he has listed}
        },
        date: "Dec 12, 2021111 23:45:00",
        transaction: "0x71C7656EC7ab88b098defB751B7401B5f6d8976Fzzzzzzzzzz", //link transaction on EtherScan
      },
      {
        type: "Bid",
        cost: {
          amount: 0.53,
          currency: "MATIC",
          usdEquivalent: 13,
        },
        from: {
          name: "user123",
          src: "https://lh3.googleusercontent.com/jQO3g8MZqUei2Cw8SAP3hD3xf7j0rM5QBNs14rSRsF5R6eUJs4F0TESuFPlBPC_fvFxr_6DdQAx8OvfsKXodIWkHAgv2fgOrpfSR=w286",
          address: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F", //link to account inside site, that shows other items he has listed}
        },
        to: {
          name: "user123",
          src: "https://lh3.googleusercontent.com/jQO3g8MZqUei2Cw8SAP3hD3xf7j0rM5QBNs14rSRsF5R6eUJs4F0TESuFPlBPC_fvFxr_6DdQAx8OvfsKXodIWkHAgv2fgOrpfSR=w286",
          address: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F", //link to account inside site, that shows other items he has listed}
        },
        date: "Dec 13, 2021 23:45:00", //link transaction on EtherScan
        transaction: "",
      },
      {
        type: "Bid",
        cost: {
          amount: 0.53,
          currency: "MATIC",
          usdEquivalent: 13,
        },
        from: {
          name: "user123",
          src: "https://lh3.googleusercontent.com/jQO3g8MZqUei2Cw8SAP3hD3xf7j0rM5QBNs14rSRsF5R6eUJs4F0TESuFPlBPC_fvFxr_6DdQAx8OvfsKXodIWkHAgv2fgOrpfSR=w286",
          address: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F", //link to account inside site, that shows other items he has listed}
        },
        to: {
          name: "user123",
          src: "https://lh3.googleusercontent.com/jQO3g8MZqUei2Cw8SAP3hD3xf7j0rM5QBNs14rSRsF5R6eUJs4F0TESuFPlBPC_fvFxr_6DdQAx8OvfsKXodIWkHAgv2fgOrpfSR=w286",
          address: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F", //link to account inside site, that shows other items he has listed}
        },
        date: "Dec 15, 2021 23:45:00", //link transaction on EtherScan
        transaction: "",
      },
      {
        type: "Bid",
        cost: {
          amount: 0.53,
          currency: "MATIC",
          usdEquivalent: 13,
        },
        from: {
          name: "user123",
          src: "https://lh3.googleusercontent.com/jQO3g8MZqUei2Cw8SAP3hD3xf7j0rM5QBNs14rSRsF5R6eUJs4F0TESuFPlBPC_fvFxr_6DdQAx8OvfsKXodIWkHAgv2fgOrpfSR=w286",
          address: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F", //link to account inside site, that shows other items he has listed}
        },
        to: {
          name: "user123",
          src: "https://lh3.googleusercontent.com/jQO3g8MZqUei2Cw8SAP3hD3xf7j0rM5QBNs14rSRsF5R6eUJs4F0TESuFPlBPC_fvFxr_6DdQAx8OvfsKXodIWkHAgv2fgOrpfSR=w286",
          address: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F", //link to account inside site, that shows other items he has listed}
        },
        date: "Dec 15, 2021 23:45:00", //link transaction on EtherScan
        transaction: "",
      },
      {
        type: "Bid",
        cost: {
          amount: 0.53,
          currency: "MATIC",
          usdEquivalent: 13,
        },
        from: {
          name: "user123",
          src: "https://lh3.googleusercontent.com/jQO3g8MZqUei2Cw8SAP3hD3xf7j0rM5QBNs14rSRsF5R6eUJs4F0TESuFPlBPC_fvFxr_6DdQAx8OvfsKXodIWkHAgv2fgOrpfSR=w286",
          address: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F", //link to account inside site, that shows other items he has listed}
        },
        to: {
          name: "user123",
          src: "https://lh3.googleusercontent.com/jQO3g8MZqUei2Cw8SAP3hD3xf7j0rM5QBNs14rSRsF5R6eUJs4F0TESuFPlBPC_fvFxr_6DdQAx8OvfsKXodIWkHAgv2fgOrpfSR=w286",
          address: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F", //link to account inside site, that shows other items he has listed}
        },
        date: "Dec 15, 2021 23:45:00", //link transaction on EtherScan
        transaction: "",
      },
      {
        type: "Bid",
        cost: {
          amount: 0.53,
          currency: "MATIC",
          usdEquivalent: 13,
        },
        from: {
          name: "user123",
          src: "https://lh3.googleusercontent.com/jQO3g8MZqUei2Cw8SAP3hD3xf7j0rM5QBNs14rSRsF5R6eUJs4F0TESuFPlBPC_fvFxr_6DdQAx8OvfsKXodIWkHAgv2fgOrpfSR=w286",
          address: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F", //link to account inside site, that shows other items he has listed}
        },
        to: {
          name: "user123",
          src: "https://lh3.googleusercontent.com/jQO3g8MZqUei2Cw8SAP3hD3xf7j0rM5QBNs14rSRsF5R6eUJs4F0TESuFPlBPC_fvFxr_6DdQAx8OvfsKXodIWkHAgv2fgOrpfSR=w286",
          address: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F", //link to account inside site, that shows other items he has listed}
        },
        date: "Dec 15, 2021 23:45:00", //link transaction on EtherScan
        transaction: "",
      },
      {
        type: "Bid",
        cost: {
          amount: 0.53,
          currency: "MATIC",
          usdEquivalent: 13,
        },
        from: {
          name: "user123",
          src: "https://lh3.googleusercontent.com/jQO3g8MZqUei2Cw8SAP3hD3xf7j0rM5QBNs14rSRsF5R6eUJs4F0TESuFPlBPC_fvFxr_6DdQAx8OvfsKXodIWkHAgv2fgOrpfSR=w286",
          address: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F", //link to account inside site, that shows other items he has listed}
        },
        to: {
          name: "user123",
          src: "https://lh3.googleusercontent.com/jQO3g8MZqUei2Cw8SAP3hD3xf7j0rM5QBNs14rSRsF5R6eUJs4F0TESuFPlBPC_fvFxr_6DdQAx8OvfsKXodIWkHAgv2fgOrpfSR=w286",
          address: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F", //link to account inside site, that shows other items he has listed}
        },
        date: "Dec 15, 2021 23:45:00", //link transaction on EtherScan
        transaction: "",
      },
      {
        type: "Bid",
        cost: {
          amount: 0.53,
          currency: "MATIC",
          usdEquivalent: 13,
        },
        from: {
          name: "user123",
          src: "https://lh3.googleusercontent.com/jQO3g8MZqUei2Cw8SAP3hD3xf7j0rM5QBNs14rSRsF5R6eUJs4F0TESuFPlBPC_fvFxr_6DdQAx8OvfsKXodIWkHAgv2fgOrpfSR=w286",
          address: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F", //link to account inside site, that shows other items he has listed}
        },
        to: {
          name: "user123",
          src: "https://lh3.googleusercontent.com/jQO3g8MZqUei2Cw8SAP3hD3xf7j0rM5QBNs14rSRsF5R6eUJs4F0TESuFPlBPC_fvFxr_6DdQAx8OvfsKXodIWkHAgv2fgOrpfSR=w286",
          address: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F", //link to account inside site, that shows other items he has listed}
        },
        date: "Dec 15, 2021 23:45:00", //link transaction on EtherScan
        transaction: "",
      },
      {
        type: "Bid",
        cost: {
          amount: 0.53,
          currency: "MATIC",
          usdEquivalent: 13,
        },
        from: {
          name: "user123",
          src: "https://lh3.googleusercontent.com/jQO3g8MZqUei2Cw8SAP3hD3xf7j0rM5QBNs14rSRsF5R6eUJs4F0TESuFPlBPC_fvFxr_6DdQAx8OvfsKXodIWkHAgv2fgOrpfSR=w286",
          address: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F", //link to account inside site, that shows other items he has listed}
        },
        to: {
          name: "user123",
          src: "https://lh3.googleusercontent.com/jQO3g8MZqUei2Cw8SAP3hD3xf7j0rM5QBNs14rSRsF5R6eUJs4F0TESuFPlBPC_fvFxr_6DdQAx8OvfsKXodIWkHAgv2fgOrpfSR=w286",
          address: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F", //link to account inside site, that shows other items he has listed}
        },
        date: "Dec 15, 2021 23:45:00", //link transaction on EtherScan
        transaction: "",
      },
      {
        type: "Bid",
        cost: {
          amount: 0.53,
          currency: "MATIC",
          usdEquivalent: 13,
        },
        from: {
          name: "user123",
          src: "https://lh3.googleusercontent.com/jQO3g8MZqUei2Cw8SAP3hD3xf7j0rM5QBNs14rSRsF5R6eUJs4F0TESuFPlBPC_fvFxr_6DdQAx8OvfsKXodIWkHAgv2fgOrpfSR=w286",
          address: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F", //link to account inside site, that shows other items he has listed}
        },
        to: {
          name: "user123",
          src: "https://lh3.googleusercontent.com/jQO3g8MZqUei2Cw8SAP3hD3xf7j0rM5QBNs14rSRsF5R6eUJs4F0TESuFPlBPC_fvFxr_6DdQAx8OvfsKXodIWkHAgv2fgOrpfSR=w286",
          address: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F", //link to account inside site, that shows other items he has listed}
        },
        date: "Dec 15, 2021 23:45:00", //link transaction on EtherScan
        transaction: "",
      },
      {
        type: "Bid",
        cost: {
          amount: 0.53,
          currency: "MATIC",
          usdEquivalent: 13,
        },
        from: {
          name: "user123",
          src: "https://lh3.googleusercontent.com/jQO3g8MZqUei2Cw8SAP3hD3xf7j0rM5QBNs14rSRsF5R6eUJs4F0TESuFPlBPC_fvFxr_6DdQAx8OvfsKXodIWkHAgv2fgOrpfSR=w286",
          address: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F", //link to account inside site, that shows other items he has listed}
        },
        to: {
          name: "user123",
          src: "https://lh3.googleusercontent.com/jQO3g8MZqUei2Cw8SAP3hD3xf7j0rM5QBNs14rSRsF5R6eUJs4F0TESuFPlBPC_fvFxr_6DdQAx8OvfsKXodIWkHAgv2fgOrpfSR=w286",
          address: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F", //link to account inside site, that shows other items he has listed}
        },
        date: "Dec 15, 2021 23:45:00", //link transaction on EtherScan
        transaction: "",
      },
      {
        type: "Bid",
        cost: {
          amount: 0.53,
          currency: "MATIC",
          usdEquivalent: 13,
        },
        from: {
          name: "user123",
          src: "https://lh3.googleusercontent.com/jQO3g8MZqUei2Cw8SAP3hD3xf7j0rM5QBNs14rSRsF5R6eUJs4F0TESuFPlBPC_fvFxr_6DdQAx8OvfsKXodIWkHAgv2fgOrpfSR=w286",
          address: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F", //link to account inside site, that shows other items he has listed}
        },
        to: {
          name: "user123",
          src: "https://lh3.googleusercontent.com/jQO3g8MZqUei2Cw8SAP3hD3xf7j0rM5QBNs14rSRsF5R6eUJs4F0TESuFPlBPC_fvFxr_6DdQAx8OvfsKXodIWkHAgv2fgOrpfSR=w286",
          address: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F", //link to account inside site, that shows other items he has listed}
        },
        date: "Dec 15, 2021 23:45:00", //link transaction on EtherScan
        transaction: "",
      },
    ],

    more: [
      { id: 0 },
      { id: 0 },
      { id: 0 },
      { id: 0 },
      { id: 0 },
      { id: 0 },
      { id: 0 },
      { id: 0 },
      { id: 0 },
      { id: 0 },
      { id: 0 },
      { id: 0 },
      { id: 0 },
    ],

    //******* filter 'AssetType'
    ////if object doesnt have 'items' prop -> 'AssetType' is 'Single Items'
  },
];

export const Bundles = [
  //BUNDLE item #1 option #1
  {
    id: 104,

    general: {
      name: "CryptoPunk #9795",
      src: "https://lh3.googleusercontent.com/GcdkvDosi5tTJEK6pfP-1tIMLsburKAXKmzKhlPRxcaG-6BkohlzL2LfmcC8GnbUw6k0VehaYuHu8EohbqX2ziF17ctH3WjKEqm6=w128",
    },

    project: {
      name: "Crypto Punks", //******* filter 'Collections' depends ot his prop
      isNSFW: false,
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

    auction: "Sep 30, 2022 23:45:00",

    price: {
      amount: 105,
      currency: "MATIC",
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

    boughtPrices: [],

    bids: {
      isAllowed: false,
      active: [
        {
          id: 1,
          user: {
            name: "HyperStudio",
            avatar:
              "https://img.rarible.com/prod/image/upload/t_avatar_big/prod-users/0xee63d9ca6ecaa334ba0c3311b3dbd5de0132ba4c/avatar/QmZQcqw38q6z7yKGXZx86o6Mn2mnUPF4CoscnMbCTXqboQ",
          },
          type: "bid",
          time: "1/12/2021 13:38:55",
          value: "10.6",
          currency: "BUSD",
        },
        {
          id: 2,
          user: {
            name: "HyperStudio",
            avatar:
              "https://img.rarible.com/prod/image/upload/t_avatar_big/prod-users/0xee63d9ca6ecaa334ba0c3311b3dbd5de0132ba4c/avatar/QmZQcqw38q6z7yKGXZx86o6Mn2mnUPF4CoscnMbCTXqboQ",
          },
          type: "bid",
          time: "2/12/2021 13:37:00",
          value: "20",
          currency: "BUSD",
        },
        {
          id: 3,
          user: {
            name: "HyperStudio",
            avatar:
              "https://img.rarible.com/prod/image/upload/t_avatar_big/prod-users/0xee63d9ca6ecaa334ba0c3311b3dbd5de0132ba4c/avatar/QmZQcqw38q6z7yKGXZx86o6Mn2mnUPF4CoscnMbCTXqboQ",
          },
          type: "bid",
          time: "3/12/2021 13:35:00",
          value: "30.9",
          currency: "BUSD",
        },
        {
          id: 4,
          user: {
            name: "HyperStudio",
            avatar:
              "https://img.rarible.com/prod/image/upload/t_avatar_big/prod-users/0xee63d9ca6ecaa334ba0c3311b3dbd5de0132ba4c/avatar/QmZQcqw38q6z7yKGXZx86o6Mn2mnUPF4CoscnMbCTXqboQ",
          },
          type: "bid",
          time: "4/12/2021 13:33:23",
          value: "40.9",
          currency: "BUSD",
        },
        {
          id: 5,
          user: {
            name: "HyperStudio",
            avatar:
              "https://img.rarible.com/prod/image/upload/t_avatar_big/prod-users/0xee63d9ca6ecaa334ba0c3311b3dbd5de0132ba4c/avatar/QmZQcqw38q6z7yKGXZx86o6Mn2mnUPF4CoscnMbCTXqboQ",
          },
          type: "bid",
          time: "5/12/2021 13:30:23",
          value: "50.99",
          currency: "BUSD",
        },
      ],
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

    itemHistory: [],

    bundleItems: [
      {
        count: 3,
        ...singleItems[0],
      },
      {
        count: 1,
        ...singleItems[0],
      },
      {
        count: 1,
        ...singleItems[0],
      },
    ],

    more: [
      { id: 0 },
      { id: 0 },
      { id: 0 },
      { id: 0 },
      { id: 0 },
      { id: 0 },
      { id: 0 },
      { id: 0 },
      { id: 0 },
      { id: 0 },
      { id: 0 },
    ],
  },
];

let singleBundleData = [];
singleBundleData = [...singleItems];
singleBundleData = [...singleItems, ...Bundles];

export default singleBundleData;
