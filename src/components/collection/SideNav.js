import React from 'react'
import { Menu } from 'antd';
import { Link, useHistory } from 'react-router-dom';
export const SideNav = () => {
    const history = useHistory()
    const activeKey = history.location.pathname;
    return (
        <Menu
            mode="inline"
            defaultSelectedKeys={[activeKey]}
            style={{ height: '100%', borderRight: 0, paddingTop: 20, fontWeight:'500' }}
        >
            <Menu.Item key={'/'}>
                <Link to="/">List Items</Link>
            </Menu.Item>
            <Menu.Item key={'/add'}>
                <Link to="/add">Add Item</Link>
            </Menu.Item>
            <Menu.Item >Logout</Menu.Item>
        </Menu>
    )
}
