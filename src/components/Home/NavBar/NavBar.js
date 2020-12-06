import React from 'react';
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { SubMenu } = Menu;

const NavBar = () => {

    const state = {
        current: 'mail',
    };

    const handleHeadlines = e => {
        console.log('click');
    };



    return (
        <div>
            <Menu selectedKeys={[state.current]} mode="horizontal">

                <Menu.Item key="mail" icon={<AppstoreOutlined />}>
                    <Link to='/'>
                        Top headlines
                    </Link>
                </Menu.Item>

                <Menu.Item key="app" onClick={handleHeadlines} icon={<AppstoreOutlined />}>
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