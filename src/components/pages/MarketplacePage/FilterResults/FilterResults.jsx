import React from "react";
import styled from "styled-components";

import AssetsView from "./AssetsView/AssetsView";
import PreferenceSettings from "./PreferenceSettings/PreferenceSettings";
import { PreferenceContextProvider } from "../../../../hooks/Market/PreferenceContext/PreferenceContext";

const FilterResults = () => {

  return (
    <WrapperX>
      <PreferenceContextProvider>
        <PreferenceSettings />
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

  border: 1px solid var(--color-border);
  border-radius: var(--market-filters--outerWrapper-radius);
`;

export default FilterResults;
