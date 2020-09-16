import { Button, Form, Space } from "antd";
import { ImageUpload } from "components/container/ImageUpload";
import { ItemDetail } from "components/container/ItemDetail";
import { PriceDetail } from "components/container/PriceDetail";
import { UserContext } from "contexts/user.context";
import React, { useContext, useState } from "react";
import DatabaseService from "services/store.service";

export const AddItem = () => {
  const [images, setImages] = useState([]);
  const userContext = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const onFinish = async (value) => {
    setLoading(true);
    const payload = { ...value, images };
    await new DatabaseService(userContext.user.uid).addStoreItem(payload);
    form.resetFields();
    setLoading(false);
  };
  const buttonItemLayout = {
    wrapperCol: { span: 14, offset: 4 },
  };
  return (
    <Form form={form} name="basic" layout={"vertical"} onFinish={onFinish}>
      <Space direction="vertical" style={{ width: "100%" }}>
        <ItemDetail />
        <PriceDetail />
        <ImageUpload setImages={setImages} />
        <Form.Item style={{ textAlign: "center" }}>
          <Button
            {...buttonItemLayout}
            type="primary"
            htmlType="submit"
            loading={loading}
            style={{ width: "300px", borderColor: "transparent" }}
          >
            {"Submit"}
          </Button>
        </Form.Item>
      </Space>
    </Form>
  );
};
