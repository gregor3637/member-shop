import { useEffect } from "react";
import styled from "styled-components";

import Header from "./components/Header/Header";
import Main from "./components/Main";

function App() {
  useEffect(() => {
    document.documentElement.className = "light-theme";
  }, []);


  return (
    <WrapperX>
      <Header />
      <Main />
    </WrapperX>
  );
}


const WrapperX = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export default App;
