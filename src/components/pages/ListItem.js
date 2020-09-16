import React, { useEffect, useState } from 'react';
import { db } from 'firebase/setup';
import { Card, Row } from 'antd';
import Meta from 'antd/lib/card/Meta';

export const ListItem = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        db.collection("venyl")
            .onSnapshot(function (doc) {
                doc.forEach(col => {
                    setItems(prev => [...prev, { ...col.data(), id: col.id }])
                })
            });
    }, [])
    const gridStyle = {
        width: '25%',
        textAlign: 'center',
    };
    console.error('items', items)
    return (
        <Row >
            {items.map(item =>
                <Card
                    key={item.id}
                    hoverable
                    style={{ border: 'none', width: 260, margin: '10px' }}
                    cover={<img alt="example" src={item.images[0]} height={200} />}
                >
                    <Meta style={{}} title={item.title} description={item.category} />
                </Card>
            )}
        </Row>
    )
}
