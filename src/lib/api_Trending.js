import collections from "../data/dbTrendingPageCollectionsData";

export async function getCollections() {
  // const response = await fetch("https://swapi.dev/api/planets");
  // const data = await response.json();

  // if (!response.ok) {
  //   throw new Error(data.message || "Could not get comments.");
  // }

  await new Promise((res) => setTimeout(res, 500));

  console.log('getCollections collections ', collections);

  return collections;
}
