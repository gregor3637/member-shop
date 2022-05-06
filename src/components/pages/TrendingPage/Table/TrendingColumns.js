import View from "./View/View";

const trendingColumns = (customSort) => {
  return [
    {
      Header: () => <div className="trending-th-id">Rank</div>,
      className: "trending-td-id",
      accessor: "general.id",
      canHideColumn: true,
      Cell: ({ row }) => {
        return <span>{+row.id + 1}</span>;
      },
    },
    {
      Header: () => <div className="trending-th-collections">Collection</div>,
      className: "trending-td-collections",
      accessor: "general.name",
      canHideColumn: true,
      Cell: (tableProps) => (
        <View
          id={tableProps.row.original.id}
          src={tableProps.row.original.general.avatar}
          collectionName = {tableProps.row.original.general.name}
        />
      ),
    },
    {
      Header: "Volume",
      accessor: "volume.today.value",
      className: "name-column",
      canHideColumn: true,
    },
    {
      Header: "24h %",
      accessor: "volume.today.percentage",
      className: "one-day",
      canHideColumn: true,
    },
    {
      Header: "7d %",
      accessor: "volume.week.percentage",
      canHideColumn: true,
    },
    {
      Header: "Floor Price",
      // accessor: "price.floor",
      className: "price",
      canHideColumn: true,
      Cell: ({ row }) => {
        const price = row.original.price;
        const component = (
          <span>
            {price.currency} {price.floor.value}
          </span>
        );
        return component;
      },
    },
    {
      Header: "Owners",
      accessor: "general.owners",
      className: "price",
      canHideColumn: true,
    },
    {
      Header: "Items",
      accessor: "general.items",
      className: "price",
      canHideColumn: true,
    },
  ];
};

export default trendingColumns;
