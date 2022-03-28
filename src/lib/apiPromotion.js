import mockData from "../data/dbDataPromotion";

export async function getPromotionData() {
  await new Promise((res) => setTimeout(res, 500));
  return mockData;
}
