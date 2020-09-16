import React from "react";
import { Button, Layout } from "antd";
import logo from "assets/images/logo_2.png";
import AuthService from "services/auth.service";
import "./Menu.css";

const auth = new AuthService();
export const Menu = () => {
  const onLogout = () => {
    auth.signOut();
  };
  return (
    <Layout.Header className="header">
      <img src={logo} className={"logo"} alt={"logo"} />
      <Button className="logout" type="primary" danger onClick={onLogout}>
        Logout
      </Button>
    </Layout.Header>
  );
};
