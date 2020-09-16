import React from 'react'
import { Image, Layout } from 'antd'
import logo from 'assets/images/logo_2.png'
import './Menu.css'
export const Menu = () => {
    return (
        <Layout.Header style={{ background: '#5c0099',    boxShadow: '0 3px 3px rgb(0 0 0 / 40%)',
        zIndex: 5 }}>
            <Image src={logo} className={'logo'} />
        </Layout.Header>
    )
}
