import trendingData from "../data/trendingData";

export async function getPageItems(page, itemsPerPage) {
  // const response = await fetch(`${FIREBASE_DOMAIN}/comments/${quoteId}.json`);

  const response = await fetch(
    `https://randomuser.me/api/?page=${1}&results=10`
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not get comments.");
  }

  const startingIndex = page * itemsPerPage;
  const endIndex = startingIndex + itemsPerPage;
  const newEntries = trendingData.slice(startingIndex, endIndex);

  return newEntries;
}

export async function getElementsById(ids) {
  // const response = await fetch(`${FIREBASE_DOMAIN}/comments/${quoteId}.json`);

  const response = await fetch(
    `https://randomuser.me/api/?page=${1}&results=10`
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not get comments.");
  }

  const newEntries = trendingData.filter((x) => ids.indexOf(x.id) > -1);

  return newEntries;
}

export async function getIDsOfRelatedItems(searchedId) {
  // const response = await fetch(`${FIREBASE_DOMAIN}/comments/${quoteId}.json`);

  const response = await fetch(
    `https://randomuser.me/api/?page=${1}&results=10`
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not get comments.");
  }

  console.log('++++++++++++++++ searchedId = ' + searchedId);
  let searchedItem = trendingData.find((x) => +x.id === +searchedId);
  const related = searchedItem.more;
  const relatedIds = related.map((x) => x.id);

  return relatedIds;
}

export async function getSingleCard(id) {
  const response = await fetch(
    `https://randomuser.me/api/?page=${1}&results=10`
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not get comments.");
  }

  let searchedItem = trendingData.find((x) => +x.id === +id);

  return searchedItem;
}

export async function getMostPopularCollections() {
  const response = await fetch("https://swapi.dev/api/planets");
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not get comments.");
  }

  const mostPopularCollections = [
    {
      value: "0",
      label: "Marvel",
      logo: "https://i.stack.imgur.com/Ftwrn.png?s=64&g=1",
    },
    {
      value: "1",
      label: "DC",
      logo: "https://www.gravatar.com/avatar/dfeee8a4c8815bf8501015bc3e4c32e2?s=256&d=identicon&r=PG",
    },
    {
      value: "2",
      label: "Trud",
      logo: "https://i.stack.imgur.com/8Hln4.jpg?s=256&g=1",
    },
    {
      value: "3",
      label: "NY Times",
      logo: "https://i.stack.imgur.com/Ftwrn.png?s=64&g=1",
    },
    {
      value: "4",
      label: "BBC",
      logo: "https://i.stack.imgur.com/Ftwrn.png?s=64&g=1",
    },
  ];

  return mostPopularCollections;
}

export async function getCollectionsBySubstr(inputValue) {
  return fetch("https://swapi.dev/api/planets")
    .then((res) => res.json())
    .then((data) => {
      let found = data.results.filter((x) => x.name.includes(inputValue));

      const mostPopularCollections = [
        {
          value: "0",
          label: "Marvel",
          logo: "https://i.stack.imgur.com/Ftwrn.png?s=64&g=1",
        },
        {
          value: "1",
          label: "DC",
          logo: "https://www.gravatar.com/avatar/dfeee8a4c8815bf8501015bc3e4c32e2?s=256&d=identicon&r=PG",
        },
        {
          value: "2",
          label: "Trud",
          logo: "https://i.stack.imgur.com/8Hln4.jpg?s=256&g=1",
        },
        {
          value: "3",
          label: "NY Times",
          logo: "https://i.stack.imgur.com/Ftwrn.png?s=64&g=1",
        },
        {
          value: "4",
          label: "BBC",
          logo: "https://i.stack.imgur.com/Ftwrn.png?s=64&g=1",
        },
      ];

      const formatedData = found.map((x, i) => {
        const ind = i % mostPopularCollections.length;
        const src = mostPopularCollections[ind].logo;

        return {
          value: x.name,
          label: x.name,
          logo: src,
        };
      });

      return formatedData;
    })
    .catch((error) => {
      return error;
    });
}
