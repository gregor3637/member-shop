import React from "react";
import styled from "styled-components";

import ChosenButton from "./ChosenButton";

const Chosen = ({ elements, handleElementClick }) => {
  return (
    <>
      {elements.length > 0 && (
        <Wrapped>
          {elements.map((label) => {
            return (
              <ChosenButton
                key={label}
                label={label}
                handleElementClick={handleElementClick}
              />
            );
          })}
        </Wrapped>
      )}
    </>
  );
};

const Wrapped = styled.div``;

export default Chosen;
