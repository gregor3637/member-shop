import React, { useState } from "react";
import styled from "styled-components";
import Select, { components } from "react-select";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Styled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: var(--font-primary);

  h2 {
    margin-right: 1rem;
    font-size: 3rem;
    font-weight: 700;
    color: var(--color-pageMain-headings);
  }
`;

const customStyles = {
  menu: (provided, state) => ({
    ...provided,
    width: state.selectProps.width,
    borderBottom: "1px dotted pink",
    color: state.selectProps.menuColor,
    padding: 20,
  }),

  option: (styles) => ({
    ...styles,
    cursor: "pointer",
  }),

  control: (base) => ({
    ...base,
    cursor: "pointer",
    border: "none",
    padding: "0 2px",
    backgroundColor: "transparent",
    flexDirection: "row-reverse",
    boxShadow: "none",
    caretColor: "transparent",
    "&:hover": {
      borderColor: "red",
    },

    fontSize: "3rem",
    fontWeight: 700,
    color: "red",
  }),

  multiValueLabel: (styles, { data }) => ({
    ...styles,
    color: "red",
    fontSize: "3rem",
    fontWeight: "700",
  }),

  dropdownIndicator: (_, state) => ({
    marginRight: "0.5rem",
    height: "100%",
    minHeight: 25,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "red",
    transform: state.selectProps.menuIsOpen && "rotate(180deg)",
    transition: "all 0.2s ease",
  }),

  multiValue: () => {
    return { display: "flex" };
  },

  valueContainer: () => {
    return {
      display: "flex",
      alignItems: "center",
      color: "red",
      justifyContent: "center",
    };
  },

  placeholder: () => {},
  indicatorSeparator: () => null, // removes the "stick"
};

const CaretDownIcon = () => {
  return (
    <FontAwesomeIcon icon={faCaretDown} className="icon"></FontAwesomeIcon>
  );
};

const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <CaretDownIcon />
    </components.DropdownIndicator>
  );
};
const MultiValueRemove = (props) => {
  return (
    <components.MultiValueRemove {...props} style={{ color: "green" }}>
      <FontAwesomeIcon
        icon={faTimes}
        style={{ fontSize: "2rem" }}
      ></FontAwesomeIcon>
    </components.MultiValueRemove>
  );
};

const DropDownTest = ({ groupedOptions, onFilterSelect }) => {
  const [values, setValues] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onChange = (selectedOpts, { option: currentSelectedOpt }) => {
    onFilterSelect(selectedOpts);
    setValues(selectedOpts);
  };

  const onMenuOpen = () => {
    if (isMenuOpen !== undefined) setIsMenuOpen(undefined);
  };

  return (
    <>
      <Styled className="select">
        <h2>Auctions: </h2>
        <Select
          // defaultValue={groupedOptions[0]}
          options={groupedOptions}
          placeholder={"All"}
          // components={{ ClearIndicator }}
          // filterOption={filterOption}
          isMulti
          isClearable={false}
          closeMenuOnSelect={false}
          menuIsOpen={isMenuOpen}
          styles={customStyles}
          components={{ DropdownIndicator, MultiValueRemove }}
          onChange={onChange}
          onMenuOpen={onMenuOpen}
          value={values}
        />
      </Styled>
    </>
  );
};

export default DropDownTest;
