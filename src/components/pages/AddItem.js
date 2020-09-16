import { Button, Card, Form, Layout, notification, Space } from 'antd'
import { ImageUpload } from 'components/container/ImageUpload';
import { ItemDetail } from 'components/container/ItemDetail';
import { ItemPreview } from 'components/container/ItemPreview';
import { PriceDetail } from 'components/container/PriceDetail';
import { db } from 'firebase/setup'
import React, { useState } from 'react'
const { Header, Sider, Content } = Layout;
export const AddItem = () => {
    const [images, setImages] = useState([])
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false)
    const [form] = Form.useForm()
    const onFinish = (value) => {
        setLoading(true)
        const payload = { ...value, images };
        console.error(payload)
        debugger
        db.collection("venyl").add(payload).then(() => {
            notification['success']({
                message: 'Success',
                description:
                    'The item is added',
            });
        }).catch((err) => {
            notification['error']({
                message: 'Error',
                description: err,
            });
        }).finally(() => {
            form.resetFields();
            setLoading(false);
        })

    }
    const buttonItemLayout = {
        wrapperCol: {span: 14, offset: 4},
    };
    return (
        <Form
            form={form}
            name="basic"
            layout={'vertical'}
            onFinish={onFinish}            
        >
            <Space direction="vertical" style={{ width: '100%' }}>
                <ItemDetail />
                <PriceDetail/>
                <ImageUpload setImages={setImages} />                
                <Form.Item style={{textAlign: 'center'}}>
                <Button {...buttonItemLayout}
                type="primary" htmlType="submit" loading={loading} style={{ width: '300px',  borderColor: 'transparent' }}>
                    {'Submit'}
                </Button>
            </Form.Item>
            </Space>            
        </Form>
    )
}
