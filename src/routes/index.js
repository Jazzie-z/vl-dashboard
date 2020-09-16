import React, { useContext, useEffect, useState } from "react";
import { auth } from "firebase/setup";
import { Auth } from "routes/Auth";
import { Private } from "routes/Private";
import { UserContext } from "contexts/user.context";

export const Routes = () => {
  const userContext = useContext(UserContext);
  const { isSignedIn } = userContext.user;
  console.error(userContext.user.uid);
  useEffect(() => {
    auth.onAuthStateChanged(function (payload) {
      localStorage.setItem("user", payload?.uid || null);
      userContext.onUpdateUser(payload);
    });
  }, [userContext]);
  //   console.error('user',user)
  return isSignedIn ? <Private /> : <Auth />;
};
