import React from "react";
import styled from "styled-components";
import ToggleButton from "./ToggleButton";

const ToggleButtonContainer = ({ isActive, onClick, label }) => {
  return (
    <Styled className={!isActive ? "" : "active"}>
      <ToggleButton onClick={onClick} label={label} />
    </Styled>
  );
};

const Styled = styled.div`
  &.active .filled-button {
    background-color: var(--button-color-blue);
    color: var(--color-white);
  }
`;

export default ToggleButtonContainer;
