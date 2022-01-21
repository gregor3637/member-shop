import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import useToggle from "../../../../../../hooks/useToggle";
import SortSVG from "../../../../../../img/currency/SortSVG";
import DropdownArrow from "../../../../../General/Arrow/DropdownArrow";
import DropDown_2 from "../../Common/DropDown/DropDown";
import Options from "./Options";

const SortBy = (props) => {
  const [isSortedOn, toggleIsSortedOn] = useToggle();
  const [selected, setSelected] = useState("Sort By");

  const clickContainerRef = useRef();
  const absoluteContainerRef = useRef();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = (props) => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (
        isMenuOpen &&
        absoluteContainerRef.current &&
        !absoluteContainerRef.current.contains(e.target) &&
        clickContainerRef.current &&
        !clickContainerRef.current.contains(e.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [isMenuOpen]);

  return (
    <WrapperX className={props.className}>
      <ButtonX onClick={handleClick} ref={clickContainerRef}>
        <IconWrapperX>
          <SortSVG />
        </IconWrapperX>
        <span>{selected}</span>
        <DropdownArrow isOpen={isSortedOn} />
      </ButtonX>
      <DropDown_2
        isOpen={isMenuOpen}
        closeHandle={handleClick}
        ref={absoluteContainerRef}
      >
        <Options setSelected={setSelected} onClickHandle={handleClick} />
      </DropDown_2>
    </WrapperX>
  );
};

const IconWrapperX = styled.div`
  height: 100%;
  margin-right: 0.8rem;
  
  svg {
    transform: scale(1.2);
  }

  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonX = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 3.6rem;
  padding: 0 1.6rem;

  background-color: var(--color-white);
  border: 1px solid var(--color-border);
  border-radius: var(--market-itemsWrapper-header-elements-border-radius);

  font-size: 1.4rem;
  font-weight: 400;

  cursor: pointer;

  span {
    margin-right: 1.6rem;
    font-weight: 600;
  }
`;

const WrapperX = styled.div`
  position: relative;
  width: max-content;
`;

export default SortBy;
