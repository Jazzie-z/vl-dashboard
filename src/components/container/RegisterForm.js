import React from 'react';
import { Button, Checkbox, Col, Form, Image, Input, Row } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './LoginForm.css'
import { Link } from 'react-router-dom';
export const RegisterForm = () => {
    const [form] = Form.useForm()
    return (
        <Form
            name="registration"
            className="register-form"
            initialValues={{ remember: true }}
            onFinish={() => { }}
        >
            <div className="title">Sign Up</div>
            <Row gutter={16}>
                <Col span={12}>
                    <Form.Item
                        name="firstname"
                        rules={[{ required: true, message: 'Please input your First Name!' }]}
                    >
                        <Input placeholder="First Name *" size="large" />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        name="lastname"
                    >
                        <Input placeholder="Last Name" size="large" />
                    </Form.Item>
                </Col>
            </Row>
            <Form.Item
                name="email"
                rules={[{ required: true, message: 'Please input your email' },{ type: 'email' }]}
            >
                <Input placeholder="Email *" size="large" />
            </Form.Item>            
            <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your Password!' },
            {min: 8, message:'Password must be atleast 8 Charaters.'}]}
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
                dependencies={['password']}
                hasFeedback
                rules={[{ required: true, message: 'Please confirm your Password!' },
                ({ getFieldValue }) => ({
                    validator(rule, value) {
                        if (!value || getFieldValue('password') === value) {
                            return Promise.resolve();
                        }
                        return Promise.reject('The two passwords that you entered do not match!');
                    },
                }),]}
            >
                <Input.Password
                    placeholder="Confirm Password *"
                    visibilityToggle
                    size="large"
                />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    {'Register'}
                </Button>
            </Form.Item>
        </Form>
    )
}
