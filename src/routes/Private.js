import { Layout } from 'antd'
import React from 'react'
import { AddItem } from 'components/pages/AddItem';
import {
    Switch,
    Route
} from "react-router-dom";
import { ListItem } from 'components/pages/ListItem';
import { Menu } from 'components/collection/Menu';
import { Login } from 'components/pages/Login';
import { SideNav } from 'components/collection/SideNav';

const { Sider, Content } = Layout;

export const Private = () => {
    return (
        <Layout style={{ height: "100vh" }}>
            <Menu />
            <Layout>
                <Sider width={256} theme={'light'}>
                    <Layout >
                        <SideNav />
                    </Layout>
                </Sider>
                <Content style={{ margin: '10px' }}>
                    <Switch>
                        <Route path="/" exact component={ListItem}></Route>
                        <Route path="/add" exact component={AddItem}></Route>
                    </Switch>
                </Content>
            </Layout>
        </Layout>
    )
}
