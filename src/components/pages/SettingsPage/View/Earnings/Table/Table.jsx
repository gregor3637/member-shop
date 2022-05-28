import React, { useEffect, useState } from "react";
import styled from "styled-components";
import HeightIcon from "@mui/icons-material/Height";

import ColumnElement from "./ColumnElement/ColumnElement";
import TableHeaderColumns from "./TableHeaderColumns/TableHeaderColumns";
import InputSearch from "../../../../MarketplacePage/CommonElements/InputSearch/InputSearch";

const sortMethods = {
  unitPrice: (a, b) => b.price.amount - a.price.amount,
  quantity: (a, b) => b.quontity - a.quontity,
  feeEarned: (a, b) => b.fee - a.fee,
  date: (a, b) => {
    let res = new Date(b.date).getTime() - new Date(a.date).getTime();
    return res;
  },
  id: (a, b) => b.id - a.id,
};

const Table = ({ data }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortedData, setSortedData] = useState([]);

  const [selectedSortMethodName, setSelectedSortMethodName] = useState("id");

  const handleHeaderClick = (headerName) => {
    setSelectedSortMethodName(headerName);
  };

  useEffect(() => {
    const filtered = data.filter((x) => x.itemName.includes(searchQuery));
    const sMethod = sortMethods[selectedSortMethodName] || sortMethods["id"];

    setSortedData(filtered.sort(sMethod));
  }, [selectedSortMethodName, data, searchQuery]);

  return (
    <Wrapper>
      <HeaderX>
        <span>
          <HeightIcon />
          Payout History
        </span>
        <InputHolderX>
          <InputSearchX
            inputVal={searchQuery}
            onInput={(ev) => setSearchQuery(ev.target.value)}
            onClear={() => setSearchQuery("")}
          />
        </InputHolderX>
      </HeaderX>
      <BodyX>
        <TableHeaderColumns onSort={handleHeaderClick} />
        {sortedData.map((columnData) => {
          return <ColumnElement key={columnData.id} data={columnData} />;
        })}
      </BodyX>
    </Wrapper>
  );
};

const InputHolderX = styled.div``;

const BodyX = styled.div``;

const InputSearchX = styled(InputSearch)``;

const HeaderX = styled.div`
  padding: 1rem;

  display: flex;
  justify-content: space-between;
  gap: 2rem;

  border-bottom: 1px solid var(--color-grey20);

  span {
    /* background: var(--test-r); */
    width: max-content;
    flex: 1;

    display: flex;
    align-items: center;

    font-size: 1.6rem;
    font-weight: 600;

    svg {
      font-size: 2rem;
    }
  }
`;
const Wrapper = styled.div`
  align-self: start;
  flex: 1;

  border: 1px solid var(--color-grey20);
  border-radius: 1rem;
`;

export default Table;
