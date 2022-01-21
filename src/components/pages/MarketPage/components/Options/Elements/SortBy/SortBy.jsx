import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import useToggle from "../../../../../../../hooks/useToggle";
import DropdownArrow from "../../../../../../General/Arrow/DropdownArrow";
import DropDown_2 from "../../DropDown/DropDown_2";

// import DropDown from "../../DropDown/DropDown22";
import Options from "./Elements/Options";

const SortBy = (props) => {
  const [isSortedOn, toggleIsSortedOn] = useToggle();
  const [selected, setSelected] = useState("Sort By");

  const clickContainerRef = useRef();
  const absoluteContainerRef = useRef();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => {
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
    <BtnContainerX>
      <ButtonX onClick={handleClick} ref={clickContainerRef}>
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
    </BtnContainerX>
  );
};

const ButtonX = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.4rem 1rem;

  background-color: var(--marketplace-button-background);
  border-radius: 1.2rem;

  font-size: 1.4rem;
  font-weight: 400;

  cursor: pointer;

  span {
    margin-right: 1.6rem;
  }
`;

const BtnContainerX = styled.div`
  position: relative;
  margin: 0 0.5rem;
`;

export default SortBy;
