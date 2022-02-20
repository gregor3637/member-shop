import assetsAPI from "../../../../../lib/MarketplaceAssetsAPI";

const getItemsData = (items, source) => {
  let res = items.map(({ itemSourceId, count }) => {
    const item = source.find((x) => x.id === itemSourceId);

    if (item && !item.items) {
      return { count: count, ...item };
    }

    return null;
  });

  return res;
};

export default function makeData() {
  const data = [...assetsAPI, ...assetsAPI,...assetsAPI];

  const subRowsData = data.map((item) => {
    if (item.items) {
      return {
        ...item,
        ["subRows"]: getItemsData(item.items, data),
      };
    }

    return item;
  });

  return subRowsData;
}
