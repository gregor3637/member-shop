import React from "react";
import styled from "styled-components";

import { capitalizeFirstLetter } from "../../../../../../../../../helpers/CapitalizeFirstLetter";
import HistoryIcon from "../Icon/HistoryIcon";

const annotationByHistoryType = {
  Mint: (data) => "on: " + data.date,
  Transfer: (data) => "to: " + data.to.name,
  Sale: (data) => "to: " + data.to.name,
  Bid: (data) => "from: " + data.from.name,
  BidCancel: (data) => "from: " + data.from,
  List: (data) => "on: " + data.date,
};

const HistoryButton = ({ data, onClick, className: version }) => {
  return (
    <ButtonX className={version} onClick={onClick}>
      <SvgWrapperX>
        <HistoryIcon historyEvent={data.type} />
      </SvgWrapperX>
      <InfoX>
        <TopX>
          <LabelX>{capitalizeFirstLetter(data.type)}</LabelX>
          {data.cost && (
            <PriceX>
              <span>{data.cost.amount}</span>
              <span>{data.cost.currency}</span>
            </PriceX>
          )}
        </TopX>

        <BottomX>
          <AnnotationX>{annotationByHistoryType[data.type](data)}</AnnotationX>
          {data.cost && (
            <PriceUSDX>
              <span>{`${data.cost.usdEquivalent} USD`}</span>
            </PriceUSDX>
          )}
        </BottomX>
      </InfoX>
    </ButtonX>
  );
};

const SvgWrapperX = styled.div`
  z-index: 5;

  width: 4rem;
  height: 4rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background: var(--color-white);

  border-radius: 1rem;
  border: 1px solid var(--color-border);

  &.open {
    background: var(--button-color-blue);
    border: 1px solid var(--color-none);

    svg {
      color: var(--color-white);
    }
  }
`;

const LabelX = styled.div`
  font-weight: 700;
  font-size: 1.6rem;
`;

const AnnotationX = styled.div`
  font-size: 1rem;
`;

const BottomX = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PriceUSDX = styled.div`
  font-size: 1rem;
`;

const PriceX = styled.div`
  display: flex;
  justify-content: flex-end;

  span:first-of-type {
    margin-right: 0.5rem;
  }
`;

const TopX = styled.div`
  display: flex;
  justify-content: space-between;
`;

const InfoX = styled.div`
  /* background: var(--test-r); */
  flex: 1;
  display: flex;
  flex-direction: column;

  & > div {
    margin-right: 1rem;
  }
`;

const ButtonX = styled.button`
  position: relative;

  height: 6rem;
  width: 100%;
  padding: 0 1rem;
  background: var(--color-none);

  display: flex;
  gap: 1rem;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  border: none;
  border-radius: var(--market-filters--button-dropdown--border-radius);
  cursor: pointer;

  &:hover {
    background: var(--market-filters--button-dropdown--bgColor-hover);
  }

  &:before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 3rem;
    width: 0;
    height: 3rem;
    border: 1px solid #aaaaaa;
    border-style: solid;
  }

  &:after {
    content: "";
    display: block;
    position: absolute;
    top: 3rem;
    left: 3rem;
    width: 0;
    height: calc(100% - 3rem);
    border: 1px solid #aaaaaa;
    border-style: solid;
  }
`;

export default HistoryButton;
