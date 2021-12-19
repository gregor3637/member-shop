import React from "react";
import styled from "styled-components";
import Select from "react-select";

const reasonsMap = new Map([
  ["ETH", { value: "ETH", label: "Ethereum (ETH)" }],
  ["BTC", { value: "BTC", label: "Bitcoin (BTC)" }],
  ["USDC", { value: "USDC", label: "Unated States Dollar (USDC)" }],
  ["USD", { value: "USD", label: "Unated States Dollar (USD)" }],
  ["USDT", { value: "USDT", label: "Unated States Dollar (USDT)" }],
  ["USDA", { value: "USDA", label: "Unated States Dollar (USDA)" }],
  ["USDj", { value: "USDj", label: "Unated States Dollar (USDj)" }],
  ["USDh", { value: "USDh", label: "Unated States Dollar (USDh)" }],
  ["USDx", { value: "USDx", label: "Unated States Dollar (USDx)" }],
  ["USDB", { value: "USDB", label: "Unated States Dollar (USDB)" }],
]);

const customStyles = {
  container: (base) => ({
    ...base,
    flex: 1,
    cursor: "pointer",
    fontSize: "1.2rem",
  }),
  control: (base, state) => {
    return {
      ...base,
      // margin: 0,
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
      backgroundColor: "gold",
      cursor: "pointer",
      //   width: "auto",
      width: "max-content",
      minWidth: "100%",
      //   height: "100px",
      //   overflowY: "scroll",

      // border: "1px solid black",
      // borderTop: 'none',
      // color: state.selectProps.menuColor,
      borderRadius: 0,
      // marginTop: "-1px",
      boxShadow: 0,
      zIndex: 5,

      wordWrap: "normal",
      wordBreak: "keep-all",
      whiteSpace: "nowrap",
    };
  },
  option: (base, state) => ({
    ...base,
    cursor: "pointer",
    // backgroundColor: state.isSelected ? "red" : "none",
    ':active': {
        backgroundColor: state.isSelected ? "red" : "none",
    }
  }),
};

const CollectionsComponent = (props) => {
  const onChange = (selectedOpts, { option: currentSelectedOpt }) => {
    // setReportType(selectedOpts.value);
  };
  const resultLimit = 10;
  let i = 0;

  return (
    <Styled>
      <SelectX
        styles={customStyles}
        placeholder="Select a reason"
        options={[...reasonsMap.values()]}
        onChange={onChange}
        // isSearchable={false}
        menuIsOpen={true}
        // filterOption={({ value }, query) =>
        //   value.indexOf(query.toLowerCase()) >= 0 && i++ < resultLimit
        // }
        // onInputChange={() => {
        //   i = 0;
        // }}
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

export default CollectionsComponent;
