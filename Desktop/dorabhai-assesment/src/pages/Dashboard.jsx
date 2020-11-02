import { Layout, Menu, Breadcrumb, Input } from 'antd';
import AddUserForm from '../components/AddUserForm';
import {

    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import React, { Component } from 'react';

const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;

class DashBoard extends Component {
    state = {
        collapsed: false,
        addUser: false,
        allUser: false
    };

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    render() {
        const { collapsed } = this.state;
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
                    <div className="logo" />
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">


                        <SubMenu key="sub1" icon={<UserOutlined />} title="User">
                            <Menu.Item key="3" onClick={() => { this.setState({ addUser: true }) }}>Add User</Menu.Item>
                            <Menu.Item key="4" onClick={() => { this.setState({ allUser: true, addUser: false }) }}>All User</Menu.Item>

                        </SubMenu>
                        <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
                            <Menu.Item key="6">Team 1</Menu.Item>
                            <Menu.Item key="8">Team 2</Menu.Item>
                        </SubMenu>

                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0 }} />
                    <Content style={{ margin: '0 16px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>User</Breadcrumb.Item>

                        </Breadcrumb>
                        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                            {this.state.addUser ? <AddUserForm /> : this.state.allUser ? 'haii all users' : ""}
                            {}
                        </div>
                    </Content>

                </Layout>
            </Layout>
        );
    }
}

export default DashBoard;