import React from "react";
import styled from "styled-components";

const BundleItem = ({ itemData, onClick, index, className: version }) => {
  return (
    <Wrapper
      className={version}
      onClick={() => {
        onClick(itemData.general.src);
      }}
    >
      {/* <span>{index}</span> */}
      <img src={itemData.general.src} alt="" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: var(--test-r);
  color: white;

  height: 8rem;
  width: 8rem;
  flex-basis: 8rem;
  flex-shrink: 0;

  border-radius: 0.5rem;
  overflow: hidden;

  cursor: pointer;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

export default BundleItem;
