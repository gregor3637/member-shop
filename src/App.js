import { useEffect } from "react";
import styled from "styled-components";

import Header from "./components/Header/Header";
import Main from "./components/Main";

function App() {
  useEffect(() => {
    document.documentElement.className = "light-theme";
  }, []);

  return (
    <Styled>
      <Header />
      <Main />

      {/* <ContainerX>
        <HeaderX>header</HeaderX>
        <OuterX>
          <div>x</div>
          <div>x</div>
          <div>x</div>
          <div>x</div>
          <div>x</div>
          <div>x</div>
          <div>x</div>
          <div>x</div>
          <div>x</div>
          <div>x</div>
          <div>x</div>
          <div>x</div>
          <div>x</div>
          <div>x</div>
          <div>x</div>
        </OuterX>
        <FooterX>footer</FooterX>
      </ContainerX> */}
    </Styled>
  );
}

const OuterX = styled.div`
  background-color: red;
  flex: 1;
  overflow-y: auto;
`;
const FooterX = styled.div`
  background-color: green;
  flex: 0 0 20rem;
`;
const HeaderX = styled.div`
  background-color: green;

  flex: 0 0 20rem;
`;
const ContainerX = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;

  background-color: gold;
  font-size: 5rem;
`;

const Styled = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export default App;
