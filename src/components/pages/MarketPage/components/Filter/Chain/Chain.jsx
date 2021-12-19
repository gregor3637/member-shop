import React, { useCallback } from "react";
import styled from "styled-components";

import EthereumImg from "../../../../../../img/currency/Ether.png";
import KlaytnImg from "../../../../../../img/currency/klaytn.png";
import PolygonImg from "../../../../../../img/currency/polygon.svg";

import useMarketFilters from "../../../../../../hooks/Market/useMarketFilters";
import useToggle from "../../../../../../hooks/useToggle";
import DropdownArrow from "../../../../../General/Arrow/DropdownArrow";
import Checkmark from "../../../../../General/Checkmark/Checkmark";

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

const Chain = ({ label, style }) => {
  const { state, dispatch: updateMarkedFilters } = useMarketFilters();
  const [isOpen, toggleIsOpen] = useToggle();
  const buttonClickHandle = useCallback(
    (event) => {
      updateMarkedFilters({
        type: "chains",
        value: event.currentTarget.dataset.label,
      });
    },
    [updateMarkedFilters]
  );

  const selectedChains = state["chains"];

  const buttons = Object.keys(chainsData).map((key) => {
    return (
      <ButtonX
        key={key}
        data-label={key}
        onClick={buttonClickHandle}
        className={selectedChains.includes(key) ? "active" : ""}
      >
        <CircleHolderX>
          {chainsData[key].img}
          <Checkmark />
        </CircleHolderX>

        <span>{key}</span>
      </ButtonX>
    );
  });

  return (
    <Styled style={style}>
      <SpanX onClick={toggleIsOpen}>
        <div>{label}</div>
        <DropdownArrowX isOpen={isOpen} />
      </SpanX>
      <MenuOptionsContainerX className={isOpen ? "open" : ""}>
        <div>{buttons}</div>
      </MenuOptionsContainerX>
    </Styled>
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
  transform: scale(0.9);

  img {
    height: 100%;
    width: 100%;
    background-color: var(--color-white);
  }

  &:hover {
    transform: scale(1);
  }
`;

const ButtonX = styled.button`
  padding-right: 1rem;
  margin: 0 auto 0.5rem 0;

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

    & > div {
      border: 1px solid var(--color-border);
    }
  }
`;

const DropdownArrowX = styled(DropdownArrow)`
  padding-right: 1rem;
`;

const MenuOptionsContainerX = styled.div`
  display: block;
  height: 0;

  padding-bottom: 0.5rem;
  overflow: hidden;

  border-bottom: 1px solid var(--color-border);

  &.open {
    padding-bottom: 3rem;
    height: auto;
    overflow: visible;
    border-bottom: none;
  }

  & > div {
    margin-top: 1rem;

    display: flex;
    flex-direction: column;
  }
`;

const SpanX = styled.span`
  padding-bottom: 0.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  cursor: pointer;

  & > div {
    font-size: 1.6rem;
    font-weight: 400;
  }
`;

const Styled = styled.div`
  width: 100%;

  border-top: 1px solid var(--color-border);
  padding-top: 1rem;
`;

export default Chain;
