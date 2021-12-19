import React from "react";
import styled from "styled-components";

const Checkmark = (props) => {
  return <Styled className={props.className} />;
};

const Styled = styled.div`
  position: relative;
  width: 22px;
  height: 22px;
  background-color: var(--color-none);

  &:before {
    content: "";
    position: absolute;
    width: 3px;
    height: 14px;
    background-color: var(--button-color-blue);
    /* left: 19px;
    top: 13px; */

    left: 12px;
    top: 5px;
    -ms-transform: rotate(45deg); /* IE 9 */
    -webkit-transform: rotate(45deg); /* Chrome, Safari, Opera */
    transform: rotate(45deg);
  }

  &:after {
    content: "";
    position: absolute;
    width: 6px;
    height: 3px;
    background-color: var(--button-color-blue);
    /* left: 14px;
    top: 18px; */

    left: 4px;
    top: 11px;
    -ms-transform: rotate(45deg); /* IE 9 */
    -webkit-transform: rotate(45deg); /* Chrome, Safari, Opera */
    transform: rotate(45deg);
  }
`;

export default Checkmark;
