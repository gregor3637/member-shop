import React from "react";
import styled from "styled-components";

import FormButton from "../../Buttons/FormButton";

const StolenComponent = (props) => {
  return (
    <Styled>
      <div>Please contact antifraud@opensea.io to report a stolen item.</div>
      <div>
        If you believe your account has been compromised, go to account support
        in account settings to lock your account.
      </div>
      <FormButton onClick={props.onClose}>Close</FormButton>
    </Styled>
  );
};

const Styled = styled.div`
  padding: 3rem 0 0 0;

  display: flex;
  flex-direction: column;

  font-size: 1.5rem;

  & > div:first-child {
    padding-bottom: 1rem;
  }
`;

export default StolenComponent;
