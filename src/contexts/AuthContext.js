// src/contexts/AuthContext.js
import React, { createContext, useState, useEffect } from "react";
import AuthService from "../services/auth";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(AuthService.getCurrentUser());

  const login = async (username, password) => {
    const user = await AuthService.login(username, password);
    setCurrentUser(user);
  };

  const logout = () => {
    AuthService.logout();
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
