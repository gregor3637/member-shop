import React from "react";
import styled from "styled-components";

import ChosenButton from "./ChosenButton/ChosenButton";

const Chosen = ({ elements, handleElementClick }) => {
  return (
    <>
      {elements.length > 0 && (
        <Wrapped>
          {elements.map((name) => {
            return (
              <ChosenButton
                key={name}
                name={name}
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
