import React, { useState } from "react";
import styled from "styled-components";
import TooltipSticker from "../TooltipSticker";

import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PanoramaOutlinedIcon from "@material-ui/icons/PanoramaOutlined";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

const ShopCardImage = (props) => {
  const [favoriteCount, setFavoriteCount] = useState(+props.favorite);
  const [isFavorite, setIsFavorite] = useState(false);

  let type = props.type || "Img";
  let typeIcon = <PanoramaOutlinedIcon />;

  if (props.type === "gif") {
    typeIcon = <PlayArrowIcon />;
  }

  const onClickHandler = () => {
    setFavoriteCount((prev) => prev + (isFavorite ? -1 : 1));
    setIsFavorite(!isFavorite);
  };

  return (
    <ShopCardImageStyled>
      <img src={props.imgUrl} alt="" />

      <TypeStyled>
        <TooltipSticker content={type}>{typeIcon}</TooltipSticker>
      </TypeStyled>

      <LikedStyled clicked={isFavorite} onClick={onClickHandler}>
        <TooltipSticker content="Favorite">
          <FavoriteBorderIcon />
          <span>{favoriteCount}</span>
        </TooltipSticker>
      </LikedStyled>
    </ShopCardImageStyled>
  );
};

const ShopCardImageStyled = styled.div`
  position: relative;
  text-align: center;
  width: 100%;
  height: 70%;

  img {
    border-radius: 1rem;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const TypeStyled = styled.div`
  position: absolute;
  left: 1rem;
  top: 1rem;

  color: white;

  svg {
    display: flex;
  }
`;

const LikedStyled = styled.div`
  position: absolute;
  right: 1rem;
  top: 1rem;

  color: white;

  span {
    padding-left: 0.5rem;
  }

  svg {
    color: ${(props) => (props.clicked ? "red" : "white")};
  }

  &:hover {
    svg {
      color: red;
    }
  }
`;

export default ShopCardImage;
