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

export default function metamorphoseToTableData(data) {
  const subRowsData = data.map((item) => {
    if (item.items) {
      return {
        ...item,
        // ["subRows"]: item.items,
      };
    }

    return item;
  });

  return subRowsData;
}
