import React from "react";
import styled from "styled-components";

import Switch from "../../../../../General/Buttons/Switch/Switch";
import StarsRoundedIcon from "@mui/icons-material/StarsRounded";
import useMarketPreferenceContext from "../../../../../../hooks/Market/PreferenceContext/useMarketPreferenceContext";

const Favorites = () => {
  const {
    state: { showFavoritesOnly },
    dispatch,
  } = useMarketPreferenceContext();

  return (
    <Wrapper
      onClick={() =>
        dispatch({ type: "showFavoritesOnly", value: !showFavoritesOnly })
      }
    >
      <Switch isChecked={showFavoritesOnly} />
      <span>Liked Only</span>
      <IconViewX>
        <StarsRoundedIcon />
      </IconViewX>
    </Wrapper>
  );
};

const IconViewX = styled.div`
  display: flex;

  svg {
    transform: scale(1.8);
    color: var(--color-grey50);
  }
`;

const Wrapper = styled.button`
  height: 3.6rem;
  padding: 0 1.6rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  background-color: var(--color-white);
  border: 1px solid var(--color-border);
  border-radius: var(--market-itemsWrapper-header-elements-border-radius);

  span {
    font-weight: 600;
    font-size: 1.4rem;
  }

  cursor: pointer;

  ${IconViewX} {
    display: none;
  }

  @media (max-width: 1360px) {
    & > span {
      display: none;
    }

    ${IconViewX} {
      display: flex;
    }
  }
`;

export default Favorites;
