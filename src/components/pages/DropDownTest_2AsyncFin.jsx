import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Select, { components } from "react-select";
import Async, { makeAsyncSelect } from "react-select/async";
import { clone } from "lodash";

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

const options = [
  { label: "All", value: "all" },
  { label: "Chocolate", value: "chocolate" },
  { label: "Strawberry", value: "strawberry" },
  { label: "Vanilla", value: "vanilla" },
];

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
    color: "red",
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
  // multiValueRemove: (styles, { data }) => ({
  //   ...styles,
  //   fontSize: "3rem",
  //   width: "4rem"

  //   svg {}
  // }),

  indicatorSeparator: () => {},

  dropdownIndicator: (_, state) => ({
    paddingRight: "0.5rem",
    height: "100%",
    minHeight: 25,
    display: "flex",
    alignItems: "center",
    color: "red",
    transform: state.selectProps.menuIsOpen && "rotate(180deg)",
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
  indicatorSeparator: () => {}, // removes the "stick"
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

const getOptions = (input) => {
  return fetch(
    `https://api.github.com/search/repositories?q=stars:%3E1+language:javascript&sort=stars&order=desc&type=Repositories`
  )
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      let githubUsers = json.items.map((user) => {
        return {
          label: user.full_name,
          value: user.name,
        };
      });
      return { options: githubUsers };
    });
};

const DropDownTest_2AsyncFin = ({ itemCurrencies, itemTypes }) => {

  console.log(itemCurrencies);
  console.log("itemCurrencies");
  const [values, setValues] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {}, []);

  const onChange = (opt, { option }) => {
    let newOpts = opt;

    if (option && option.value === "all") {
      setIsMenuOpen(false);
      newOpts = clone(options);
      newOpts.shift();
    }

    setValues(newOpts);
  };

  const onMenuOpen = () => {
    if (isMenuOpen !== undefined) setIsMenuOpen(undefined);
  };

  return (
    <>
      <Styled className="select">
        <h2>Auctions: </h2>
        {/* <Select */}
        <Async
          //   defaultValue={options[0]}
          // components={{ ClearIndicator }}
          // filterOption={filterOption}
          menuIsOpen={isMenuOpen}
          closeMenuOnSelect={false}
          defaultValue="asdasd"
          placeholder={"Select"}
          isMulti
          onChange={onChange}
          isClearable={false}
          styles={customStyles}
          // options={options}
          cacheOptions
          loadOptions={getOptions}
          value={values}
          onMenuOpen={onMenuOpen}
          components={{ DropdownIndicator, MultiValueRemove }}
        />
       
      </Styled>
    </>
  );
};

export default DropDownTest_2AsyncFin;
