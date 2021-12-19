import Tippy from "@tippyjs/react";
import React from "react";
import styled from "styled-components";
import useToggle from "../../../../../hooks/useToggle";
import DropdownArrow from "../../../../General/Arrow/DropdownArrow";

const Vest_AbsoluteElements_Tippy = (props) => {
  const [isSortedOn, toggleIsSortedOn] = useToggle();

  return (
    <TippyX
      content={<DivX>dasdsa</DivX>}
      //   content={<Marketplace />}
      // onCreate={setInstance}
      arrow={false}
      interactive
      //   appendTo="parent"
      placement="bottom-start"
      offset={[0, 0]}
      // showOnInit={true}
      trigger="click"
      hideOnClick
    >
      <ButtonYX
        onClick={toggleIsSortedOn}
        className={isSortedOn ? "active" : ""}
      >
        <span>Sort By</span>
        <DropdownArrow isOpen={isSortedOn} />
      </ButtonYX>
    </TippyX>
  );
};

const FinX = styled.div`
  position: absolute;
  width: 150px;
  height: 150px;
  background-color: red;
  top: 100%;
  /* box-sizing: border-box; */
  left: 0;
  border: 2px solid var(--color-black);
`;

const DivX = styled.div`
  height: 100px;
  width: 300px;

  background-color: var(--color-white);
  background-color: green;
  border: 2px solid var(--color-black);
  border-radius: 0;

  margin-top: -3px;
`;

const TippyX = styled(Tippy)`
  /* margin: 0 2rem; */
  z-index: 10;
  background-color: green;
  .tippy-content {
    padding: 0;
  }
`;

const ButtonYX = styled.button`
  position: relative;
  padding: 0.5rem 1rem;
  border: 2px solid var(--color-none);
  background-color: var(--color-white);
  background-color: green;
  box-sizing: border-box;
  outline: none;
  border: 2px solid var(--color-none);

  position: -100px;
    z-index: 1;

  display: flex;
  align-items: center;

  span {
    margin-right: 1.6rem;
  }

  /* &:hover {
    border: 2px solid var(--color-black);
  } */

  /* &:active {
    z-index: 10000;
    border-color: var(--color-black);
    border-bottom-color: var(--color-none);
  } */
`;

export default Vest_AbsoluteElements_Tippy;
