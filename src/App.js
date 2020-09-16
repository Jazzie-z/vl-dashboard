import { UserContextProvider } from "contexts/user.context";
import React from "react";
import { Routes } from "routes";
import "./App.less";

function App() {
  return (
    <UserContextProvider>
      <Routes />
    </UserContextProvider>
  );
}

export default App;
