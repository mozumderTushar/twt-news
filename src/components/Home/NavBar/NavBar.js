import React from 'react';
import { Menu } from 'antd';
import { BorderlessTableOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';


const NavBar = () => {

    return (
        <div>
            <Menu mode="horizontal" >

                <Menu.Item key="mail" icon={<BorderlessTableOutlined />}>
                    <Link to='/'>
                        Top headlines
                    </Link>
                </Menu.Item>

                <Menu.Item key="app" icon={<BorderlessTableOutlined />}>
                    <Link to='/everything'>
                        Everything
                    </Link>
                </Menu.Item>

                <Menu.Item key="string" icon={<BorderlessTableOutlined />}>
                    <Link to='/source'>
                        Source
                    </Link>
                </Menu.Item>

            </Menu>
        </div>
    );
};

export default NavBar;