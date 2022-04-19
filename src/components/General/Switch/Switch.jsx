import React, {  useState } from "react";
import styled from "styled-components";

import PaymentIcon from "@mui/icons-material/Payment";

const Switch = ({ className: version }) => {
  const [selectedValue, setSelectedValue] = useState("crypto");

  const onValueChange = (ev) => setSelectedValue(ev.target.defaultValue);

  return (
    <Wrapper className={version}>
      <label>
        <input
          type="radio"
          name="test"
          value="crypto"
          checked={selectedValue === "crypto"}
          onChange={onValueChange}
        />
        <div>
          <span>Crypto</span>
          {/* <img src="https://via.placeholder.com/40x60/0bf/fff&text=A" /> */}
        </div>
      </label>

      <label onClick={() => console.log("Switch click 222")}>
        <input
          type="radio"
          name="test"
          checked={selectedValue === "fiat"}
          value="fiat"
          onChange={onValueChange}
        />
        <div>
          <PaymentIcon />
        </div>
      </label>
      <label onClick={() => console.log("Switch click 222")}>
        <input
          type="radio"
          name="test"
          checked={selectedValue === "fiat"}
          value="fiat"
          onChange={onValueChange}
        />
        <div>
          <PaymentIcon />
        </div>
      </label>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 4rem;
  overflow: hidden;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background: var(--color-grey20);
  border-radius: 0.8rem;

  label {
    flex: 1;
    height: 100%;

    cursor: pointer;
  }

  span {
    font-size: 1.4rem;
    font-weight: 500;
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
    background: var(--color-blue);
  }
`;

export default Switch;
