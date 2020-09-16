import React, { useState } from "react";
import { Button, Col, Form, Input, Row } from "antd";
import AuthService from "services/auth.service";
import "./LoginForm.css";

const auth = new AuthService();
export const RegisterForm = () => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const onFinish = async (value) => {
    setLoading(true);
    const result = await auth.registerWithEmailPass(value);
    setLoading(false);
  };
  return (
    <Form
      name="registration"
      className="register-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      form={form}
    >
      <div className="title">Sign Up</div>
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            name="firstName"
            rules={[
              { required: true, message: "Please input your First Name!" },
            ]}
          >
            <Input placeholder="First Name *" size="large" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item name="lastName">
            <Input placeholder="Last Name" size="large" />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item
        name="email"
        rules={[
          { required: true, message: "Please input your email" },
          { type: "email" },
        ]}
      >
        <Input placeholder="Email *" size="large" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          { required: true, message: "Please input your Password!" },
          { min: 8, message: "Password must be atleast 8 Charaters." },
        ]}
        hasFeedback
      >
        <Input.Password
          placeholder="Password *"
          visibilityToggle
          size="large"
        />
      </Form.Item>
      <Form.Item
        name="confirmPassword"
        dependencies={["password"]}
        hasFeedback
        rules={[
          { required: true, message: "Please confirm your Password!" },
          ({ getFieldValue }) => ({
            validator(rule, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                "The two passwords that you entered do not match!"
              );
            },
          }),
        ]}
      >
        <Input.Password
          placeholder="Confirm Password *"
          visibilityToggle
          size="large"
        />
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="login-form-button"
          loading={loading}
        >
          {"Register"}
        </Button>
      </Form.Item>
    </Form>
  );
};
