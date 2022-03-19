import React from "react";
import styled from "styled-components";

import DropdownArrow from "../Arrow/DropdownArrow";

const Drawer = ({
  isOpen,
  onClick,
  label,
  annotation,
  icon,
  className: version,
  children,
}) => {
  version += isOpen ? " open" : "";

  return (
    <Wrapper className={version}>
      <ViewX onClick={() => onClick(label)}>
        <InfoX>
          <SvgWrapperX className={isOpen ? "open" : ""}>{icon}</SvgWrapperX>
          <div>
            <LabelX>{label}</LabelX>
            <AnnotationX>{annotation}</AnnotationX>
          </div>
        </InfoX>
        <DropdownArrow isOpen={isOpen} />
      </ViewX>
      <ContentX className={isOpen ? "open" : ""}>{children}</ContentX>
    </Wrapper>
  );
};

const SvgWrapperX = styled.div`
  z-index: 5;
  border-radius: 1rem;
  /* border-radius: 50%; */
  border: 1px solid var(--color-border);

  width: 4rem;
  height: 4rem;

  background: var(--color-white);

  display: flex;
  justify-content: center;
  align-items: center;

  &.open {
    background: var(--button-color-blue);
    border: 1px solid var(--color-none);

    svg {
      color: var(--color-white);
    }
  }
`;

const DropdownArrowX = styled(DropdownArrow)`
  padding-right: 1rem;
`;

const ContentX = styled.div`
  /* background: var(--test-y); */

  padding: 0 0 1rem 6rem;
  z-index: 5;

  display: block;
  height: 0;
  overflow: hidden;

  display: none;

  &.open {
    height: auto;
    overflow: visible;

    display: block;
  }
`;
const LabelX = styled.div`
  font-weight: 700;
  font-size: 1.6rem;
`;

const AnnotationX = styled.div`
  font-size: 1rem;
`;

const InfoX = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  & > div {
    margin-right: 1rem;
  }
`;

const ViewX = styled.span`
  height: 6rem;
  padding: 0 2rem 0 1rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  border-radius: var(--market-filters--button-dropdown--border-radius);
  cursor: pointer;

  &:hover {
    background: var(--market-filters--button-dropdown--bgColor-hover);
  }
`;

const Wrapper = styled.div`
  width: 100%;

  position: relative;

  &:before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 3rem;
    width: 0;
    height: 3rem;
    border: 1px solid #aaaaaa;
    border-style: solid;
  }

  &:after {
    content: "";
    display: block;
    position: absolute;
    top: 3rem;
    left: 3rem;
    width: 0;
    height: calc(100% - 3rem);
    border: 1px solid #aaaaaa;
    border-style: solid;
  }
`;

export default Drawer;
