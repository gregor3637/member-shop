import React from "react";
import styled from "styled-components";

const BelowWidth = ({
  currency,
  dailyChange,
  weeklyChange,
  floorPrice,
  owners,
  items,
}) => {
  return (
    <Wrapper>
      <DayX>{dailyChange} %</DayX>
      <WeekX>{weeklyChange} %</WeekX>
      <FloorPriceX>{floorPrice}</FloorPriceX>
      <OwnersX>{owners}</OwnersX>
      <ItemsX>{items}</ItemsX>
    </Wrapper>
  );
};

const ItemsX = styled.div`
  background: var(--test-y);

  display: flex;
  justify-content: flex-end;
`;

const OwnersX = styled.div`
  background: var(--test-r);

  display: flex;
  justify-content: flex-end;
`;

const FloorPriceX = styled.div`
  background: var(--test-y);

  display: flex;
  justify-content: flex-end;
`;

const WeekX = styled.div`
  background: var(--test-r);

  display: flex;
  justify-content: flex-end;
`;

const DayX = styled.div`
  background: var(--test-y);

  display: flex;
  justify-content: flex-end;
`;

const Wrapper = styled.div`
  display: none;

  @media (max-width: 1350px) {
    display: block;
  }
`;

export default BelowWidth;
