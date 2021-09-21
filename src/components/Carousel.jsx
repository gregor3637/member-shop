import React, { useEffect, useState } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "styled-components";
import CarouselItem from "./CarouselItem";
import ShopItemCountdown from "./Shop/ShopItemCountdown";

const Carousel = (props) => {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setSuggestions(data);
      });
  }, []);

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 3,
  };

  return (
    <CarouselStyled>
      {suggestions.length === 0 ? (
        <div>Loading...</div>
      ) : (
        <Slider {...settings}>
          {suggestions.map((current, index) => (
            // <CarouselItem current={current} index={index} />
            <ShopItemCountdown  key={current.id}/>
          ))}
        </Slider>
      )}
    </CarouselStyled>
  );
};

const CarouselStyled = styled.div`
  background-color: green;
  z-index: 5;
  width: 100%;
  height: 100%;
  padding: 40px;

  /* display: flex;
  flex-direction: column;
  justify-content: center; */

  .card {
    background-color: red;
  }
`;

export default Carousel;
