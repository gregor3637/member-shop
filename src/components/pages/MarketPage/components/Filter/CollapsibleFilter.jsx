import React from "react";
import styled from "styled-components";

import useToggle from "../../../../../hooks/useToggle";
import DropdownArrow from "../../../../General/Arrow/DropdownArrow";

const CollapsibleFilter = (props) => {
  const [isOpen, toggleIsOpen] = useToggle(props.isOpen);

  return (
    <Styled className={props.className}>
      <SpanX onClick={toggleIsOpen}>
        <div>{props.label}</div>
        <DropdownArrowX isOpen={isOpen} />
      </SpanX>
      <FilterOptionsX className={isOpen ? "open" : ""}>
        {props.children}
      </FilterOptionsX>
    </Styled>
  );
};

const DropdownArrowX = styled(DropdownArrow)`
  padding-right: 1rem;
`;

const FilterOptionsX = styled.div`
  display: block;
  height: 0;
  padding-bottom: 0.5rem;
  overflow: hidden;

  & > div {
    display: none;
  }

  &.open {
    padding-bottom: 3rem;
    height: auto;
    overflow: visible;
    border-bottom: none;

    & > div {
      display: block;
    }
  }
`;

const SpanX = styled.span`
  padding-bottom: 0.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  cursor: pointer;

  & > div {
    font-size: 1.6rem;
    font-weight: 400;
  }
`;

const Styled = styled.div`
/* background: gold; */
  width: 100%;
  padding-top: 1rem;
`;

export default CollapsibleFilter;
