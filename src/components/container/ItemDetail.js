import { Card, Col, Form, Input, Row, Select } from "antd";
import TextArea from "antd/lib/input/TextArea";
import React from "react";

const categories = [
  {
    title: "Saree",
    image:
      "https://www.pngitem.com/pimgs/m/282-2827593_transparent-silk-saree-png-pure-silk-sarees-png.png",
  },
  {
    title: "Kurti",
    image:
      "https://www.nicepng.com/png/detail/260-2603242_womens-cotton-kurti-kurti-top.png",
  },
  {
    title: "Leggings",
    image:
      "https://www.indiwear.com/media/catalog/product/cache/1/image/1000x1200/9df78eab33525d08d6e5fb8d27136e95/a/n/ankle-length-leggings-women-pack-of-2-2001278623.jpg",
  },
  {
    title: "Accessories",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQES3FjPpZJg8gS3HSHSFmeh8J3jKbKCcIxgg&usqp=CAU",
  },
  {
    title: "Materials",
    image: "https://3.imimg.com/data3/QR/SI/MY-1334/103029783_o-500x500.jpg",
  },
];
export const ItemDetail = () => {
  return (
    <Card title={"Item Details"}>
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            label="Title"
            name="title"
            rules={[{ required: true, message: "Please input your title!" }]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label="Category"
            name="category"
            rules={[{ required: true, message: "Please select the category!" }]}
          >
            <Select>
              {categories.map(({ title, image }) => (
                <Select.Option value={title}>
                  <div
                    style={{
                      display: "flex",
                      height: 30,
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    {title}
                    <img style={{ width: 40 }} src={image} />
                  </div>
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={24}>
          <Form.Item label="Description" name="description" initialValue="">
            <TextArea autoSize={false} row={10} />
          </Form.Item>
        </Col>
      </Row>
    </Card>
  );
};
