import React from "react";
import styled from "styled-components";
import useToggle from "../../../../../../hooks/useToggle";
import DropdownArrow from "../../../../../General/Arrow/DropdownArrow";
import CollectionsComponent from "./CollectionsComponent";

const Collections = ({ label, style }) => {
  const [isOpen, toggleIsOpen] = useToggle();

  return (
    <Styled>
      <SpanX onClick={toggleIsOpen}>
        <div>{label}</div>
        <DropdownArrowX isOpen={isOpen} />
      </SpanX>
      <MenuOptionsContainerX className={isOpen ? "open" : ""}>
        <CollectionsComponent />
      </MenuOptionsContainerX>
    </Styled>
  );
};

const DropdownArrowX = styled(DropdownArrow)`
  padding-right: 1rem;
`;

const MenuOptionsContainerX = styled.div`
  display: block;
  height: 0;
  padding-bottom: 0.5rem;
  overflow: hidden;

  &.open {
    padding-bottom: 3rem;
    height: auto;
    overflow: visible;
    border-bottom: none;
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
  width: 100%;
`;

export default Collections;
