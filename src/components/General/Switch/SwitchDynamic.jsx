import React, { useState } from "react";
import styled from "styled-components";

import PaymentIcon from "@mui/icons-material/Payment";

const SwitchDynamic = ({ options, className: version }) => {
  const [selectedValue, setSelectedValue] = useState("crypto");

  const onValueChange = (ev) => setSelectedValue(ev.target.defaultValue);

  return (
    <Wrapper className={version}>
      {options.map((label) => {
        return (
          <label key={label}>
            <input
              type="radio"
              name="test"
              value={label}
              checked={selectedValue === "crypto"}
              onChange={onValueChange}
            />
            <div>
              <span>{label}</span>
              {/* <img src="https://via.placeholder.com/40x60/0bf/fff&text=A" /> */}
            </div>
          </label>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
  padding: 0.4rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  /* background: var(--color-grey20); */
  border: 1px solid var(--color-grey20);
  border-radius: 0.8rem;

  label {
    flex: 1;

    cursor: pointer;
  }

  span {
    margin: 0 1rem;
    font-size: 1.4rem;
    font-weight: 600;
  }

  /* HIDE RADIO */
  [type="radio"] {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* IMAGE STYLES */
  [type="radio"] + div {
    flex: 1;

    border-radius: 0.8rem;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* CHECKED STYLES */
  [type="radio"]:checked + div {
    color: var(--color-white);
    background: var(--color-black);
  }

  [type="radio"]:not(:checked) + div:hover {
    color: var(--color-grey50);
  }
`;

export default SwitchDynamic;
