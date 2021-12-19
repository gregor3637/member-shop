import Tippy from "@tippyjs/react";
import React from "react";
import styled from "styled-components";
import useToggle from "../../../../hooks/useToggle";
import DropdownArrow from "../../../General/Arrow/DropdownArrow";
import HollowButton from "../../../General/Buttons/HollowButton";
import Marketplace from "../../../Header/components/submenu/Marketplace";

const SortBy = (props) => {
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
        {isSortedOn && <FinX>adsadsa</FinX>}
      </ButtonYX>
    </TippyX>
  );
};

const EmptyBlockX = styled.div`
  position: absolute;
  display: inline-block;
  width: 1000px;
  height: 10px;
  background-color: gold;
`;

const EmptyBlock_2X = styled.div`
  position: absolute;
  display: inline-block;
  width: 1000px;
  height: 10px;
  background-color: green;
`;

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

const TippyX = styled(Tippy)`
  position: absolute;
  .tippy-content {
    padding: 0;
  }

  margin-left: -1700px;
  z-index: 1000;
`;

const DivX = styled.div`
  height: 100px;
  width: 300px;

  background-color: var(--color-white);
  border: 2px solid var(--color-border);
  border-radius: 0;

  margin-top: -3px;
`;

// const ButtonYX = styled(HollowButton)`
const ButtonYX = styled.button`
  position: relative;
  padding: 0.5rem 1rem;
  border: 2px solid var(--color-none);
  background-color: var(--color-white);
  background-color: green;
  box-sizing: border-box;
  outline: none;
  border: 2px solid red;

  position: -100px;

  display: flex;
  align-items: center;

  span {
    margin-right: 1.6rem;
  }

  &:hover {
    /* border: 2px solid var(--color-border); */
  }

  &.active {
    /* border-color: var(--color-border); */
    /* border-bottom-color: var(--color-none); */
  }
`;

export default SortBy;
