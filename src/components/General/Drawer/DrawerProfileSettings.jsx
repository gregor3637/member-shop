import React from "react";
import styled from "styled-components";

import DropdownArrow from "../Arrow/DropdownArrow";

const DrawerProfileSettings = ({
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
      <ViewX onClick={() => onClick(label)} className="drawer-toggler">
        <InfoX>
          <SvgWrapperX className={isOpen ? "open" : ""}>{icon}</SvgWrapperX>
          <div>
            <LabelX>{label}</LabelX>
            <AnnotationX>{annotation}</AnnotationX>
          </div>
        </InfoX>
        <DropdownArrow isOpen={isOpen} />
      </ViewX>
      <ContentX className={isOpen ? "drawer-content open" : "drawer-content"}>
        {children}
      </ContentX>
    </Wrapper>
  );
};

const SvgWrapperX = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    font-size: 3rem;
    color: var(--color-grey50);
  }
`;

const ContentX = styled.div`
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
  text-transform: capitalize;
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
  /* background: var(--test-g); */
  width: 100%;
`;

export default DrawerProfileSettings;
