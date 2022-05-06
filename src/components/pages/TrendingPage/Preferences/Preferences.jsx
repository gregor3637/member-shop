import React from "react";
import styled from "styled-components";

import useTrendingPageContext from "../../../../hooks/TrendingPage/useTrendingPageContext";
import SortBy2 from "../../../General/SortBy/SortBy2";

import InsertLinkOutlinedIcon from "@mui/icons-material/InsertLinkOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import LayersOutlinedIcon from "@mui/icons-material/LayersOutlined";
import InterestsOutlinedIcon from "@mui/icons-material/InterestsOutlined";

const Preferences = (props) => {
  const {
    state: { categoryType, categoryTimeHorizon, blockchain, type },
    dispatch,
  } = useTrendingPageContext();

  return (
    <Wrapper className="preferences">
      <div>
        <SortBy2X
          options={type.options}
          selectedOption={type.selected}
          onOptionSelect={(val) => dispatch({ type: "type", value: val })}
          icon={<LayersOutlinedIcon />}
        />
      </div>
      <div>
        <SortBy2X
          options={categoryTimeHorizon.options}
          selectedOption={categoryTimeHorizon.selected}
          onOptionSelect={(val) =>
            dispatch({ type: "categoryTimeHorizon", value: val })
          }
          icon={<AccessTimeOutlinedIcon />}
        />
      </div>
      <div>
        <SortBy2X
          options={blockchain.options}
          selectedOption={blockchain.selected}
          onOptionSelect={(val) => dispatch({ type: "blockchain", value: val })}
          icon={<InsertLinkOutlinedIcon />}
        />
      </div>
      <div>
        <SortBy2X
          options={categoryType.options}
          selectedOption={categoryType.selected}
          onOptionSelect={(val) =>
            dispatch({ type: "categoryType", value: val })
          }
          icon={<InterestsOutlinedIcon />}
        />
      </div>
    </Wrapper>
  );
};

const SortBy2X = styled(SortBy2)`
  height: 5rem;
  padding: 0 1rem;

  border: 1px solid var(--color-grey20);
  border-radius: 1rem;
`;

const Wrapper = styled.div`
  margin: 2rem 0;
  /* 
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem; */

  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 2rem;
  justify-items: space-between;

  @media (max-width: 1350px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  & > div {
    flex: 1;
  }

  /* @media (max-width: 950px) {
    flex-direction: column;
  } */
`;

export default Preferences;
