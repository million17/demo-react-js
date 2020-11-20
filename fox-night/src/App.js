import React from "react";
import {Layout, Breadcrumb} from "antd";
import { IdcardOutlined } from '@ant-design/icons';
import { BrowserRouter as Router } from 'react-router-dom';
import MenuLayout from './components/menu';
import RouteLayout from './components/route';
const {Header, Content, Footer} = Layout;




export default function App() {
    return (
        <Router >
            <Layout className="layout">
                <Header>
                    <div className="logo"/>
                    <MenuLayout />
                </Header>
                <Content style={{padding: '0 50px'}}>
                    <Breadcrumb style={{margin: '16px 0'}}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                        <IdcardOutlined />
                    </Breadcrumb>
                    <div className="site-layout-content">
                        <RouteLayout />
                    </div>
                </Content>
                <Footer style={{textAlign: 'center'}}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </Router>
    );
}


