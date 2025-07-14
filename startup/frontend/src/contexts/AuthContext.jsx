import React, { useEffect, useState } from "react";
import { AuthContext } from "./auth-context";
import { jwtDecode } from "jwt-decode";

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const token = localStorage.getItem("token");
    return !!token;
  });

  const [Fletter, setFletter] = useState("");

  const checkAuth = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setIsLoggedIn(false);
      return false;
    }
    setIsLoggedIn(true);
    const decoded = jwtDecode(token);
    const username = decoded.username || decoded.sub;
    // console.log(username);
    setFletter(username.charAt(0).toUpperCase());
    return true;
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    window.location.href = "/";
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        checkAuth,
        logout,
        Fletter,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
