import React, { useState } from "react";
import styled from "styled-components";

const Switch2 = ({ className: version }) => {
  const [selectedValue, setSelectedValue] = useState("Male");

  const onValueChange = (event) => {
      setSelectedValue(event.target.defaultValue);
    console.log("Switch22 onValueChange event ", event);
  };

  return (
    <Wrapper
      className={version}
      onClick={() => console.log("Switch22 click 111")}
    >
      <div className="radio">
        <label>
          <input
            type="radio"
            name="drone"
            value="Male"
            checked={selectedValue === "Male"}
            onChange={onValueChange}
          />
          Male
        </label>
      </div>
      <div className="radio">
        <label>
          <input
            type="radio"
            name="drone"
            value="Female"
            checked={selectedValue === "Female"}
            onChange={onValueChange}
          />
          Female
        </label>
      </div>
      <div className="radio">
        <label>
          <input
            type="radio"
            name="drone"
            value="Other"
            checked={selectedValue === "Other"}
            onChange={onValueChange}
          />
          Other
        </label>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  label {
    font-size: 2rem;
  }

  .first-radio-button {
    background: red;
  }

  display: flex;
  flex-direction: column;
`;

export default Switch2;
