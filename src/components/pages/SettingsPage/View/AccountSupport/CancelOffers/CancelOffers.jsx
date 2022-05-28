import React from "react";
import styled from "styled-components";

import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import FormButton from "../../../../../General/Buttons/FormButton";

const CancelOffers = ({ itemsCount = 1 }) => {
  return (
    <Wrapper>
      {itemsCount === 0 && (
        <p>You currently do not have any listings or offers to cancel.</p>
      )}

      {itemsCount !== 0 && (
        <ButtonLockX>Cancel All listings</ButtonLockX>
      )}

      <NotificationX>
        <AttachMoneyIcon />
        <span>
          This method saves gas compared to cancelling an <br /> individual
          listing or offer.
        </span>
      </NotificationX>
    </Wrapper>
  );
};

const ButtonLockX = styled(FormButton)`
  margin-top: 1rem;

  border: none;
  background: var(--color-blue);

  :disabled {
    cursor: auto;
    background: var(--color-blue-light);
  }
`;

const NotificationX = styled.div`
  width: max-content;
  margin-top: 2rem;
  padding: 1rem 2rem;

  display: flex;
  align-items: center;

  border: 1px solid var(--color-blue-light);
  border-radius: 1rem;
  background: var(--color-blue-pale);

  font-weight: 700;
  font-size: 1.6rem;
  color: var(--color-black);

  svg {
    margin-right: 1rem;
    font-size: 3rem;
    color: var(--color-blue);
  }
`;

const Wrapper = styled.div`
  padding: 2rem 3rem;
  background-color: var(--color-grey10);

  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey50);

  a {
    text-decoration: inherit;
    color: var(--color-blue);
  }
`;

export default CancelOffers;
