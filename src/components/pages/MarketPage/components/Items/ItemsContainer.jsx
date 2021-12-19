import React from "react";
import styled from "styled-components";
import Select from "react-select";

import useMarketFilters from "../../../../../hooks/Market/useMarketFilters";
import trendingData from "../../../../../data/trendingData";
import ShopCardNew from "../../../../General/Shop/ShopCardNew";
import Item from "./Item";
import useWindowDimensions from "../../../../../hooks/useWindowDimensions";
import VarTest from "./VarTest";
import VarTest_2 from "./VarTest_2";
import Vest_AbsoluteElements from "./Vest_AbsoluteElements";
import Vest_AbsoluteElements_Tippy from "./Vest_AbsoluteElements_Tippy";
import CollectionsComponent from "../Filter/Collections/CollectionsComponent";
import CollectionsComponentTest from "../Filter/Collections/CollectionsComponentTest";

// const colourOptions = [
//   { value: "ocean", label: "Ocean", color: "#00B8D9", isFixed: true },
//   { value: "blue", label: "Blue", color: "#0052CC", isDisabled: true },
//   { value: "purple", label: "Purple", color: "#5243AA" },
//   { value: "red", label: "Red", color: "#FF5630", isFixed: true },
//   {
//     value: "orange",
//     label: "Orangeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
//     color: "#FF8B00",
//   },
//   { value: "yellow", label: "Yellow", color: "#FFC400" },
//   { value: "green", label: "Green", color: "#36B37E" },
//   { value: "forest", label: "Forest", color: "#00875A" },
//   { value: "slate", label: "Slate", color: "#253858" },
//   { value: "silver", label: "Silver", color: "#666666" },
// ];

const colourOptions = [
  { value: "recentlyListed", label: "Recently Listed", color: "#00B8D9" },
  { value: "recentlyCreated", label: "Recently Created", color: "#00B8D9" },
  { value: "endingSoon", label: "Ending Soon", color: "#00B8D9" },
  { value: "oldest", label: "Oldest", color: "#00B8D9" },
  {
    value: "priceHighLow",
    label: "Price (high - low)",
    color: "#0052CC",
  },
  { value: "priceLowHigh", label: "Price (low - high)", color: "#5243AA" },
];

const CustomOption = (props) => {
  const { data, innerRef, innerProps } = props;
  return (
    <div
      ref={innerRef}
      {...innerProps}
      style={{
        backgroundColor: "#ff00d4",
        fontSize: "2rem",
        marginLeft: "1rem",
        "&:hover": {
          background: "#00ff33",
        },
      }}
    >
      I'm a custom link, {data.value}
    </div>
  );
};

const components = {
  IndicatorSeparator: () => null,
  Option: CustomOption,
};

const customStyles = {
  menu: (provided, state) => ({
    ...provided,
    width: "auto",
    border: "1px solid black",
    // borderTop: 'none',
    // color: state.selectProps.menuColor,
    borderRadius: 0,
    marginTop: "-1px",
    boxShadow: 0,
    zIndex: 5,
    paddingRight: "4rem",

    wordWrap: "normal",
    wordBreak: "keep-all",
    whiteSpace: "nowrap",
  }),

  control: (base, state) => {
    console.log("base");
    console.log(state);
    console.log(base);
    return {
      ...base,
      width: state.selectProps.widthControl,
      borderRadius: 0,
      border: state.menuIsOpen ? "1px solid black" : "1px solid rgba(0,0,0,0)",
      borderBottom: state.menuIsOpen
        ? "1px solid rgba(0,0,0,0)"
        : "1px solid rgba(0,0,0,0)",
      boxShadow: 0,
      zIndex: state.menuIsOpen ? 10 : 4,
      "&:hover": {
        border: "1px solid black",
        borderBottom: state.menuIsOpen
          ? "1px solid rgba(0,0,0,0)"
          : "1px solid black",
      },
    };
  },

  // control: (_, { selectProps: { width } }) => ({
  //   width: width,
  // }),

  // singleValue: (provided, state) => {
  //   const opacity = state.isDisabled ? 0.5 : 1;
  //   const transition = 'opacity 300ms';

  //   return { ...provided, opacity, transition };
  // }
};

const ItemsContainer = (props) => {
  const { state, dispatch } = useMarketFilters();
  const { height, width } = useWindowDimensions();

  let arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  arr = [1, 1, 1];

  const gridTemplateColumnStyle = 1500 > width ? "small-grid" : "large-grid";

  return (
    <Styled className={gridTemplateColumnStyle}>
      {arr.map((el, i) => {
        return <ItemX key={i} data={el} />;
      })}

      {/* <VarTest_2 /> */}

      {/* <Vest_AbsoluteElements /> */}
      <div>
        {/* <Vest_AbsoluteElements_Tippy />
        <Vest_AbsoluteElements_Tippy /> */}

        {/* <Select
          styles={customStyles}
          components={components}
          width="200px"
          widthControl="100px"
          menuColor="red"
          placeholder="Sort By"
          options={colourOptions}
          isSearchable={false}
          menuIsOpen={true}
        />
        <Select
          styles={customStyles}
          width="200px"
          menuColor="red"
          options={colourOptions}
        />
        <Select
          styles={customStyles}
          width="200px"
          menuColor="red"
          options={colourOptions}
        /> */}
      </div>
      {/* <CollectionsComponent /> */}
      <div>
        <CollectionsComponentTest />
      </div>
    </Styled>
  );
};

const ItemX = styled(Item)`
  /* margin-bottom: 1rem; */
`;

const Styled = styled.div`
  /* background-color: #eef0f3; */
  /* background-color: gold; */
  background-color: var(--color-white);
  padding-top: 1rem;

  width: 100%;
  border-radius: var(--marketplace-border-radius);

  display: grid;
  justify-content: space-between;

  &.small-grid {
    grid-template-columns: repeat(4, minmax(100px, 1fr));
  }

  &.large-grid {
    grid-template-columns: repeat(5, minmax(100px, 1fr));
  }

  & > div {
    display: flex;
  }
`;

export default ItemsContainer;
