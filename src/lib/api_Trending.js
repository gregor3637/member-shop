import dbItemsDataMockaroo from "../data/dbItemsDataMockaroo";
import collections from "../data/dbTrendingPageCollectionsData";
import collectors from "../data/dbTrendingPageCollectorsData";
import creators from "../data/dbTrendingPageCreatorsData";

export async function getCollections() {
  // const response = await fetch("https://swapi.dev/api/planets");
  // const data = await response.json();

  // if (!response.ok) {
  //   throw new Error(data.message || "Could not get comments.");
  // }

  await new Promise((res) => setTimeout(res, 500));

  console.log("getCollections collections ", collections);

  return collections;
}

export async function getCreators() {
  // const response = await fetch("https://swapi.dev/api/planets");
  // const data = await response.json();

  // if (!response.ok) {
  //   throw new Error(data.message || "Could not get comments.");
  // }

  await new Promise((res) => setTimeout(res, 500));

  return creators;
}

export async function getCollectors() {
  // const response = await fetch("https://swapi.dev/api/planets");
  // const data = await response.json();

  // if (!response.ok) {
  //   throw new Error(data.message || "Could not get comments.");
  // }

  await new Promise((res) => setTimeout(res, 500));

  return collectors;
}
export async function getAuctions() {
  // const response = await fetch("https://swapi.dev/api/planets");
  // const data = await response.json();

  // if (!response.ok) {
  //   throw new Error(data.message || "Could not get comments.");
  // }

  await new Promise((res) => setTimeout(res, 500));

  return dbItemsDataMockaroo;
}
