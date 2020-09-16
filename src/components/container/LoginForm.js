import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import AuthService from "services/auth.service";
import "./LoginForm.css";

const auth = new AuthService();
export const LoginForm = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const onFinish = async (value) => {
    setLoading(true);
    const result = await auth.signIn(value);
    setLoading(false);
  };
  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      form={form}
      onFinish={onFinish}
    >
      <div className="title">Welcome</div>
      <Form.Item
        name="email"
        rules={[
          { required: true, message: "Please input your Email!" },
          { type: "email" },
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Email"
          size="large"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "Please input your Password!" }]}
      >
        <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
          placeholder="Password"
          visibilityToggle
          size="large"
        />
      </Form.Item>
      <Form.Item className="login-form-forgot">
        <Link className="login-form-forgot" to="/forgotpassword">
          {"Forgot password"}
        </Link>
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="login-form-button"
          loading={loading}
        >
          {"Log in"}
        </Button>
      </Form.Item>
    </Form>
  );
};
