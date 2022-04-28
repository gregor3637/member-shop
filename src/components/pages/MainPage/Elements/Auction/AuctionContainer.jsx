import React, { useState } from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";

import AuctionItem from "./AuctionItem";
import Slider from "react-slick";

function Arrow(props) {
  let className = props.type === "next" ? "nextArrow" : "prevArrow";
  className += " arrow";
  const char =
    props.type === "next" ? (
      <FontAwesomeIcon icon={faCaretRight} className="icon"></FontAwesomeIcon>
    ) : (
      <FontAwesomeIcon icon={faCaretLeft} className="icon"></FontAwesomeIcon>
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

const AuctionContainer = ({ items }) => {
  const [count, setCount] = useState(3);

  let sliderItems = items.map((item) => (
    <AuctionItem key={item.key} {...item} />
  ));

  if (sliderItems.length < count) {
    const emptyItems = new Array(count - sliderItems.length)
      .fill(0)
      .map((_, id) => <div key={id}></div>);

    sliderItems = sliderItems.concat(emptyItems);
  }

  // eslint-disable-next-line
  var settings = {
    // fade: true,
    responsive: [
      {
        breakpoint: 2000,
        settings: {
          // slidesToShow: 3,
          slidesToShow: 1,
          onReInit: () => {
            setCount(3);
          },
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: Math.min(2, sliderItems.length),
          onReInit: () => {
            setCount(2);
          },
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          onReInit: () => {
            setCount(1);
          },
        },
      },
    ],
  };

  const settingsForFade = {
    dots: false,
    infinite: false,
    slidesToShow: 1,
    useCSS: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    speed: 1000,
    lazyLoad: "ondemand",
  };

  return (
    <Wrapper>
      <Slider
        nextArrow={<Arrow type="next" />}
        prevArrow={<Arrow type="prev" />}
        dots={false}
        infinite={true}
        // slidesToScroll={1}
        // variableWidth="500px"
        {...settingsForFade}
      >
        {sliderItems}
      </Slider>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-family: sans-serif;
  position: relative;

  .slick-dots {
    bottom: -3rem;
  }

  .arrow {
    position: absolute;
    top: 55%;
    z-index: 100;

    height: 5rem;
    width: 5rem;

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
  }

  .nextArrow {
    right: -1.5rem;
    svg {
      margin-right: -0.6rem;
    }

    &:disabled {
      background: red;
    }
  }

  .prevArrow {
    left: -1.5rem;
    svg {
      margin-left: -0.6rem;
    }

    &:disabled {
      background: red;
    }
  }

  .slick-current {
    .zzzzzzzzzzzzzzzzz {
      animation: fade-in 1s;
      opacity: 1;
    }
  }
`;

export default AuctionContainer;
