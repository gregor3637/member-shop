import React, { useMemo } from "react";
import styled from "styled-components";
import { useExpanded, useTable } from "react-table";

import { COLUMNS } from "./columns";
import makeData from "./columnData";
import Checkbox from "./Checkbox/Checkbox";

const AssetsViewList = ({setTestComponent}) => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => makeData(), []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    allColumns,
    getToggleHideAllColumnsProps,
  } = useTable(
    {
      columns,
      data,
    },
    useExpanded
  );

  // setTestComponent(<div>das</div>)
  console.log('allColumns ', allColumns);

  const getRowProps = (row) => {
    return { className: row.original.count ? "bundle-item" : "" };
  };

  return (
    <Wrapper>
      <div>
        <div>
          <Checkbox {...getToggleHideAllColumnsProps()} /> Toggle All
        </div>
        {allColumns.map((column) => {
          // console.log("column ", column);
          if (!column.canHideColumn) return null;

          return (
            <div key={column.id}>
              <label htmlFor="">
                <input type="checkbox" {...column.getToggleHiddenProps()} />
                {column.Header}
              </label>
            </div>
          );
        })}
      </div>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps(getRowProps(row))}>
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
            );
          })}
        </tbody>
      </table>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  table {
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }

  table td,
  table th {
    /* background-color: var(--color-white); */
    border: 1px solid #ddd;
    padding: 8px;
  }

  table tr:nth-child(even) {
    /* background-color: #f2f2f2; */
  }

  table tr:hover {
    /* background-color: #ddd; */
  }

  table th,
  tfoot td {
    padding: 12px 0;
    text-align: center;
    background-color: #04aa6d;
    color: white;
  }

  .bundle-column {
    /* display: flex; */
    /* flex-direction: row; */
    text-align: center;
  }

  .image-column {
    /* display: flex; */
    /* flex-direction: row; */
    /* background-color: red; */
    text-align: center;
  }

  .bundle-item {
    background-color: #ececec;
  }
`;

export default AssetsViewList;
