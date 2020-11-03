import React, { Component } from 'react'
import { Button, Input, Menu, Dropdown } from 'antd';
import { UserOutlined, DownOutlined } from '@ant-design/icons';

export default class Adduserform extends Component {
    state = {

        admin_name: "",
        admin_level: "",
        admin_username: "",
        admin_password: ""
    }
    AdminSubmit = () => {
        console.log(this.state)
        let token = localStorage.getItem('token')
        console.log(token)
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer' + token,

            },
            body: JSON.stringify(this.state)
        };
        fetch('http://65.0.14.105/API/superadmin/createAdminUser.php', requestOptions)
            .then(response => response.json())
            .then(data => console.log(data));
    };

    render() {

        const menu = (
            <Menu>
                <Menu.Item key="0 " >
                    <div onClick={() => { this.setState({ admin_level: 0 }) }}>Admin_level 0</div>
                </Menu.Item>
                <Menu.Item key="1">
                    <div onClick={() => { this.setState({ admin_level: 1 }) }} >Admin_level 1</div>
                </Menu.Item>
                <Menu.Item key="2">
                    <div onClick={() => { this.setState({ admin_level: 2 }) }} >Admin_level 2</div>
                </Menu.Item>


            </Menu>
        );

        return (
            <div>
                <form className="form" >
                    <Input className="form-input" size="large" placeholder="Admin_name" prefix={<UserOutlined />} onChange={(e) => { this.setState({ admin_name: e.target.value.trim() }) }} />
                    <Dropdown overlay={menu} trigger={['click']}>
                        <div className="ant-dropdown-link" >
                            Drop admin_level <DownOutlined />
                        </div>
                    </Dropdown>
                    <Input className="form-input" size="large" placeholder="Admin_user_name " onChange={(e) => { this.setState({ admin_username: e.target.value.trim() }) }} prefix={<UserOutlined />} />
                    <Input className="form-input" size="large" placeholder="Admin_password " onChange={(e) => { this.setState({ admin_password: e.target.value.trim() }) }} prefix={<UserOutlined />} />
                    <Button className="form-input" type="primary" onClick={this.AdminSubmit}>Add user</Button>
                </form>
            </div>
        )
    }
}
