import { useEffect } from "react";
import Header from "./components/Header/Header";
import Test from "./components/Test";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  useEffect(() => {
    document.documentElement.className = "light-theme";
  }, []);

  return (
    <>
      <Header />
        <div className="App">start</div>
      <Test />
    </>
  );
}

export default App;
