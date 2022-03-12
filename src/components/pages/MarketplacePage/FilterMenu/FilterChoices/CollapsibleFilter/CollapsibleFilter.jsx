import React from "react";
import styled from "styled-components";

import CollectionsSVG from "../../../../../../img/currency/CollectionsSVG";
import DropdownArrow from "../../../../../General/Arrow/DropdownArrow";
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

const CollapsibleFilter = (props) => {
  return (
    <Wrapper className={props.className}>
      <LabelX onClick={() => props.onClick(props.label)}>
        <InfoX>
          <SvgWrapperX className={props.isOpen ? "open" : ""}>
            <CollectionsSVG />
          </SvgWrapperX>
          <span>{props.label}</span>
        </InfoX>
        {/* <DropdownArrowX isOpen={props.isOpen} /> */}
        <ArrowForwardIosRoundedIcon />
      </LabelX>
      <ContentWrapperX className={props.isOpen ? "open" : ""}>
        {props.children}
      </ContentWrapperX>
    </Wrapper>
  );
};

const SvgWrapperX = styled.div`
  border-radius: 50%;
  border: 1px solid var(--color-border);

  width: 4rem;
  height: 4rem;

  display: flex;
  justify-content: center;
  align-items: center;

  &.open {
    background: var(--button-color-blue);
    border: 1px solid var(--color-none);

    svg {
      fill: var(--color-white);
    }
  }
`;

const DropdownArrowX = styled(DropdownArrow)`
  padding-right: 1rem;
`;

const ContentWrapperX = styled.div`
  margin: 0 2rem;

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

const InfoX = styled.div`
  display: flex;
  align-items: center;

  & > div {
    margin-right: 1rem;
  }

  span {
    font-weight: 700;
  }
`;

const LabelX = styled.span`
  height: 5.6rem;
  padding: 0 1rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  border-radius: var(--market-filters--button-dropdown--border-radius);
  cursor: pointer;

  & > div {
    font-size: 1.6rem;
    font-weight: 400;
  }

  &:hover {
    background: var(--market-filters--button-dropdown--bgColor-hover);
  }
`;

const Wrapper = styled.div`
  /* background: gold; */
  width: 100%;
`;

export default CollapsibleFilter;
