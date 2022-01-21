import React from "react";
import styled from "styled-components";

const DropDown = (props, ref) => {
  return <>{props.isOpen && <Styled ref={ref}>{props.children}</Styled>}</>;
};

const Styled = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  margin: 0.5rem 0;
  height: auto;
  width: 30rem;

  background-color: var(--color-white);

  display: flex;
  flex-direction: column;

  border-radius: 1.2rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export default React.forwardRef(DropDown);
