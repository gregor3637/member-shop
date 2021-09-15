import { useEffect } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main";

function App() {
  useEffect(() => {
    document.documentElement.className = "light-theme";
  }, []);

  return (
    <>
      {/* <Tooltip /> */}
      
      <Header />
      <Main />
      {/* <Test /> */}
    </>
  );
}

export default App;
