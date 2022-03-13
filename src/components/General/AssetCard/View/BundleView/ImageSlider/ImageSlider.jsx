import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Slider from "react-slick";

import ImageView from "../ImageView/ImageView";

const ImageSlider = ({ bundleItems, page, setPage, setInTransition }) => {
  const sliderRef = useRef();

  useEffect(() => {
    sliderRef.current.slickGoTo(page);
  }, [page]);

  const afterChange = (index) => {
    setInTransition(false);
    setPage(index);
  };

  const beforeChange = (prev, next) => {
    setInTransition(true);
  };

  return (
    <Wrapper>
      <Slider
        ref={sliderRef}
        dots={true}
        arrows={false}
        infinite={false}
        speed={1000} //transition must be longer than 'transition animation' so we dont get glitches
        lazyLoad={"ondemand"}
        fade={false}
        beforeChange={beforeChange}
        afterChange={afterChange}
      >
        {bundleItems.map((el) => (
          <ImageView key={el.id} imgSrc={el.general.src} />
        ))}
      </Slider>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border-radius: 2rem;
  overflow: hidden;
  border: 1px solid var(--color-border);

  height: 100%;
  width: 100%;

  .slick-slider,
  .slick-list,
  .slick-track {
    height: 100%;
  }

  .slick-slide > div {
    height: 100%;
  }

  .slick-current .slick-image {
    animation: fade-in 1s;
    opacity: 1;
  }
`;

export default ImageSlider;
