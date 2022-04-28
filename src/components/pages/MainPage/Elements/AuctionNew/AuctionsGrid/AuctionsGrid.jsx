import React from "react";
import styled from "styled-components";
import Slider from "react-slick";

import VerifiedAccount from "../../../../../../img/VerifiedAccount";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";

function Arrow(props) {
  let className = props.type === "next" ? "nextArrow" : "prevArrow";
  className += " arrow";
  const char =
    props.type === "next" ? (
      <ArrowForwardIosRoundedIcon />
    ) : (
      <ArrowBackIosRoundedIcon />
    );

  const isDisabled =
    (props.type === "next" && props.currentSlide === props.slideCount - 1) ||
    (props.type === "prev" && props.currentSlide === 0);

  return (
    <button className={className} onClick={props.onClick} disabled={isDisabled}>
      {char}
    </button>
  );
}

const AuctionsGrid = ({ setSelected, itemsData }) => {
  return (
    <Wrapper>
      <Slider
        nextArrow={<Arrow type="next" />}
        prevArrow={<Arrow type="prev" />}
        infinite={false}
        centerPadding={"60px"}
        slidesToShow={1}
        speed={500}
        rows={2}
        slidesPerRow={4}
      >
        {itemsData.map((data, i) => (
          <AuctionItemContainerX key={i} className="auction-item-container">
            <ImageContainerX onClick={() => setSelected(data)}>
              <img src={data.general.src} alt="" />
              <ProjectNameInfoX>
                <span>{data.project.name} </span>
                {data.project.isVerified ? <VerifiedAccount /> : ""}
              </ProjectNameInfoX>
            </ImageContainerX>
          </AuctionItemContainerX>
        ))}
      </Slider>
    </Wrapper>
  );
};

const ProjectNameInfoX = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;

  padding: 0 0.5rem;
  margin: 0.5rem;

  display: flex;
  flex: 1;
  width: 100%;
  width: max-content;

  background: var(--color-white);
  border-radius: 1rem;

  font-size: 1.2rem;
  font-weight: 500;

  svg {
    width: 1.5rem;
    fill: var(--color-blue);
  }
`;

const AuctionItemContainerX = styled.div`
  /* padding: 0 5px; */
  height: 10rem;
  overflow: hidden;
`;

const ImageContainerX = styled.div`
  position: relative;

  img {
    width: 100%;
    height: 100%;
    height: 23rem;
    height: 23rem;
    border-radius: 1rem;
    object-fit: cover;
  }
`;

const Wrapper = styled.div`
  width: 65%;

  .slick-slide {
    box-sizing: border-box;

    & > div {
      height: 100%;
    }

    .auction-item-container {
      padding-left: 5px;
      height: 100%;
    }
  }

  .arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 100;

    height: 3rem;
    width: 3rem;

    background-color: white;
    border: 1px solid var(--border-color);
    border-radius: 50%;

    color: #000000;
    font-size: 2.5rem;
    font-weight: bold;

    cursor: pointer;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &:disabled {
      color: var(--color-grey20);
      border-color: var(--color-grey20);
    }
  }

  .nextArrow {
    right: -1.6rem;
    svg {
      margin-right: -0.3rem;
    }
  }

  .prevArrow {
    left: -1.1rem;
    svg {
      margin-left: -0.3rem;
    }
  }
`;

export default AuctionsGrid;
