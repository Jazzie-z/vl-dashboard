import { Button } from "antd";
import React from "react";
import logo from "assets/images/logo_2.png";
import { LoginForm } from "components/container/LoginForm";
import { Link, useHistory } from "react-router-dom";
import { RegisterForm } from "components/container/RegisterForm";
import "./Login.css";

export const Login = () => {
  const history = useHistory();
  const isLogin = history.location.pathname.includes("/login");
  return (
    <div className="wrapper">
      <div className="white-box"></div>
      <div className="container">
        <div className="logo-container">
          <img src={logo} alt={'violet'}/>
          <Button type="primary">
            <Link to={isLogin ? "/register" : "/login"}>
              {isLogin ? "Register Now !" : "Sign In"}
            </Link>
          </Button>
        </div>
        <div className="form-container">
          {isLogin ? <LoginForm /> : <RegisterForm />}
        </div>
      </div>
    </div>
  );
};
