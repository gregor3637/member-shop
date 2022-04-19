const collections = [
  {
    id: 0,
    name: "BoredApeYachtClub",
    avatar:
      "https://lh3.googleusercontent.com/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB=s64",
    isVerified: false,
  },
  {
    id: 1,
    name: "CryptoPunks",
    avatar:
      "https://lh3.googleusercontent.com/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE=s64",
    isVerified: false,
  },
  {
    id: 2,
    name: "Moonbirds",
    avatar:
      "https://lh3.googleusercontent.com/sn5iLHUcNuUO98w_9Z7cat32hiqvVkPYr6tzHUacESg4PePh9M3jySvpttyWWXHD2e8M4PNQqgorU9sUvpX-FHQHXFBiCpKjloC2nA=s64",
    isVerified: true,
  },
  {
    id: 3,
    name: "Azuki",
    avatar:
      "https://lh3.googleusercontent.com/H8jOCJuQokNqGBpkBN5wk1oZwO7LM8bNnrHCaekV2nKjnCqw6UB5oaH8XyNeBDj6bA_n1mjejzhFQUP3O1NfjFLHr3FOaeHcTOOT=s64",
    isVerified: true,
  },
  {
    id: 4,
    name: "HAKI NFT",
    avatar:
      "https://lh3.googleusercontent.com/Cq1G1NVYtecZKoHdzDt9xkYliJPpkoDniUAEIodD_WFfhaykPpyxrMxggWcIdfqrSx8xajwxT5UYehZNwNPI5l8s5xeLC88xmhi8oQ=s64",
    isVerified: false,
  },
  {
    id: 5,
    name: "Doodles",
    avatar:
      "https://lh3.googleusercontent.com/7B0qai02OdHA8P_EOVK672qUliyjQdQDGNrACxs7WnTgZAkJa_wWURnIFKeOh5VTf8cfTqW3wQpozGedaC9mteKphEOtztls02RlWQ=s64",
    isVerified: false,
  },
  {
    id: 6,
    name: "The Sandbox",
    avatar:
      "https://lh3.googleusercontent.com/SXH8tW1siikB80rwCRnjm1a5xM_MwTg9Xl9Db6mioIk9HIlDM09pVoSR7GKJgS6ulSUpgW9BDtMk_ePX_NKgO9A=s64",
    isVerified: false,
  },
  {
    id: 7,
    name: "Milady Maker",
    avatar:
      "https://lh3.googleusercontent.com/a_frplnavZA9g4vN3SexO5rrtaBX_cBTaJYcgrPtwQIqPhzgzUendQxiwUdr51CGPE2QyPEa1DHnkW1wLrHAv5DgfC3BP-CWpFq6BA=s64",
    isVerified: true,
  },
  {
    id: 8,
    name: "PROOF Collective",
    avatar:
      "https://lh3.googleusercontent.com/ipAyQg6Xlgvwxma0Qp0a1gqdsZepRvHR4ZLsPN3mOFvIR1aznNiWFEgba2gcVqQwJS5BoJilLPrA2DRq2DVOnwKc3tDovmEdjR4qb-0=s64",
    isVerified: true,
  },
  {
    id: 9,
    name: "VeeFriends",
    avatar:
      "https://lh3.googleusercontent.com/5y-UCAXiNOFXH551w5bWdZEYOCdHPwbqmcKb-xa3uVQEjQgxvih3HtZWSmzqDqd0uk7kIqFrZhw32Gt6xPBFg4t_n9BKhpou-dwnOg=s64",
    isVerified: true,
  },
  {
    id: 10,
    name: "CyberBrokers",
    avatar:
      "https://lh3.googleusercontent.com/Qd1IEPYz_0YlMaclPwb6_9PyP7afZIzH15IdIU2X6t1Wvg81DwpAaWOY0cNmxy173C4yMA7sM3xF9-HJsCSKJdx6KvDR3old3IKuTIc=s64",
    isVerified: true,
  },
  {
    id: 11,
    name: "Bored Ape Kennel Club",
    avatar:
      "https://lh3.googleusercontent.com/l1wZXP2hHFUQ3turU5VQ9PpgVVasyQ79-ChvCgjoU5xKkBA50OGoJqKZeMOR-qLrzqwIfd1HpYmiv23JWm0EZ14owiPYaufqzmj1=s64",
    isVerified: false,
  },
  {
    id: 12,
    name: "Toxic Skulls Club",
    avatar:
      "https://lh3.googleusercontent.com/43adAijXmN5KxqP5jfuG7mFiVwe994MRuPhZCfbFd47YGWZG6fHYm9J6aRRPZnyEjm8kGATnGUOd253SaSdNpF883K6Xh_8YNlAWaJo=s64",
    isVerified: true,
  },
  {
    id: 13,
    name: "Art Blocks Curated",
    avatar:
      "https://lh3.googleusercontent.com/GwnosrkaneKGEkWySxvTSzZ5bEUjWkRuQzLSNfrpgy2-gxYjoR3m5PohLT9Fzy0p1tohajZ1g-LFfF_ZLnS1GqlPNHPUaKUbDhbf=s64",
    isVerified: false,
  },
  {
    id: 14,
    name: "World of Women",
    avatar:
      "https://lh3.googleusercontent.com/EFAQpIktMBU5SU0TqSdPWZ4byHr3hFirL_mATsR8KWhM5z-GJljX8E73V933lkyKgv2SAFlfRRjGsWvWbQQmJAwu3F2FDXVa1C9F=s64",
    isVerified: true,
  },
  {
    id: 15,
    name: "Gh0stly Gh0sts",
    avatar:
      "https://lh3.googleusercontent.com/MACJRvA4MOLHonq73rxU8TaHPrbYuGbJ5_rqV7pw9ZGd97h5mo5NyU6PpQNOvZzdoVu2KRVs3jP-oMK3FF1XQtNSxN6xf1ZVd9is=s64",
    isVerified: false,
  },
  {
    id: 16,
    name: "fRiENDSiES",
    avatar:
      "https://lh3.googleusercontent.com/kYHEXz4XAzgU5FzvUS-yu6H7sAIEhCUVOWXAzIXDenygg4c8pW4GZ4C4_LE-nitJ6VRhH_gG3_LEAoIr1Px8z_egduqKvudK5Y6V5Q=s64",
    isVerified: true,
  },
  {
    id: 17,
    name: "Decentraland",
    avatar:
      "https://lh3.googleusercontent.com/5KIxEGmnAiL5psnMCSLPlfSxDxfRSk4sTQRSyhPdgnu70nGb2YsuVxTmO2iKEkOZOfq476Bl1hAu6aJIKjs1myY=s64",
    isVerified: true,
  },
  {
    id: 18,
    name: "illogics",
    avatar:
      "https://lh3.googleusercontent.com/wG9tN1YkG6xQ3AJ9zENy8v548QkLyK1HRZuCVc5GZSat2Ngh633aYNXZSMGVroN2b0j0AcfEj-ibKkIPsBu2fq0NStEbQWJB7BMm=s64",
    isVerified: false,
  },
  {
    id: 19,
    name: "Forest Spirits  by  ZENFT",
    avatar:
      "https://lh3.googleusercontent.com/ZKujAXVFIzvgS4j_3Z2uF7-keeDLrQwR-e8z9f15ro9bAL2P0oZJxZwAUO0Oj-TMJ2YnUJlcGyimbyDJgrH1OBj2_DOaimiTvyGdcg=s64",
    isVerified: true,
  },
  {
    id: 20,
    name: "Cyber Factory 2",
    avatar:
      "https://lh3.googleusercontent.com/72591rGu5Q4R7JeUjXyc1ZH2QJ2CW64OwKQ4Ec9Hf1_z8W6IgXNummT2ErPy80zh0DoUY8KXUXZdvgeUUw9HeIz8L11sYeNqTyD21y0=s64",
    isVerified: true,
  },
  {
    id: 21,
    name: "Karafuru",
    avatar:
      "https://lh3.googleusercontent.com/VMG3VFncJG-pyqsRAwQznZGqYDw4RkPjJnJNJwrDERFhD4pWLh82q66JJ8Qh0vCPoovjoyigJwLqfFpa5tMAVV5ASIiR5nF1XkQFpec=s64",
    isVerified: true,
  },
  {
    id: 22,
    name: "GNSS by MGXS",
    avatar:
      "https://lh3.googleusercontent.com/DZWZqpzB2oziNcsKBwjLVJScJuJYOajr_hgy6p5OxM_iy4is4Rec9GDCkrRrPNwGC3kh9NamwSFlK2gd4FM9oBqCZsBGdDiDa564XCU=s64",
    isVerified: true,
  },
  {
    id: 23,
    name: "Ethlizards",
    avatar:
      "https://lh3.googleusercontent.com/xQtMH32KlwsBh0Ka2gwzHhy8Qu7-rbh15SQaPqz8xe7ZC1TH_MkSTgLAaNg4hPcsupacDqPVciBaXlqDNpZzDgGOfHHbXYaSxwGzUg=s64",
    isVerified: false,
  },
];

/*
{
    id: 0,
    label: "cloneX",
    isVerified: true,
    imgSrc:
      "https://lh3.googleusercontent.com/wTFJMPGk1qE2hHqwLUsfGYzemXwLhJ8MwfHlO9swp_tzyarGmgyLzQHYJRbNic9NT4IRIy3UFd1uXwN4jcODQFVzjo5udKdcEJiPGgc=s64",
  }

*/

export default collections;
