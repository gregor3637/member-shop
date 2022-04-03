export default function metamorphoseToTableData(data) {
  const subRowsData = data.map((item) => {
    if (item.items) {
      return {
        ...item,
      };
    }

    return item;
  });

  return subRowsData;
}
