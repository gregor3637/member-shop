import React, { useMemo } from "react";
import styled from "styled-components";
import { useExpanded, useFlexLayout, useSortBy, useTable } from "react-table";

import useHttp from "../../../../hooks/useHttp";
import { getCollections } from "../../../../lib/api_Trending";
import trendingColumns from "./TrendingColumns";
import collections from "../../../../data/dbTrendingPageCollectionsData";

const Table = ({}) => {
  const columns = useMemo(() => trendingColumns(), []);
  let data = useMemo(() => collections, []);

  // const defaultColumn = React.useMemo(
  //   () => ({
  //     // When using the useFlexLayout:
  //     minWidth: 50, // minWidth is only used as a limit for resizing
  //     width: 200, // width is used for both the flex-basis and flex-grow
  //     maxWidth: 250, // maxWidth is only used as a limit for resizing
  //   }),
  //   []
  // );

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
      // defaultColumn,
    },
    useSortBy,
    useExpanded,
    useFlexLayout
  );

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
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: var(--test-r);

  table {
    background: var(--test-y);

    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
    padding: 0 2rem;

    border: 0;
  }

  table td {
    display: flex;
    align-items: center;
    justify-content: start;
  }

  /* .trending-th-id,
  .trending-td-id {
    background: var(--test-r);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
  } */

  /* .trending-td-collections,
  .trending-th-collections {
      background: var(--test-g);
      width: max-content;
      flex-basis: max-content;
  } */
  /* 
  table th,
  table td {
    text-align: right;
    height: 5rem;
    border-bottom: 1px solid var(--color-grey40);
  } */

  table th,
  table td {
    height: 5rem;
    text-align: left;
    background-color: var(--color-white);
    color: var(--color-black);
    border-bottom: 1px solid var(--color-grey40);
  }
`;

export default Table;
