import React, { Component } from 'react'
import { Button, Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';

export default class Adduserform extends Component {

    render() {
        return (
            <div>
                <form className="form" onSubmit={this.addUserSubmit}>
                    <Input className="form-input" size="large" placeholder="Enter your name" prefix={<UserOutlined />} />
                    <Input className="form-input" size="large" placeholder="Enter your email id " prefix={<UserOutlined />} />
                    <Input className="form-input" size="large" placeholder="Enter your Phone number" prefix={<UserOutlined />} />
                    <Button className="form-input" type="primary">Add user</Button>
                </form>
            </div>
        )
    }
}
