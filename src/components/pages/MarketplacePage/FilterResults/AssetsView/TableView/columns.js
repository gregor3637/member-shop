import BundleButton from "./BundleButton/BundleButton";
import MoreButton from "../../../../../General/Buttons/MoreButton/MoreButton";
import View from "./View/View";
import Watched from "./Watch/Watch";

const columns = (tableData) => {
  return [
    {
      Header: "",
      id: "bundle",
      className: "bundle-column",
      canHideColumn: false,
      // width: 70,
      width: 100,
      canResize: false,
      show: false,
      style: { background: "red" },
      Cell: ({ row }) => {
        return row.original.bundleItems ? (
          <span {...row.getToggleRowExpandedProps()}>
            <BundleButton isExpanded={row.isExpanded} />
          </span>
        ) : null;
      },
    },
    {
      Header: "",
      accessor: "src",
      className: "image-column",
      canHideColumn: false,
      disableSortBy: true,
      canResize: false,
      Cell: (tableProps) => (
        <View
          id={tableProps.row.original.id}
          src={tableProps.row.original.general.src}
          count={tableProps.row.original.count}
        />
      ),
    },
    {
      Header: "Name",
      accessor: "general.name",
      className: "name-column",
      canHideColumn: true,
    },
    {
      Header: "Project Name",
      accessor: "project.name",
      canHideColumn: true,
    },

    {
      Header: "Blockchain",
      accessor: "summary.details.blockchain",
      canHideColumn: true,
    },
    {
      Header: "Price",
      accessor: "price.amount",
      canHideColumn: true,
    },
    {
      Header: "Last Price",
      accessor: (data) =>
        data.price.history[data.price.history.length - 1]?.amount,
      canHideColumn: true,
    },
    {
      Header: "Best Offer",
      accessor: (data) => data.bids.active[0]?.amount,
      canHideColumn: true,
    },
    {
      Header: "Categories",
      accessor: "summary.category",
      canHideColumn: true,
    },
    {
      Header: "Auction",
      accessor: "auction",
      canHideColumn: true,
      // Cell: ({ value }) => {
      //   return format(new Date(value), "dd/MM/yyyy");
      // },
    },
    {
      Header: "Watch",
      // accessor: "general.socials.favorites",
      id: "watch",
      className: "watch-column",
      canHideColumn: true,
      canResize: false,
      Cell: (tableProps) => {
        const isBundleItem = tableProps.row.original.count;
        return !isBundleItem ? (
          <Watched
            id={tableProps.row.original.id}
            favoritesCount={tableProps.row.original.socialMedia.stats.favorites}
          />
        ) : null;
      },
    },
    {
      Header: "",
      id: "more",
      canHideColumn: false,
      className: "more-column",
      canResize: false,
      Cell: (tableProps) => {
        const isBundleItem = tableProps.row.original.count;
        const component = !isBundleItem ? (
          <MoreButton
            id={tableProps.row.original.id}
            isBidActive={tableProps.row.original.bids.isAllowed}
            isBuyActive={tableProps.row.original.price.currency !== ""}
          />
        ) : null;
        return component;
      },
    },
  ];
};

export default columns;
