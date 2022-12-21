import { useEffect } from "react";
import styled from "styled-components";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";

import Header from "./components/Header/Header";
import Main from "./components/Main";
import { AuthContextProvider } from "./store/AuthContext";

function App() {
  useEffect(() => {
    document.documentElement.className = "light-theme";
  }, []);

  const logoutHandler = () => {
    // this.setState({ isAuth: false, token: null });
    localStorage.removeItem("token");
    localStorage.removeItem("expiryDate");
    localStorage.removeItem("userId");
  };

  return (
    <ScrollbarX forceVisible="y" autoHide={true}>
      <AuthContextProvider>
        <WrapperX>
          <Header />
          <Main />
        </WrapperX>
      </AuthContextProvider>
    </ScrollbarX>
  );
}

const ScrollbarX = styled(SimpleBar)`
  height: 100%;
  width: 100%;

  .simplebar-content {
    height: 100%;
    width: 100%;
  }
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
