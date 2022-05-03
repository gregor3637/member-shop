import { useEffect } from "react";
import styled from "styled-components";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";

import Header from "./components/Header/Header";
import Main from "./components/Main";

function App() {
  useEffect(() => {
    document.documentElement.className = "light-theme";
  }, []);

  return (
    <ScrollbarX forceVisible="y" autoHide={true}>
      <WrapperX>
        <Header />
        <Main />
      </WrapperX>
    </ScrollbarX>
  );
}

const ScrollbarX = styled(SimpleBar)`
  height: 100%;
`;

const WrapperX = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;

  /* overflow: hidden; */

  &::-webkit-scrollbar-track {
    background-color: var(--color-none);
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 100px;
    border-left: 0;
    border-right: 0;
    background-color: var(--color-none);
  }
`;

export default App;
