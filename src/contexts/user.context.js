import { app } from "firebase";
import React from "react";
import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUserContext] = useState({
    isSignedIn: localStorage.getItem("user"),
  });
  const onUpdateUser = (userData) => {
    setUserContext({ ...userData, isSignedIn: !!userData });
  };
  return (
    <UserContext.Provider value={{ user, onUpdateUser }}>
      {children}
    </UserContext.Provider>
  );
};

UserContextProvider.propTypes = {
  children: React.PropTypes.node,
};
