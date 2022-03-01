import React from "react";
import styled from "styled-components";
import useToggle from "../../../../../../hooks/useToggle";

import Switch from "../../../../../General/Buttons/Switch/Switch";

const SwitchController = (props) => {
  const [isSwitched, toggleIsSwitched] = useToggle(true);

  return (
    <Wrapper onClick={toggleIsSwitched}>
      <Switch isChecked={isSwitched} />
      <span>Liked Only</span>
    </Wrapper>
  );
};

const Wrapper = styled.button`
  height: 3.6rem;
  padding: 0 1.6rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  background-color: var(--color-white);
  border: 1px solid var(--color-border);
  border-radius: var(--market-itemsWrapper-header-elements-border-radius);

  span {
    font-weight: 600;
    font-size: 1.4rem;
  }

  cursor: pointer;
  
`;

export default SwitchController;
