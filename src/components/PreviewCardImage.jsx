import React, { useState } from "react";
import styled from "styled-components";
import TooltipSticker from "./TooltipSticker";
import Favorite from "./Favorite";

import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PanoramaOutlinedIcon from "@material-ui/icons/PanoramaOutlined";

const PreviewCardImage = (props) => {
  const [favoriteCount, setFavoriteCount] = useState(+props.favorites);
  const [isFavorite, setIsFavorite] = useState(false);
  let viewType = <PanoramaOutlinedIcon />;

  if (props.type === "gif") {
    viewType = <PlayArrowIcon />;
  }

  const onClickHandler = () => {
    setFavoriteCount((prev) => prev + (isFavorite ? -1 : 1));
    setIsFavorite(!isFavorite);
  };

  let favoriteClass =
    "sticker image-favorites" + (isFavorite ? " favorite" : "");

  return (
    <CardViewStyled width={props.width} height={props.height}> 
      <img src={props.imgUrl} alt="" />
      <div className="sticker image-type">
        <TooltipSticker message={props.type}>
          <div className="center">{viewType}</div>
        </TooltipSticker>
      </div>
      <div className={favoriteClass} onClick={onClickHandler}>
        <TooltipSticker message="Favorites">
          <Favorite className={"center"} count={favoriteCount} />
        </TooltipSticker>
      </div>
    </CardViewStyled>
  );
};

const CardViewStyled = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.width};
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
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

export default PreviewCardImage;
