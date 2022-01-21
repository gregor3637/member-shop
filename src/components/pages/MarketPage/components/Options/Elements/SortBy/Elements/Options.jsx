import React from "react";
import styled from "styled-components";

const Options = ({ setSelected, onClickHandle }) => {
  const optionHandle = (value) => {
    setSelected(value);
    onClickHandle();
  };

  return (
    <UlX>
      <LiX
        style={{ margin: "0" }}
        onClick={() => optionHandle("Recently Sold")}
      >
        <span>Recently Sold</span>
      </LiX>
      <LiX onClick={() => optionHandle("Oldest")}>
        <span>Oldest</span>
      </LiX>
      <LiX onClick={() => optionHandle("Price: High to Low")}>
        <span>Price: High to Low</span>
      </LiX>
      <LiX onClick={() => optionHandle("Price: Low to High")}>
        <span>Price: Low to High</span>
      </LiX>
    </UlX>
  );
};

const UlX = styled.ul`
  padding: 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;

  color: var(--color-black);
`;

const LiX = styled.li`
  border-radius: 1rem;
  background-color: var(--marketplace-button-grey-light);

  padding: 1rem 1.4rem;
  margin-top: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: var(--marketplace-button-background);
  }
`;
export default Options;
