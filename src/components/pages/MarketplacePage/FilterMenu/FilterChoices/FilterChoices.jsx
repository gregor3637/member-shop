import React, { useState } from "react";
import styled from "styled-components";

import CollapsibleFilter from "./CollapsibleFilter/CollapsibleFilter";
import Price from "./Filters/Price/Price";
import Status from "./Filters/Status/Status";
import Options from "./Filters/Options/Options";
import Category from "./Filters/Category/Category";
import Blockchain from "./Filters/Blockchain/Blockchain";
import CollectionsNew from "./Filters/Collections/Collections";

const menus = {
  Options: <Options />,
  Collections: <CollectionsNew />,
  Blockchain: <Blockchain />,
  Category: <Category />,
  "Sale Type": <Status />,
  Price: <Price />,
};

const Filters = (props) => {
  const [openMenuLabel, setOpenMenuLabel] = useState("");

  const clickHandler = (label) => {
    setOpenMenuLabel(openMenuLabel !== label ? label : "");
  };

  return (
    <Wrapper>
      {Object.keys(menus).map((name) => {
        return (
          <CollapsibleFilter
            label={name}
            key={name}
            onClick={clickHandler}
            isOpen={name === openMenuLabel}
          >
            {menus[name]}
          </CollapsibleFilter>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;

  margin-left: 1rem;
  margin-right: 0.5rem;
  /* overflow-y: scroll; */

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
    background-color: var(--color-none);
  }

  &:hover {
    &::-webkit-scrollbar-thumb {
      background-color: var(--color-scrollbar);
    }
  }
`;

export default Filters;
