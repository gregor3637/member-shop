import React, { useState } from "react";
import styled from "styled-components";
import TooltipSticker from "../TooltipSticker";
import Favorite from "../Favorite";

import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PanoramaOutlinedIcon from "@material-ui/icons/PanoramaOutlined";

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

  let favoriteClass =
    "sticker image-favorites" + (isFavorite ? " favorite" : "");

  return (
    // <ShopCardImageStyled width={props.width} height={props.height}>
    <ShopCardImageStyled>
      <img src={props.imgUrl} alt="" />
      <div className="sticker image-type">
        <TooltipSticker message={type}>
          <div className="center">{typeIcon}</div>
        </TooltipSticker>
      </div>
      <div className={favoriteClass} onClick={onClickHandler}>
        <TooltipSticker message="Favorites">
          <Favorite className={"center"} count={favoriteCount} />
        </TooltipSticker>
      </div>
    </ShopCardImageStyled>
  );
};

const ShopCardImageStyled = styled.div`
  /* width: ${(props) => props.width};
  height: ${(props) => props.height}; */
  position: relative;
  text-align: center;
  background-color: red;
  width: 100%;
  height: 70%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .favorite {
    svg {
      color: red;
    }
  }

  .sticker {
    display: flex;
    position: absolute;
  }

  .center {
    display: flex;
  }

  .image-type {
    left: 1rem;
    top: 1rem;
  }

  .image-favorites {
    right: 1rem;
    top: 1rem;

    &:hover {
      svg {
        color: red;
      }
    }
  }
`;

export default ShopCardImage;
