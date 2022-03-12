import React from "react";
import styled from "styled-components";

const ItemView = ({ imgSrc }) => {
  return (
    <Wrapper>
      <InnerX>
        <div>
          <img
            // src="https://static.turbosquid.com/Preview/2019/11/16__17_52_47/CoverImage.jpg9988E0CD-074F-4988-BD5A-8A75FB46C8F3Large.jpg"
            // src="https://img.rarible.com/prod/image/upload/t_big/prod-itemImages/0x26fd3e176c260e7fef019966622419dabfebb299:147/b2947afd"
            // src="https://media.sketchfab.com/models/86fd6cec31e347289571a039852c02ed/thumbnails/d5826ebcceac4a36a2e2c1382506ab39/5da9b4d3987f4c7396a4ffe179a149bf.jpeg"
            src={imgSrc}
            alt=""
          />
        </div>
      </InnerX>
    </Wrapper>
  );
};

const InnerX = styled.div`
  width: 100%;
  height: 100%;

  div {
    max-width: 100%; //---- important
    min-height: 0; //----- important
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      height: auto;
      max-height: 100%;
      max-width: 100%;

      background-color: red;
      border-radius: 1rem;
    }
  }
`;

const Wrapper = styled.div`
  background: var(--color-white);
  flex: 1;
  height: 100%;

  overflow: clip;
  display: flex;
  flex-direction: column;

  border-radius: var(--market-filters--outerWrapper-radius);
`;

export default ItemView;
