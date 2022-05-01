import React, { useMemo, useEffect } from "react";
import styled from "styled-components";
import { useExpanded, useFlexLayout, useSortBy, useTable } from "react-table";

import columnsData from "./columns";
import metamorphoseToTableData from "./columnData";
import useMarketPreferenceContext from "../../../../../../hooks/Market/PreferenceContext/useMarketPreferenceContext";
import SubRowAsync from "./LazySubComponents/SubRowAsync/SubRowAsync";
import useLocalStorage from "../../../../../../hooks/useLocalStorage";

const TableView = ({ data }) => {
  // eslint-disable-next-line
  const [favorites, setFavorites] = useLocalStorage("favorites", []);
  const { dispatch } = useMarketPreferenceContext();
  const columns = useMemo(() => columnsData(), []);
  data = useMemo(() => metamorphoseToTableData(data), [data]);

  const defaultColumn = React.useMemo(
    () => ({
      // When using the useFlexLayout:
      minWidth: 30, // minWidth is only used as a limit for resizing
      width: 70, // width is used for both the flex-basis and flex-grow
      maxWidth: 150, // maxWidth is only used as a limit for resizing
    }),
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    allColumns,
    visibleColumns,
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
    },
    useSortBy,
    useExpanded,
    useFlexLayout
  );

  const renderRowSubComponent = React.useCallback(
    ({ row, rowProps, visibleColumns }) => (
      <SubRowAsync
        row={row}
        rowProps={rowProps}
        visibleColumns={visibleColumns}
      />
    ),
    []
  );

  useEffect(() => {
    dispatch({ type: "tableColumns", value: allColumns });
  }, [allColumns, dispatch]);

  return (
    <Wrapper>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? " 🔽"
                        : " 🔼"
                      : ""}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            const rowProps = row.getRowProps();
            return (
              <React.Fragment key={rowProps.key}>
                <tr {...rowProps}>
                  {row.cells.map((cell) => {
                    return (
                      <td
                        {...cell.getCellProps([
                          {
                            className: cell.column.className,
                          },
                        ])}
                      >
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
                {/* We could pass anything into this */}
                {row.isExpanded &&
                  renderRowSubComponent({ row, rowProps, visibleColumns })}
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  overflow-x: auto;

  table {
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
    padding: 0 2rem;

    border: 0;
  }

  table th,
  table td {
    padding: 1rem 0.5rem;
  }

  table td {
    border-top: 1px solid #ddd;
  }

  table td {
    display: flex;
    align-items: center;
    justify-content: start;
  }

  table tr:nth-child(even) {
    /* background-color: #f2f2f2; */
  }

  table tr:hover {
    /* background-color: #ddd; */
  }

  table th,
  tfoot td {
    padding: 1.6rem 0.5rem;
    text-align: left;
    background-color: var(--color-white);
    color: var(--color-black);
  }

  .bundle-column {
    text-align: center;
    justify-content: center;
  }
  .image-column {
  }

  .watch-column {
  }

  .bundle-item {
    background-color: #ececec;
  }

  .more-column {
    display: flex;
    align-items: center;
    justify-content: left;
    padding: 0 20px;
  }

  .name-column {
    word-break: break-word;
  }
`;

export default TableView;
