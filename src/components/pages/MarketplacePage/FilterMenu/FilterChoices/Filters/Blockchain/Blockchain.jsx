import React, { useCallback } from "react";
import styled from "styled-components";

import EthereumImg from "../../../../../../../img/currency/Ether.png";
import KlaytnImg from "../../../../../../../img/currency/klaytn.png";
import PolygonImg from "../../../../../../../img/currency/polygon.svg";

import useMarketFiltersContext from "../../../../../../../hooks/Market/FiltersContext/useMarketFiltersContext";
import ToggleButton from "../../../../CommonElements/ToggleButton/ToggleButton";

const chainsData = {
  Ethereum: {
    img: <img src={EthereumImg} alt="" />,
  },
  Polygon: {
    img: <img src={PolygonImg} alt="" />,
  },
  Klaytn: {
    img: <img src={KlaytnImg} alt="" />,
  },
};

const Blockchain = () => {
  const {
    state: { blockchain },
    dispatch: updateMarkedFilters,
  } = useMarketFiltersContext();
  const handleClick = useCallback(
    (event) => {
      updateMarkedFilters({
        type: "blockchain",
        value: event.currentTarget.dataset.label,
      });
    },
    [updateMarkedFilters]
  );

  return (
    <Wrapper>
      {Object.keys(blockchain).map((key) => {
        return (
          <ToggleButton
            key={key}
            isActive={blockchain[key]}
            dataLabel={key}
            onClick={handleClick}
          >
            <ButtonContentX>
              <CircleHolderX>{chainsData[key].img}</CircleHolderX>
              <span>{key}</span>
            </ButtonContentX>
          </ToggleButton>
        );
      })}
    </Wrapper>
  );
};

const CircleHolderX = styled.div`
  height: 30px;
  width: 30px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--color-white);
  border: 1px solid var(--color-border);
  border-radius: 50%;
  overflow: hidden;

  img {
    height: 100%;
    width: 100%;
    background-color: var(--color-white);
  }
`;

const ButtonContentX = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  border: none;
  background-color: var(--color-none);
  cursor: pointer;

  span {
    margin-left: 0.8rem;

    display: flex;
    align-items: center;

    font-size: 1.4rem;
    font-weight: 400;
  }

  &.active {
    img {
      display: none;
    }
  }
`;

const Wrapper = styled.div`
  padding: 2rem 0;

  display: flex;
  flex-direction: column;
  grid-gap: 1rem;
`;

export default Blockchain;
