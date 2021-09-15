import React from "react";
import styled from "styled-components";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

const Favorite = (props) => {
  return (
    <>
      <FavoriteStyled>
        {/* <a href="https://www.abv.bg/" target="_blank" rel="noreferrer"> */}
        <div>
          <FavoriteBorderIcon />
          <span>{props.count}</span>
        </div>
        {/* </a> */}
      </FavoriteStyled>
    </>
  );
};

const FavoriteStyled = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;

  user-select: none;

  div {
    display: flex;
    align-items: center;

    span {
      padding-left: 0.5rem;
    }
  }
`;

export default Favorite;
