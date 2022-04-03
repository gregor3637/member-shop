import React from "react";
import styled from "styled-components";

import VerifiedIcon from "../../../../../../../../img/currency/VerifiedIcon.svg";

const FilteredButton = (props, ref) => {
  const { data, handleElementClick } = props;

  return (
    <Wrapper
      ref={ref}
      key={data.label}
      onClick={() => handleElementClick(data.label)}
    >
      <CircleHolderX>
        <img src={data.imgSrc} alt="" />
      </CircleHolderX>
      <span>{data.label}</span>
      {data.isVerified && (
        <img src={VerifiedIcon} alt="" style={{ width: "2rem" }} />
      )}
    </Wrapper>
  );
};

const CircleHolderX = styled.div`
  height: 30px;
  width: 30px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--color-white);
  border: 1px solid var(--color-border);
  border-radius: 50%;
  overflow: hidden;
  transform: scale(0.9);

  img {
    height: 100%;
    width: 100%;
    background-color: var(--color-white);
  }
`;

const Wrapper = styled.button`
  width: 100%;
  padding-left: 1rem;
  /* background-color: red; */

  display: flex;
  align-items: center;

  background-color: var(--color-none);
  border-radius: var(--market-filters--button-dropdown--border-radius);
  border: none;
  outline: none;
  cursor: pointer;

  span {
    padding: 1.2rem 0.5rem;
  }

  &:hover {
    background-color: var(--market-filters--button-dropdown--bgColor-hover);
  }
`;

export default React.forwardRef(FilteredButton);
