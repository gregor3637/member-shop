import React, { useState } from "react";
import styled from "styled-components";
import useToggle from "../../../../../../hooks/useToggle";
import FormButton from "../../../../../General/Buttons/FormButton";
import Select from "../../../../../General/Select/Select";
import Checkbox from "./Checkbox/Checkbox";


const reasons = [
  "I have unknown transactions on my account",
  "I have everything but believe my account is compromised",
  "Other",
];

const CompromisedAccount = (props) => {
  const [selectedOption, setSelectedOption] = useState("Describe your issue");

  const handleClick = (props) => {
    console.log("click ");
  };

  const [isChecked, toggleChecked] = useToggle(false);

  return (
    <Wrapper>
      <div>
        <p>
          If you believe your account has been compromised, let us know and we
          can lock your account.
          <br /> This will disable items in your wallet from being bought, sold,
          or transferred. <br />
          <a href="">Learn more.</a>
        </p>
      </div>
      <SelectX
        selectedOption={selectedOption}
        options={reasons}
        onOptionSelect={(val) => setSelectedOption(val)}
      />
      <CheckboxContainerX>
        <CheckboxX
          onClick={toggleChecked}
          isChecked={isChecked}
          id="test"
          label=""
        />
        <span>
          I understand I must provide a sworn statement certified by a <br />
          <a href=""> notary public </a>to unlock my account.
        </span>
      </CheckboxContainerX>
      <ButtonLockX disabled={!isChecked || !reasons.includes(selectedOption)}>
        Lock account
      </ButtonLockX>
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

const CheckboxX = styled(Checkbox)`
  padding: 0;
  gap: 0;

  border: none;
`;

const CheckboxContainerX = styled.div`
  margin: 1rem 0;
  display: flex;
  align-items: center;
  gap: 1rem;
  /* justify- */
`;

const SelectX = styled(Select)`
  width: 70rem;
  padding: 1rem 0;
  margin: 1rem 0;
  /* background: var(--test-r); */
  border: 1px solid var(--color-grey40);
  border-radius: 1rem;
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

  p {
    white-space: pre-line;
  }
`;

export default CompromisedAccount;
