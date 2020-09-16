import { Card, Col, Empty, Row } from 'antd'
import Meta from 'antd/lib/card/Meta'
import { db } from 'firebase/setup'
import React, { useEffect, useState } from 'react'

export const ItemPreview = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        db.collection("venyl")
            .onSnapshot(function (doc) {
                doc.forEach(col => {
                    console.error(col.data())
                    setItems(prev => [...prev, { ...col.data() }])
                })
            });
    }, [])
    if (items.length)
        return (
            <Col style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '10px',
                height: '64%',
                overflowY: 'scroll'
            }}>
                {items.map(item =>
                    <Card
                        style={{ width: 200 }}
                        cover={<img alt="example" src={item.images[0]} width={80} />}
                    >
                        <Meta title={item.title} description={item.category} />
                    </Card>)}
            </Col>
        )
    return <Empty
        style={{ margin: 20 }}
        description={
            <span>
                No New Item added
            </span>
        }
    >
    </Empty>
}
