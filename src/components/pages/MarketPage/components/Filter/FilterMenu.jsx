import React, { useReducer, useState } from "react";
import styled from "styled-components";

import Color_5 from "../Color_5";
import Price from "../Price/Price";
import { reducerInfo } from "../../reducerInfo/reducerInfo";
import { filterAvailableOptions } from "../../../../../data/multiFilterData";

const FilterMenu = (props) => {
  const [chains, setChains] = useState([]);
  const [status, setStatus] = useState([]);
  const [rarity, setRarity] = useState([]);

  const [pickedInfo, dispatch] = useReducer(
    reducerInfo.reducer,
    reducerInfo.initialState
  );

  return (
    <Styled>
      <Color_5
        dispatchPickedInfo={dispatch}
        dispatchingKey="colors"
        setElements={setChains}
        options={filterAvailableOptions.chains}
      />
      <Color_5
        dispatchPickedInfo={dispatch}
        dispatchingKey="status"
        setElements={setStatus}
        options={filterAvailableOptions.status}
      />
      <Color_5
        dispatchPickedInfo={dispatch}
        dispatchingKey="rarity"
        setElements={setRarity}
        options={filterAvailableOptions.rarity}
      />
      <Price />
    </Styled>
  );
};

const Styled = styled.div`
  background-color: #ffcc00;
  font-size: var(--fontSize-navigation);

  width: 28rem;
`;

export default FilterMenu;
