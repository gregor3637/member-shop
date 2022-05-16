import React from "react";
import styled from "styled-components";

import SortBy2 from "../../../General/SortBy/SortBy2";

import useActivityPageContext from "../../../../hooks/ActivityPage/useActivityPageContext";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import CategorySVG from "../../../../img/svg/Drawer/CategorySVG";

const Preferences = (props) => {
  const {
    state: { category, filter },
    dispatch,
  } = useActivityPageContext();

  return (
    <Wrapper className="preferences">
      <div>
        <SortBy2X
          options={category.options}
          selectedOption={category.selected}
          onOptionSelect={(val) => dispatch({ type: "category", value: val })}
          icon={<CategorySVG />}
        />
      </div>
      <div>
        <SortBy2X
          options={filter.options}
          selectedOption={filter.selected}
          onOptionSelect={(val) => dispatch({ type: "filter", value: val })}
          icon={<FilterAltIcon />}
        />
      </div>
    </Wrapper>
  );
};

const SortBy2X = styled(SortBy2)`
  height: 5rem;
  padding: 0 1rem;

  display: flex;
  font-size: 1.6rem;

  border: 1px solid var(--color-grey20);
  border-radius: 1rem;
`;

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;

  display: flex;
  gap: 4rem;

  & > div {
    flex: 1;
  }
`;

export default Preferences;
