import React from "react";
import styled from "styled-components";

const DropDown = (props, ref) => {
  let version = (props.isOpen ? "sorting-open " : "") + props.className;
  return (
    <Wrapper ref={ref} className={version}>
      {props.children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  margin: 0.5rem 0;
  height: auto;

  background-color: var(--color-white);

  display: flex;
  flex-direction: column;

  border-radius: 1.2rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  visibility: hidden;

  &.sorting-open {
    visibility: visible;
  }
`;

export default React.forwardRef(DropDown);
