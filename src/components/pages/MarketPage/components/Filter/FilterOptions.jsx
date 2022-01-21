import React from "react";
import styled from "styled-components";

import CollapsibleFilter from "./CollapsibleFilter";
import Price from "./Price/Price";
import Status from "./Status/Status";
import Chain from "./Chain/Chain";
import Collections from "./Collections/Collections";

const FilterOptions = () => {
  return (
    <Styled>
      <CollapsibleFilterX label="price">
        <Price />
      </CollapsibleFilterX>
      <CollapsibleFilterX label="status">
        <Status />
      </CollapsibleFilterX>
      <CollapsibleFilterX label="chainsss">
        <Chain />
      </CollapsibleFilterX>
      <CollapsibleFilterX isOpen={true} label="collectionssss">
        <Collections />
      </CollapsibleFilterX>
    </Styled>
  );
};

const CollapsibleFilterX = styled(CollapsibleFilter)``;

const Styled = styled.div`
  margin: 1rem;
  padding: 0 0.5rem;
  height: calc(100% - 2rem); //-2rem because of margin
  width: 22rem;
  width: 25rem;
  width: 30rem;

  overflow-y: scroll;

  ${CollapsibleFilterX}:not(:first-child) {
    border-top: 1px solid var(--color-border);
  }

  ${CollapsibleFilterX}:last-child .open {
    padding-bottom: 0;
  }

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
`;

export default FilterOptions;
