import BundleButton from "./BundleButton/BundleButton";
import MoreButton from "./MoreButton/MoreButton";
import View from "./View/View";

export const COLUMNS = [
  {
    Header: "Bundle",
    id: "bundle",
    className: "bundle-column",
    canHideColumn: false,
    Cell: ({ row }) =>
      row.canExpand ? (
        <span {...row.getToggleRowExpandedProps()}>
          <BundleButton isExpanded={row.isExpanded} />
        </span>
      ) : null,
  },
  {
    Header: "Image",
    accessor: "src",
    className: "image-column",
    canHideColumn: false,
    Cell: (tableProps) => (
      <View
        src={tableProps.row.original.src}
        count={tableProps.row.original.count}
      />
    ),
  },
  {
    Header: "Name",
    accessor: "general.name",
    canHideColumn: true,
  },
  {
    Header: "Project Name",
    accessor: "general.project.name",
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
    accessor: (data) => data.boughtPrices[data.boughtPrices.length - 1]?.amount,
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
    Header: "Socials",
    accessor: "general.socials.favorites",
    canHideColumn: true,
    // Cell: ({ value }) => {
    //   return format(new Date(value), "dd/MM/yyyy");
    // },
  },
  {
    Header: "More",
    canHideColumn: false,
    Cell: (tableProps) => {
      const isBundleItem = tableProps.row.original.count;
      const component = !isBundleItem ? <MoreButton /> : null;
      return component;
    },
  },
];
