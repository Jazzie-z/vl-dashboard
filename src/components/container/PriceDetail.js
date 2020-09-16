import { Card, Col, Form, InputNumber, Row } from 'antd'
import React from 'react'

export const PriceDetail = () => {
    return (
        <Card title={'Price Details'}>
            <Row gutter={16}>
                <Col span={8}>
                    <Form.Item
                        label="Price"
                        name="price"
                        rules={[{ required: true, message: 'Please input your price!' }]}
                    >
                        <InputNumber style={{ width: '100%' }} />
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item
                        label="Offer %"
                        name="offer"
                    >
                        <InputNumber style={{ width: '100%' }} />
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item
                        label="No. of Item available"
                        name="available"
                        rules={[{ required: true, message: 'Please input your availablity!' }]}
                    >
                        <InputNumber style={{ width: '100%' }} />
                    </Form.Item>
                </Col>
            </Row>
        </Card>
    )
}
