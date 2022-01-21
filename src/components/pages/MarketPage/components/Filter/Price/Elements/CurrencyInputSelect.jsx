import React from "react";
import styled from "styled-components";
import Select, { components } from "react-select";

const customStyles = {
  container: (base) => ({
    ...base,
    flex: 1,
    cursor: "pointer",
    fontSize: "1.2rem",
  }),
  control: (base, state) => {
    console.log('state.selectProps.widthControl' , state.selectProps.widthControl);
    return {
      ...base,
      margin: 0,
      // width: state.selectProps.widthControl,
      borderRadius: 0,
      border: 0,
      borderBottom: "1px solid #cbced8",
      boxShadow: 0,
      zIndex: 10,
      minHeight: "30px",
      height: "30px",
      cursor: "pointer",

      "&:hover": {
        border: 0,
        borderBottom: "1px solid #2081e2",
      },
    };
  },
  valueContainer: (base) => ({
    ...base,
    padding: 0,
    margin: 0,
    height: "30px",
  }),
  indicatorsContainer: (base) => ({
    ...base,
    padding: "0px",
    height: "30px",
  }),
  clearIndicator: (base) => ({
    backgroundColor: "green",
  }),
  indicatorSeparator: (base) => ({
    display: "none",
  }),
  menu: (base, state) => {
    return {
      ...base,
      cursor: "pointer",
      //   width: "auto",
      width: "max-content",
      minWidth: "100%",

      border: "1px solid black",
      // borderTop: 'none',
      // color: state.selectProps.menuColor,
      borderRadius: 0,
      marginTop: "-1px",
      boxShadow: 0,
      zIndex: 5,

      wordWrap: "normal",
      wordBreak: "keep-all",
      whiteSpace: "nowrap",
    };
  },

  menuList: (base) => ({
    padding: 0,
  }),
  option: (base, state) => ({
    ...base,
    cursor: "pointer",
  }),
};

const CurrencySelectOption = (props) => {
  return (
    <components.Option {...props}>
      <SelectOptionItemX>
        {props.data.currencyImg}
        {props.label}
      </SelectOptionItemX>
    </components.Option>
  );
};

const CurrencyValueContainer = ({ children, ...props }) => {
  const img =
    (props.selectProps &&
      props.selectProps.value &&
      props.selectProps.value.currencyImg) ||
    false;

  return (
    <SelectValueContainerX>
      {img}
      <components.ValueContainer {...props}>
        {children}
      </components.ValueContainer>
    </SelectValueContainerX>
  );
};

const CurrencyInputSelect = ({ currency, setCurrency, options }) => {
  return (
    <Styled>
      <SelectX
        styles={customStyles}
        placeholder="Select a currency"
        options={options}
        onChange={setCurrency}
        isSearchable={false}
        value={currency}
        components={{
          Option: CurrencySelectOption,
          ValueContainer: CurrencyValueContainer,
        }}
        // defaultValue={currency}
        // menuIsOpen={true}
      />
    </Styled>
  );
};

const SelectValueContainerX = styled.div`
  display: flex;
  align-items: center;

  img {
    margin-right: 0.5rem;
    border-radius: 50%;
    width: 2rem;
  }
`;

const SelectOptionItemX = styled.div`
  display: flex;
  align-items: center;

  img {
    margin-right: 1rem;
    border-radius: 50%;
    width: 1.6rem;
  }
`;

const SelectX = styled(Select)`
  background: green;

  cursor: pointer;
`;

const Styled = styled.div`
  background-color: green;
  width: 100%;
  margin-bottom: 2rem;

  display: flex;
`;

export default CurrencyInputSelect;
