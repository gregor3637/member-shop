import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";

class CustomSlide extends Component {
  render() {
    const { index, ...props } = this.props;
    return (
      <CStyled>
        <h3>{index}</h3>
      </CStyled>
    );
  }
}

const CStyled = styled.div`
  background-color: red;
  padding: 2rem;
  margin: 1rem;

  text-align: center;
`;

export default class Resizable extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
    };
    return (
      <div style={{padding: "5rem", backgroundColor: 'green'}}>
        <h2> Multiple items </h2>
        <Slider {...settings}>
          <CustomSlide index={1} />
          <CustomSlide index={2} />
          <CustomSlide index={3} />
          <CustomSlide index={4} />
          <CustomSlide index={5} />
          <CustomSlide index={6} />
        </Slider>
      </div>
    );
  }
}
