import React, { useState } from "react";
import styled from "styled-components";

import AssetsView from "./AssetsView/AssetsView";
import PreferenceSettings from "./PreferenceSettings/PreferenceSettings";
import useOnScrollHandler from "../../../../hooks/useOnScrollHandler";
import { PreferenceContextProvider } from "../../../../store/Marketplace/Preferences/PreferenceContext";

const FilterResults = () => {
  const [isLargeDisplay, setIsLargeDisplay] = useState(true);
  const [isScrollingDown] = useOnScrollHandler(true);

  return (
    <WrapperX>
      <PreferenceContextProvider>
        <PreferenceSettings
          version={isScrollingDown ? "moved-down" : "moving-up"}
          isLargeDisplay={isLargeDisplay}
          setIsLargeDisplay={setIsLargeDisplay}
        />
        <AssetsView />
      </PreferenceContextProvider>
    </WrapperX>
  );
};

const WrapperX = styled.div`
  background: var(--color-white);
  flex: 1;
  height: 100%;

  overflow: clip;
  display: flex;
  flex-direction: column;

  border-radius: var(--market-filters--outerWrapper-radius);
`;

export default FilterResults;
