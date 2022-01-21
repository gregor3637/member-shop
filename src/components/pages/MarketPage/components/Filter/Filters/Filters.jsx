import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Chain from "../Chain/Chain";

import CollapsibleFilterNew from "../CollapsibleFilterNew";
import Collections from "../Collections/Collections";
import Price from "../Price/Price";
// import Status from "../Status/Status";
import Status from "../Status";
import Options from "../Options";
import Category from "../Category";
import CollectionsNew from "../Collections/CollectionsNew";

const menus = {
  Options: <Options />,
  Collections: <CollectionsNew />,
  Blockchain: <Chain />,
  Category: <Category />,
  // Collections: <Collections />,
  "Sale Type": <Status />,
  "Price range": <Price />,
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
          <CollapsibleFilterNew
            label={name}
            key={name}
            onClick={clickHandler}
            isOpen={name === openMenuLabel}
          >
            {menus[name]}
          </CollapsibleFilterNew>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;

  margin-left: 1rem;
  margin-right: 0.5rem;
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
    background-color: var(--color-none);
  }

  &:hover {
    &::-webkit-scrollbar-thumb {
      background-color: var(--color-scrollbar);
    }
  }
`;

export default Filters;
