import React, { useState, useEffect } from "react";
import styled from "styled-components";

import useLocalStorage from "../../../../../../../hooks/useLocalStorage";
import StarSVG from "../../../../../../../img/svg/StarSVG";

const Watched = ({ tableProps }) => {
  let id = tableProps.row.original.id;
  // const [favorites, setFavorites] = useLocalStorage("favorites", []);
  const [isSelected, setIsSelected] = useState(() => {
    const favorites = window.localStorage.getItem("favorites");

    let isInLocalStorage = false;

    if (favorites !== null) {
      isInLocalStorage = favorites.indexOf(id) > -1;
    }
    return isInLocalStorage;
  });

  const handleClick = () => {
    setIsSelected((old) => !old);

    const favorites = window.localStorage.getItem("favorites");
    const parsedFavorites = favorites ? JSON.parse(favorites) : [];
    console.log("favorites ", favorites);

    var index = parsedFavorites.indexOf(id);
    const isFavorite = index > -1;
    console.log("isFavorite ", isFavorite);

    if (isFavorite) {
      parsedFavorites.splice(index, 1);
    } else {
      parsedFavorites.push(id);
    }

    localStorage.setItem("favorites", JSON.stringify(parsedFavorites));
  };

  return (
    <Wrapper
      onClick={handleClick}
      className={isSelected ? "favorite-item" : ""}
    >
      {/* {isSelected && <StarRoundedIcon />}
      {!isSelected && <StarBorderRoundedIcon />} */}

      <StarSVG />
      <span>123</span>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* background: var(--test-g); */
  padding: 1rem 0.5rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  text-align: center;
  font-size: 1.4rem;
  cursor: pointer;

  svg {
    margin-right: 0.5rem;
    transform: scale(0.8);
    stroke: var(--color-border);
  }

  &:hover {
    svg {
      fill: var(--color-grey20);
      stroke: var(--color-grey20);
    }
  }

  &.favorite-item {
    svg {
      fill: var(--color-blue);
      stroke: var(--color-blue);
    }
  }
`;

export default Watched;
