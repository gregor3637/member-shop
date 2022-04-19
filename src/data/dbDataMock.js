import mockarooItems from "./dbItemsDataMockaroo";

const singleBundleItem = {
  ...mockarooItems[0],
  id: mockarooItems[0].id + "01",
  bundleItems: [
    {
      count: 3,
      ...mockarooItems[0],
    },
    {
      count: 1,
      ...mockarooItems[1],
    },
    {
      count: 1,
      ...mockarooItems[2],
    },
  ],
};

// const nonBundleItems = [mockarooItems[0], mockarooItems[1]];
const nonBundleItems = mockarooItems;
const bundleItemsCollection = [singleBundleItem];

const allItems = [...nonBundleItems, ...bundleItemsCollection]

export default allItems;
export { bundleItemsCollection };
