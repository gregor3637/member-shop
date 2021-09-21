import { useEffect } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main";
import Resizable from "./components/Resizable";

function App() {
  useEffect(() => {
    document.documentElement.className = "light-theme";
  }, []);

  return (
    <>
      {/* <Tooltip /> */}
      
      <Header />
      <Main />
      {/* <Resizable /> */}
      {/* <Test /> */}
    </>
  );
}

export default App;
