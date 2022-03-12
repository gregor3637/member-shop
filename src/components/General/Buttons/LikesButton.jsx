import React, { useEffect, useState } from "react";
import styled from "styled-components";

import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { printify } from "../../../helpers/PrintifyNumbers";

const LikesButton = (props) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [favoriteCount, setFavoriteCount] = useState(+props.favorite);
  const [pritifiedFavorite, setPritifiedFavorite] = useState(favoriteCount);

  useEffect(() => {
    setPritifiedFavorite(printify(favoriteCount));
  }, [favoriteCount]);

  const onClickHandler = () => {
    setFavoriteCount((prev) => prev + (isFavorite ? -1 : 1));
    setIsFavorite(!isFavorite);
  };

  return (
    <Wrapper className={props.className} onClick={onClickHandler}>
      <SVGWrapperX>
        <FavoriteBorderOutlinedIcon className={!isFavorite ? "" : "clicked"} />
      </SVGWrapperX>
      <SpanX>{pritifiedFavorite} das</SpanX>
    </Wrapper>
  );
};

const SpanX = styled.span`
  padding-left: 1px;
  font-size: 1.2rem;
  font-family: var(--font-countdownTimer), var(--font-countdownTimerSecond);
`;

const SVGWrapperX = styled.div`
  display: flex;
`;

const Wrapper = styled.button`
  display: flex;
  align-items: center;

  outline: none;
  border: 0;
  background-color: var(--color-none);
  cursor: pointer;

  color: black;

  svg {
    &.clicked {
      fill: var(--color-red-bright);
      stroke: var(--color-none);
    }
  }

  &:hover {
    svg {
      fill: var(--color-red-pale);
      stroke: var(--color-none);
    }
  }
`;

export default LikesButton;
