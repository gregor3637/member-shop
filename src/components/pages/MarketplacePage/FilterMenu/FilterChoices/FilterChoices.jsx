import React, { useState } from "react";
import styled from "styled-components";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";

import CollapsibleFilter from "./CollapsibleFilter/CollapsibleFilter";
import Price from "./Filters/Price/Price";
import SaleType from "./Filters/Status/SaleType";
import Options from "./Filters/Options/Options";
import Category from "./Filters/Category/Category";
import Blockchain from "./Filters/Blockchain/Blockchain";
import CollectionsNew from "./Filters/Collections/Collections";

const menus = {
  Options: <Options />,
  Collections: <CollectionsNew />,
  Blockchain: <Blockchain />,
  Category: <Category />,
  "Sale Type": <SaleType />,
  Price: <Price />,
};

const Filters = (props) => {
  const [openMenuLabel, setOpenMenuLabel] = useState("");

  const clickHandler = (label) => {
    setOpenMenuLabel(openMenuLabel !== label ? label : "");
  };

  return (
    <Wrapper>
      <ScrollbarX forceVisible="y" autoHide={false}>
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
      </ScrollbarX>
    </Wrapper>
  );
};

const ScrollbarX = styled(SimpleBar)`
  height: 100%;
  padding: 1rem;
`;

const Wrapper = styled.div`
  height: 100%;
`;

export default Filters;
