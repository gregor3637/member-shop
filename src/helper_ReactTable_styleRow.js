const getRowProps = (row) => {
    return { className: row.original.count ? "bundle-item" : "" };

    return {
      className: "bundle-item",
      style: {
        // background: row.index % 2 === 0 ? "rgba(0,0,0,.1)" : "green",
        // background: !row.original.count ? "rgba(0,0,0,.1)" : "green",
      },
    };
  };



{/* <tbody {...getTableBodyProps()}>
{rows.map((row) => {
  prepareRow(row);
  return (
    // <tr {...row.getRowProps()}>
    <tr {...row.getRowProps(getRowProps(row))}>
      {row.cells.map((cell) => {
        return (
          <td
            {...cell.getCellProps([
              {
                className: cell.column.className,
                // style: cell.column.style,
              },
              // getColumnProps(cell.column),
              // getCellProps(cell),
            ])}
          >
            {cell.render("Cell")}
          </td>
        );
      })}
    </tr>
  );
})}
</tbody> */}



export const COLUMNS = [
    {
      Header: "Image",
      accessor: "src",
      className: "image-column",
    }
]