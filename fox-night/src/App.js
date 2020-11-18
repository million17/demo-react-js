import React from "react";
import About from './container/About/index';
import Users from './container/Users/index';
import {Layout, Breadcrumb} from "antd";
import { IdcardOutlined } from '@ant-design/icons';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MenuLayout from './components/menu';

const {Header, Content, Footer} = Layout;

export default function App() {
    return (
        <Router>
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
                        <Route exact path="/" component={About}/>
                        <Route path="/category" component={Users}/>
                    </div>
                </Content>
                <Footer style={{textAlign: 'center'}}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </Router>
    );
}


