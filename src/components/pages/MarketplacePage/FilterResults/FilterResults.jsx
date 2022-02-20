import React, { useState } from "react";
import styled from "styled-components";

import AssetsView from "./AssetsView/AssetsView";
import PreferenceSettings from "./PreferenceSettings/PreferenceSettings";
import { PreferenceContextProvider } from "../../../../hooks/Market/PreferenceContext/PreferenceContext";
import AssetsViewTable from "./AssetsViewTable/AssetsViewTable";

const FilterResults = () => {
  const [testComponent, setTestComponent] = useState(null);
  return (
    <WrapperX>
      <PreferenceContextProvider>
        <PreferenceSettings />
        {/* <AssetsView /> */}
        <div>{testComponent}</div>
        <AssetsViewTable setTestComponent={setTestComponent} />
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
