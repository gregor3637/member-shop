import React from "react";
import styled from "styled-components";

import FormButton from "../../../../General/Buttons/FormButton";

const SubmitFormButton = (props) => {
  return (
    <Wrapper
      className={props.className}
      type={props.type}
      margin={props.margin}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.children}
    </Wrapper>
  );
};

const Wrapper = styled(FormButton)`
  flex: 1;
  width: 100%;

  border: none;
  background: var(--color-blue);

  :disabled {
    cursor: auto;
    background: var(--color-blue-light);
  }
`;

export default SubmitFormButton;
