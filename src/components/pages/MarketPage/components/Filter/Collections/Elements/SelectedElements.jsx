import React from "react";
import styled from "styled-components";
import ButtonSelected from "./Buttons/ButtonSelected";

const SelectedElements = ({ selectedCollections, filterDispatcher }) => {
  let selectedElements = selectedCollections.map((name) => {
    return (
      <ButtonSelected
        key={name}
        name={name}
        updateMarkedFilters={filterDispatcher}
        type={"collections"}
      />
    );
  });

  return (
    <>
      {selectedElements.length > 0 && (
        <SelectedButtonsContainerX>
          {selectedElements}
        </SelectedButtonsContainerX>
      )}
    </>
  );
};

const SelectedButtonsContainerX = styled.div`
  display: flex;
  flex-direction: column;

  cursor: pointer;
`;

export default SelectedElements;
