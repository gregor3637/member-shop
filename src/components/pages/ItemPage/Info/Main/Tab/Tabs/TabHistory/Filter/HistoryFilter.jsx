import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import useOnClickOutsideHandler from "../../../../../../../../../hooks/useOnClickOutsideHandler";

import useToggle from "../../../../../../../../../hooks/useToggle";
import SortSVG from "../../../../../../../../../img/currency/SortSVG";
import DropdownArrow from "../../../../../../../../General/Arrow/DropdownArrow";
import MarketSortBy from "../../../../../../../../General/SortBy/MarketSortBy";
import TickButton from "../../../../../../../../General/SortBy/TickButton/TickButton";
import ActionButton from "../../../../../../../MarketplacePage/CommonElements/ActionButton/ActionButton";
import DropDown from "../../../../../../../MarketplacePage/CommonElements/DropDown/DropDown";

const options = ["Mint", "Tranfer", "Sale", "Bid", "Bid Cancel", "List"];

const HistoryFilter = ({ className: version, onApplyFilter }) => {
  const [activeFilters, setActiveFilters] = useState([]);
  const [newlySelectedFilters, setNewlySelectedFilters] = useState([]);
  const [touchedFilters, setTouchedFilters] = useState(false);
  const [isShown, toggleShown] = useToggle(false);

  const outsideClickHandler = useCallback(() => {
    toggleShown();
    setTouchedFilters(false);
  }, [toggleShown]);

  const outsideRef = useOnClickOutsideHandler(outsideClickHandler, isShown);
  const dropdownRef = useRef();

  useEffect(() => {
    if (isShown === false) {
      setNewlySelectedFilters([]);
    }
  }, [isShown]);

  const dropdownClickHandle = (ev) => {
    const isDropdownClicked = dropdownRef.current.contains(ev.target);
    if (!isDropdownClicked) toggleShown();
  };

  const toggleValueInArray = (label) => {
    setTouchedFilters(true);
    setNewlySelectedFilters((old) => {
      const index = old.indexOf(label);
      return index === -1
        ? [...old, label]
        : [...old.slice(0, index), ...old.slice(index + 1)];
    });
  };

  const handleApply = () => {
    const symmetricDifference = [
      ...newlySelectedFilters.filter((x) => !activeFilters.includes(x)),
      ...activeFilters.filter((x) => !newlySelectedFilters.includes(x)),
    ];

    setActiveFilters(symmetricDifference);
    setNewlySelectedFilters([]);
    setTouchedFilters(false);
    toggleShown();

    onApplyFilter(symmetricDifference);
  };

  return (
    // <MarketSortBy className={version} />
    <Wrapper>
      <ButtonX onClick={dropdownClickHandle} ref={outsideRef}>
        <IconWrapperX>
          <SortSVG />
        </IconWrapperX>
        <span>Filter</span>
        <DropdownArrow isOpen={isShown} />
        <DropDownX isOpen={isShown} ref={dropdownRef}>
          <OptionsX>
            {options.map((option) => {
              return (
                <TickButton
                  key={option}
                  isSelected={
                    newlySelectedFilters.includes(option) !==
                    activeFilters.includes(option)
                  }
                  label={option}
                  onClick={toggleValueInArray}
                />
              );
            })}
          </OptionsX>
          <ButtonWrapperX>
            <ActionButton
              text={"Apply"}
              onClick={handleApply}
              isDisabled={!touchedFilters}
            />
          </ButtonWrapperX>
        </DropDownX>
      </ButtonX>
    </Wrapper>
  );
};

const ButtonWrapperX = styled.div`
  width: 100%;
  padding: 1rem;

  display: flex;
  justify-content: center;
  gap: 2rem;

  background-color: var(--color-white);
  border-top: 1px solid var(--color-border);
`;

const OptionsX = styled.div`
  padding: 1rem 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;

  color: var(--color-black);
`;

const DropDownX = styled(DropDown)`
  width: 100%;
  overflow: hidden;
`;

const ButtonX = styled.span`
  display: flex;
  justify-content: space-between;
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

const Wrapper = styled.div`
  z-index: 99;
  /* background: var(--color-white); */
  position: relative;
  width: max-content;
  width: 100%;

  button {
    width: 100%;
    background: var(--color-white);
  }
`;

export default HistoryFilter;
