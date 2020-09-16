import React from 'react';
import { Button, Checkbox, Form, Image, Input } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './LoginForm.css'
import { Link } from 'react-router-dom';
export const LoginForm = () => {
    const [form] = Form.useForm()
    return (
        <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={() => { }}
        >
            <div className="title">Welcome</div>
            <Form.Item
                name="username"
                rules={[{ required: true, message: 'Please input your Username!' }]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" size="large" />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your Password!' }]}
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
                    {'Forgot password'}
                </Link>
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    {'Log in'}
                </Button>
            </Form.Item>
        </Form>
    )
}
