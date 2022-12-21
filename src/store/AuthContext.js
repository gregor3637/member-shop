import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email, password) => {},
});

export const AuthContextProvider = (props) => {
  const history = useHistory();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storeduserLoggedInInforamtion = localStorage.getItem("isLoggedIn");

    if (storeduserLoggedInInforamtion === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const logoutHandler = () => {
    console.log("***** AuthContextProvider | LOG OUT");
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    history.replace("/");
  };

  const loginHandler = () => {
    console.log("***** AuthContextProvider | LOG IN");
    localStorage.setItem("isLoggedIn", 1);
    setIsLoggedIn(true);
    history.push("/marketplace");
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
