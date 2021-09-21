import React from "react";
import styled from "styled-components";

const CarouselItem = ({ current, index }) => {
  return (
    <CarouselItemStyled key={current.id}>
      <div className="out">
        <div className="card">
          <img
            className="rounded-circle"
            alt={"users here"}
            src={`https://source.unsplash.com/random/${current.id}`}
            height={56}
            width={56}
          />
          <div className="card-body">
            <h5 className="card-title">{current.username}</h5>
            <small className="card-text text-sm-center text-muted">
              In your contacts
            </small>
            <br />
            <button className="btn btn-sm follow btn-primary">
              {index} + Follow
            </button>
          </div>
        </div>
      </div>
    </CarouselItemStyled>
  );
};

const CarouselItemStyled = styled.div`
  background-color: olivedrab;
  display: flex;
  align-items: center;
  justify-content: center;

  margin-left: 2rem;
`;

export default CarouselItem;
