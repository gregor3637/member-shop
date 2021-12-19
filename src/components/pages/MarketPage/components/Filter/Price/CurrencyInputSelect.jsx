import React from "react";
import styled from "styled-components";
import Select from "react-select";

const reasonsMap = new Map([
  ["ETH", { value: "ETH", label: "Ethereum (ETH)" }],
  ["BTC", { value: "BTC", label: "Bitcoin (BTC)" }],
  ["USDC", { value: "USDC", label: "Unated States Dollar (USDC)" }],
  ["USD", { value: "USD", label: "Unated States Dollar (USD)" }],
  ["USDT", { value: "USDT", label: "Unated States Dollar (USDT)" }],
]);

const customStyles = {
  container: (base) => ({
    ...base,
    flex: 1,
    cursor: "pointer",
    fontSize: "1.2rem"
  }),
  control: (base, state) => {
    return {
      ...base,
      margin: 0,
      width: state.selectProps.widthControl,
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

const CurrencyInputSelect = (props) => {
  const onChange = (selectedOpts, { option: currentSelectedOpt }) => {
    // setReportType(selectedOpts.value);
  };

  return (
    <Styled>
      <SelectX
        styles={customStyles}
        placeholder="Select a reason"
        options={[...reasonsMap.values()]}
        onChange={onChange}
        isSearchable={false}
        // menuIsOpen={true}
      />
    </Styled>
  );
};

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
