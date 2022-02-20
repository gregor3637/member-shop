import React, { useCallback } from "react";
import styled from "styled-components";

import useMarketFiltersContext from "../../../../../../../hooks/Market/FiltersContext/useMarketFiltersContext";
import ToggleButton from "../../../../CommonElements/ToggleButton/ToggleButton";

const AssetType = (props) => {
  const {
    state: { assetType },
    dispatch: updateMarkedFilters,
  } = useMarketFiltersContext();
  const buttonClickHandle = useCallback(
    (event) => {
      updateMarkedFilters({
        type: "assetType",
        value: event.currentTarget.dataset.label,
      });
    },
    [updateMarkedFilters]
  );

  const resetHandle = () => {
    updateMarkedFilters({ type: "reset", state: "assetType" });
  };

  const assetTypeKeys = Object.keys(assetType);
  const isOptionFromStateSelected = assetTypeKeys.find((x) => assetType[x]);

  return (
    <Styled>
      <ToggleButton
        isActive={!isOptionFromStateSelected}
        dataLabel={"All Items"}
        onClick={resetHandle}
      >
        All Items
      </ToggleButton>
      {Object.keys(assetType).map((key) => {
        return (
          <ToggleButton
            key={key}
            isActive={assetType[key]}
            dataLabel={key}
            onClick={buttonClickHandle}
          >
            {key}
          </ToggleButton>
        );
      })}
    </Styled>
  );
};

const Styled = styled.div`
  padding: 2rem 0;

  display: flex;
  flex-direction: column;
  grid-gap: 1rem;
`;

export default AssetType;
