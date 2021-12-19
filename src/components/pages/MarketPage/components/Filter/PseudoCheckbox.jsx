import React from "react";
import styled from "styled-components";

const PseudoCheckbox = () => {
  return (
    <Styled className="checkbox">
      {/* <div className="checkmark" /> */}
      <span id="checkmark"></span>
    </Styled>
  );
};

const Styled = styled.div`
  background-color: rgba(0, 0, 0, 0);
  width: 2.4rem;
  height: 2.4rem;
  margin-right: 1rem;

  border: 1px solid var(--color-border);
  border-radius: 0.5rem;
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;

  .checkmark {
    display: none;
    transform: rotate(45deg);
    height: 14px;
    width: 8px;
    margin-bottom: 4px;

    border-bottom: 3px solid var(--color-white);
    border-right: 3px solid var(--color-white);
  }
  #checkmark {
    display: inline-block;
    width: 22px;
    height: 22px;
    background: #c9ff00;
    border-radius: 50%;
    -ms-transform: rotate(45deg); /* IE 9 */
    -webkit-transform: rotate(45deg); /* Chrome, Safari, Opera */
    transform: rotate(45deg);
  }

  #checkmark:before {
    content: "";
    position: absolute;
    width: 3px;
    height: 9px;
    background-color: #fff;
    left: 11px;
    top: 6px;
  }

  #checkmark:after {
    content: "";
    position: absolute;
    width: 3px;
    height: 3px;
    background-color: #fff;
    left: 8px;
    top: 12px;
  }
`;

export default PseudoCheckbox;
