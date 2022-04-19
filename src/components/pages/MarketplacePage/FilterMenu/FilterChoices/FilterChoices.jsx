import React, { useState } from "react";
import styled from "styled-components";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";

import Drawer from "../../../../General/Drawer/Drawer";
import filtersData from "../../../../../store/Marketplace/Filters/FiltersData";

const Filters = (props) => {
  const [openMenuLabel, setOpenMenuLabel] = useState("");

  const clickHandler = (label) => {
    setOpenMenuLabel(openMenuLabel !== label ? label : "");
  };

  return (
    <Wrapper>
      <ScrollbarX forceVisible="y" autoHide={true}>
        {Object.keys(filtersData).map((name) => {
          return (
            <Drawer
              label={name}
              icon={filtersData[name].filterIcon}
              key={name}
              onClick={clickHandler}
              isOpen={name === openMenuLabel}
            >
              {filtersData[name].filterMenuComponent}
            </Drawer>
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
