import entries from "../data/dbActivityPageData";

export async function getActivities() {
  // const response = await fetch("https://swapi.dev/api/planets");
  // const data = await response.json();

  // if (!response.ok) {
  //   throw new Error(data.message || "Could not get comments.");
  // }

  await new Promise((res) => setTimeout(res, 500));

  // return [];
  return [...entries, ...entries];
}
