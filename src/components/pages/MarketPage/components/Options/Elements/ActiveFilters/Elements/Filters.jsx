import React from "react";
import styled from "styled-components";

import GeneralGroup from "./GeneralGroup";
import PriceGroup from "./PriceGroup";

const Filters = ({
  state: { count, status, price, chains, collections },
  dispatch,
}) => {
  return (
    <Styled>
      {count === 0 && (
        <CointainerX>
          <span>You have not selected any filters</span>
        </CointainerX>
      )}
      <GeneralGroup
        context={status}
        contextName="status"
        label="Status"
        dispatch={dispatch}
      />
      <GeneralGroup
        context={chains}
        contextName="chains"
        label="Chains"
        dispatch={dispatch}
      />
      <GeneralGroup
        context={collections}
        contextName="collections"
        label="Collectionssssssz"
        dispatch={dispatch}
      />
      <PriceGroup
        context={price}
        contextName="price"
        label="Price"
        dispatch={dispatch}
      />
    </Styled>
  );
};

const CointainerX = styled.div`
  height: 100%;

  display: flex;
  align-items: center;

  font-size: 1.6rem;
  font-weight: 600;
  text-align: center;
`;

const Styled = styled.div`
  height: 100%;
  margin: 2rem;
  padding-right: 1rem;

  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0.7rem;
  }

  &::-webkit-scrollbar-track {
    background-color: none;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 100px;
    border-left: 0;
    border-right: 0;
    background-color: var(--color-scrollbar);
  }

  color: var(--color-black);
`;

export default Filters;
