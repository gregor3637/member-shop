import React from "react";
import styled from "styled-components";

import useBouncer from "./hooks/useBouncer";

const App_Input = ({ setPageNumber,setQuery }) => {
  const queryChange = (query) => {
    setPageNumber(0);
    setQuery(query);
  };

  const collectionsDebouncer = useBouncer(queryChange, 500);

  const inputHandle = (ev) => {
    collectionsDebouncer(ev.target.value);
  };

  return (
    <Styled>
      <input onChange={inputHandle} placeholder="test" />
    </Styled>
  );
};

const Styled = styled.div`
  background-color: green;
`;

export default App_Input;
