import React from "react";
import styled from "styled-components";

const AbsentEarnings = (props) => {
  return (
    <Wrapper>
      <InfoX>
        <p>
          To access your Creator Earnings from NFT sales with this wallet, see
          below.
        </p>
        <p>
          As a reminder, you are solely responsible for validating this
          information and determining what, if any, taxes apply to your NFT
          sales and/or creator earnings. We cannot determine for you what taxes
          you owe. For any questions, please reach out to &#160;
          <a href="">creatiorearnings@members.io</a>
        </p>
        <p>
          Note - this report does not include earnings from NFT sales where you
          are not the creator. and does not include fees earned on Polygon or
          Klaytn. For information on your other activity, refer to the &#160;
          <a href="">Activity tab</a>
        </p>
      </InfoX>

      <NotificationX>
        This wallet address does not have any creator earnings from sales.
      </NotificationX>
    </Wrapper>
  );
};

const NotificationX = styled.div`
  background-color: var(--color-blue-light);
  width: 100%;
  margin: 0 auto;
  padding: 2rem 0;

  border: 1px solid var(--color-grey50);
  border-radius: 1rem;

  font-size: 1.6rem;
  font-weight: 600;
  text-align: center;
`;

const InfoX = styled.div`
  font-weight: 400;

  p {
    margin-bottom: 2rem;
    font-size: 1.6rem;
    color: var(--color-black);
  }

  a {
    text-decoration: inherit;
    color: var(--color-blue);
  }
`;

const Wrapper = styled.div`
  /* background: var(--test-y); */
  max-width: 80rem;
  margin: 0 auto;
  padding: 2rem;

  align-self: start;
`;

export default AbsentEarnings;
