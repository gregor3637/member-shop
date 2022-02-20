import React, { useState } from "react";
import styled from "styled-components";

import LoadingSpinner from "../../../../LoadingSpinner/LoadingSpinner";

const ImageView = ({ imgSrc }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const cls = "slick-image " + (!isImageLoaded ? "loading-img" : "");

  return (
    <Wrapper className={cls}>
      {!isImageLoaded && <LoadingSpinnerX />}
      <img src={imgSrc} onLoad={() => setIsImageLoaded(true)} alt="" />
    </Wrapper>
  );
};

const LoadingSpinnerX = styled(LoadingSpinner)`
  position: absolute;
`;

const Wrapper = styled.div`
  opacity: 0;
  animation: fade-out 1s; // animation must not be longer than slick-slide transition so we dont get glitches

  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;

    object-fit: cover;
  }

  &.loading-img {
    img {
      visibility: hidden;
    }
  }
`;

export default ImageView;
