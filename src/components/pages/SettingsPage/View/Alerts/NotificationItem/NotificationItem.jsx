import React from "react";
import styled from "styled-components";
import SwitchDynamic from "../../../../../General/Switch/SwitchDynamic";

const NotificationItem = ({
  title,
  description,
  onClick,
  options,
  selected,
}) => {
  return (
    <Wrapper>
      <InfoX>
        <span>{title}</span>
        <p>{description}</p>
      </InfoX>

      <ControlX>
        <SwitchDynamic
          selected={selected}
          options={options}
          onSelection={(v) => onClick(v)}
        />
      </ControlX>
    </Wrapper>
  );
};

const ControlX = styled.div``;
const InfoX = styled.div`
  font-size: 1.4rem;

  span {
    font-weight: 600;
  }
  p {
    display: block;

    font-weight: 500;
    color: var(--color-grey40);
  }
`;

const Wrapper = styled.div`
  /* background-color: green; */
  padding-bottom: 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  border-bottom: 1px solid var(--color-grey40);
`;

export default NotificationItem;
