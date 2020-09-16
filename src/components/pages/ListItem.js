import React, { useContext, useEffect, useState } from "react";
import { db } from "firebase/setup";
import { Card, Row, Spin } from "antd";
import Meta from "antd/lib/card/Meta";
import { UserContext } from "contexts/user.context";
import "./ListItem.css";

export const ListItem = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const userContext = useContext(UserContext);
  const { uid } = userContext.user;
  useEffect(() => {
    if (uid) {
      db.collection("users")
        .doc(uid)
        .collection("items")
        .onSnapshot(function (doc) {
          doc.forEach((col) => {
            setItems((prev) => [...prev, { ...col.data(), id: col.id }]);
            console.error(col.data());
          });
        });
    }
  }, [uid]);
  useEffect(() => {
    if (items.length) setLoading(false);
  }, [items]);

  if (loading)
    return (
      <div className="loader">
        <Spin size="large" />
      </div>
    );
  return (
    <Row>
      {items.map((item) => (
        <Card
          key={item.id}
          hoverable
          style={{ border: "none", width: 260, margin: "10px" }}
          cover={<img alt="example" src={item.images[0]} height={200} />}
        >
          <Meta style={{}} title={item.title} description={item.category} />
        </Card>
      ))}
    </Row>
  );
};
