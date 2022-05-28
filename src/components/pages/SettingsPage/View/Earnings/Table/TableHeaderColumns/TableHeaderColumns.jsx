import React from "react";
import styled from "styled-components";

const TableHeaderColumns = ({ onSort, selected }) => {
  return (
    <Wrapper>
      <ItemsX className="sortable" onClick={() => onSort("id")}>
        Items
      </ItemsX>
      <div className="small-column">Block Hash</div>
      <div
        className="disposable sortable small-column align-center"
        onClick={() => onSort("date")}
      >
        Date
      </div>
      <div
        className="disposable sortable small-column align-center"
        onClick={() => onSort("unitPrice")}
      >
        Unit Price
      </div>
      <div
        className={"disposable sortable small-column  align-center"}
        onClick={() => onSort("quantity")}
      >
        Quantity
      </div>
      <div
        className={"disposable sortable small-column  align-center"}
        onClick={() => onSort("feeEarned")}
      >
        Fee Earned
      </div>
    </Wrapper>
  );
};

const ItemsX = styled.div`
  flex: 0 0 40rem;
`;

const Wrapper = styled.div`
background: var(--color-grey10);
  padding: 1rem;

  display: flex;
  justify-content: space-between;

  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey50);

  .small-column {
    flex: 0 0 15rem;

    display: flex;
    justify-content: flex-start;
  }

  .align-center {
    justify-content: center;
  }

  .sortable {
    cursor: pointer;
  }
`;

export default TableHeaderColumns;
