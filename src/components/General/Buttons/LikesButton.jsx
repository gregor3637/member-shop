import React, { useEffect, useState } from "react";
import styled from "styled-components";

import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

import { printify } from "../../../helpers/PrintifyNumbers";

const SpanX = styled.span`
  font-family: var(--font-countdownTimer), var(--font-countdownTimerSecond);
`;

const LikesButton = (props) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [favoriteCount, setFavoriteCount] = useState(+props.favorite);
  const [pritifiedFavorite, setPritifiedFavorite] = useState(123);

  useEffect(() => {
    setPritifiedFavorite(printify(favoriteCount));
  }, [favoriteCount]);

  const onClickHandler = () => {
    setFavoriteCount((prev) => prev + (isFavorite ? -1 : 1));
    setIsFavorite(!isFavorite);
  };

  return (
    <Styled className={props.className} onClick={onClickHandler}>
      <FavoriteBorderIcon className={!isFavorite ? "" : "clicked"} />
      <SpanX>{pritifiedFavorite}</SpanX>
    </Styled>
  );
};

const Styled = styled.div`
  display: flex;

  color: black;

  span {
    padding-left: 0.5rem;
  }

  svg {
    color: var(--color-white);
    transition: all 0.2s ease;

    &.clicked {
      color: var(--color-red-pale);
    }
  }

  &:hover {
    svg {
      color: red;
    }
  }
`;

export default LikesButton;
