const collections = [
  {
    id: 0,
    label: "cloneX",
    isVerified: true,
    imgSrc:
      "https://lh3.googleusercontent.com/wTFJMPGk1qE2hHqwLUsfGYzemXwLhJ8MwfHlO9swp_tzyarGmgyLzQHYJRbNic9NT4IRIy3UFd1uXwN4jcODQFVzjo5udKdcEJiPGgc=s64",
  },
  {
    id: 1,
    label: "RTFKT",
    isVerified: true,
    imgSrc:
      "https://lh3.googleusercontent.com/YLakJPj0dPFefWeWUnbX34_WNh0sedXHO0DLzrfR87UCvXUv4jc2f1bMBvYvXZ1psywbwkDgaZZyRZsNkDvl2OSqhy6ZEIVYPqIv=s64",
  },
  {
    id: 2,
    label: "The Sandbox",
    isVerified: true,
    imgSrc:
      "https://lh3.googleusercontent.com/SXH8tW1siikB80rwCRnjm1a5xM_MwTg9Xl9Db6mioIk9HIlDM09pVoSR7GKJgS6ulSUpgW9BDtMk_ePX_NKgO9A=s64",
  },
  {
    id: 3,
    label: "Crypto Punks",
    isVerified: true,
    imgSrc:
      "https://lh3.googleusercontent.com/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE=s64",
  },
  {
    id: 4,
    label: "Slotie NFT",
    isVerified: true,
    imgSrc:
      "https://lh3.googleusercontent.com/FDfJqrobmHVsLC6tNvjYv90xxRUPqG39zJqpjj-FpgKJJX5n23IegiO4lkqbATXRUxz2z8GGHa8qMN0cHqof1hx2xetxy6MobmKxkw=s64",
  },
  {
    id: 5,
    label: "The Sandbox_2",
    isVerified: false,
    imgSrc:
      "https://lh3.googleusercontent.com/SXH8tW1siikB80rwCRnjm1a5xM_MwTg9Xl9Db6mioIk9HIlDM09pVoSR7GKJgS6ulSUpgW9BDtMk_ePX_NKgO9A=s64",
  },
  {
    id: 6,
    label: "RTFKT_2",
    isVerified: false,
    imgSrc:
      "https://lh3.googleusercontent.com/YLakJPj0dPFefWeWUnbX34_WNh0sedXHO0DLzrfR87UCvXUv4jc2f1bMBvYvXZ1psywbwkDgaZZyRZsNkDvl2OSqhy6ZEIVYPqIv=s64",
  },
  {
    id: 7,
    label: "cloneX_2",
    isVerified: false,
    imgSrc:
      "https://lh3.googleusercontent.com/wTFJMPGk1qE2hHqwLUsfGYzemXwLhJ8MwfHlO9swp_tzyarGmgyLzQHYJRbNic9NT4IRIy3UFd1uXwN4jcODQFVzjo5udKdcEJiPGgc=s64",
  },
  {
    id: 8,
    label: "Slotie_2 NFT",
    isVerified: false,
    imgSrc:
      "https://lh3.googleusercontent.com/FDfJqrobmHVsLC6tNvjYv90xxRUPqG39zJqpjj-FpgKJJX5n23IegiO4lkqbATXRUxz2z8GGHa8qMN0cHqof1hx2xetxy6MobmKxkw=s64",
  },
  {
    id: 9,
    label: "Crypto Punks_2",
    isVerified: false,
    imgSrc:
      "https://lh3.googleusercontent.com/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE=s64",
  },
  {
    id: 10,
    label: "The Sandbox_3",
    isVerified: false,
    imgSrc:
      "https://lh3.googleusercontent.com/SXH8tW1siikB80rwCRnjm1a5xM_MwTg9Xl9Db6mioIk9HIlDM09pVoSR7GKJgS6ulSUpgW9BDtMk_ePX_NKgO9A=s64",
  },
  {
    id: 11,
    label: "RTFKT_3",
    isVerified: false,
    imgSrc:
      "https://lh3.googleusercontent.com/YLakJPj0dPFefWeWUnbX34_WNh0sedXHO0DLzrfR87UCvXUv4jc2f1bMBvYvXZ1psywbwkDgaZZyRZsNkDvl2OSqhy6ZEIVYPqIv=s64",
  },
  {
    id: 12,
    label: "cloneX_3",
    isVerified: false,
    imgSrc:
      "https://lh3.googleusercontent.com/wTFJMPGk1qE2hHqwLUsfGYzemXwLhJ8MwfHlO9swp_tzyarGmgyLzQHYJRbNic9NT4IRIy3UFd1uXwN4jcODQFVzjo5udKdcEJiPGgc=s64",
  },
  {
    id: 13,
    label: "Slotie_3 NFT",
    isVerified: false,
    imgSrc:
      "https://lh3.googleusercontent.com/FDfJqrobmHVsLC6tNvjYv90xxRUPqG39zJqpjj-FpgKJJX5n23IegiO4lkqbATXRUxz2z8GGHa8qMN0cHqof1hx2xetxy6MobmKxkw=s64",
  },
  {
    id: 14,
    label: "Crypto Punks_3",
    isVerified: false,
    imgSrc:
      "https://lh3.googleusercontent.com/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE=s64",
  },
  {
    id: 15,
    label: "The Sandbox_4",
    isVerified: false,
    imgSrc:
      "https://lh3.googleusercontent.com/SXH8tW1siikB80rwCRnjm1a5xM_MwTg9Xl9Db6mioIk9HIlDM09pVoSR7GKJgS6ulSUpgW9BDtMk_ePX_NKgO9A=s64",
  },
  {
    id: 16,
    label: "RTFKT_4",
    isVerified: false,
    imgSrc:
      "https://lh3.googleusercontent.com/YLakJPj0dPFefWeWUnbX34_WNh0sedXHO0DLzrfR87UCvXUv4jc2f1bMBvYvXZ1psywbwkDgaZZyRZsNkDvl2OSqhy6ZEIVYPqIv=s64",
  },
  {
    id: 17,
    label: "cloneX_4",
    isVerified: false,
    imgSrc:
      "https://lh3.googleusercontent.com/wTFJMPGk1qE2hHqwLUsfGYzemXwLhJ8MwfHlO9swp_tzyarGmgyLzQHYJRbNic9NT4IRIy3UFd1uXwN4jcODQFVzjo5udKdcEJiPGgc=s64",
  },
  {
    id: 18,
    label: "Slotie_4 NFT",
    isVerified: false,
    imgSrc:
      "https://lh3.googleusercontent.com/FDfJqrobmHVsLC6tNvjYv90xxRUPqG39zJqpjj-FpgKJJX5n23IegiO4lkqbATXRUxz2z8GGHa8qMN0cHqof1hx2xetxy6MobmKxkw=s64",
  },
  {
    id: 19,
    label: "Crypto Punks_4",
    isVerified: false,
    imgSrc:
      "https://lh3.googleusercontent.com/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE=s64",
  },
  {
    id: 20,
    label: "The Sandbox_5",
    isVerified: false,
    imgSrc:
      "https://lh3.googleusercontent.com/SXH8tW1siikB80rwCRnjm1a5xM_MwTg9Xl9Db6mioIk9HIlDM09pVoSR7GKJgS6ulSUpgW9BDtMk_ePX_NKgO9A=s64",
  },
  {
    id: 21,
    label: "RTFKT_5",
    isVerified: false,
    imgSrc:
      "https://lh3.googleusercontent.com/YLakJPj0dPFefWeWUnbX34_WNh0sedXHO0DLzrfR87UCvXUv4jc2f1bMBvYvXZ1psywbwkDgaZZyRZsNkDvl2OSqhy6ZEIVYPqIv=s64",
  },
  {
    id: 22,
    label: "cloneX_5",
    isVerified: false,
    imgSrc:
      "https://lh3.googleusercontent.com/wTFJMPGk1qE2hHqwLUsfGYzemXwLhJ8MwfHlO9swp_tzyarGmgyLzQHYJRbNic9NT4IRIy3UFd1uXwN4jcODQFVzjo5udKdcEJiPGgc=s64",
  },
  {
    id: 23,
    label: "Slotie_5 NFT",
    isVerified: false,
    imgSrc:
      "https://lh3.googleusercontent.com/FDfJqrobmHVsLC6tNvjYv90xxRUPqG39zJqpjj-FpgKJJX5n23IegiO4lkqbATXRUxz2z8GGHa8qMN0cHqof1hx2xetxy6MobmKxkw=s64",
  },
  {
    id: 24,
    label: "Crypto Punks_5",
    isVerified: false,
    imgSrc:
      "https://lh3.googleusercontent.com/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE=s64",
  },
];

export default collections;
