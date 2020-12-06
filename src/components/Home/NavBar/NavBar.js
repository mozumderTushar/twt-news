import React from 'react';
import { Menu } from 'antd';
import {  AppstoreOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';


const NavBar = () => {

    return (
        <div>
            <Menu mode="horizontal" >

                <Menu.Item key="mail" icon={<AppstoreOutlined />}>
                    <Link to='/'>
                        Top headlines
                    </Link>
                </Menu.Item>

                <Menu.Item key="app" icon={<AppstoreOutlined />}>
                    <Link to='/everything'>
                        Everything
                    </Link>
                </Menu.Item>

                <Menu.Item key="string" icon={<AppstoreOutlined />}>
                    <Link to='/source'>
                        Source
                    </Link>
                </Menu.Item>

            </Menu>
        </div>
    );
};

export default NavBar;