import React, { useState } from 'react';
import { Menu, Badge, Input } from 'antd';
import {
    AppstoreOutlined,
    MenuOutlined,
    AndroidOutlined,
    SketchOutlined,
    ManOutlined,
    WomanOutlined,
    ShoppingCartOutlined,
    BarsOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import './header.css'
import { Link } from 'react-router-dom';

const { Search } = Input
const onSearch = (value: string) => console.log(value);

const items: MenuProps['items'] = [
    {
        label: <Link to='/'>Store</Link>,
        key: 'store',
        icon: <AppstoreOutlined />,
    },
    {
        label: 'Categories',
        key: 'categories',
        icon: <MenuOutlined />,
        children: [
            {
                label: <Link to='/products/all'>All products</Link>,
                key: 'all',
                icon: <BarsOutlined />
            },
            {
                label: <Link to='/products/electronics'>Electronics</Link>,
                key: 'electronics',
                icon: <AndroidOutlined />
            },
            {
                label: <Link to='/products/jewelery'>Jewelery</Link>,
                key: 'jewelery',
                icon: <SketchOutlined />
            },
            {
                label: <Link to='/products/men'>Men's clothing</Link>,
                key: 'men clothing',
                icon: <ManOutlined />
            },
            {
                label: <Link to='/products/women'>Women's clothing</Link>,
                key: 'women clothing',
                icon: <WomanOutlined />
            },
        ],
    },
    {
        label: (
            <Search
                placeholder="input search text"
                allowClear
                onSearch={onSearch}
                id='search-input'
            />
        ),
        key: 'search',
    },
    {
        label: (
            <Badge count={42} status='success' offset={[8, 40]}>
                <Link to="/cart">
                    <ShoppingCartOutlined style={{ fontSize: 22 }} />
                </Link>
            </Badge>
        ),
        key: 'cart',
        style: { marginLeft: 'auto', marginRight: 12 }
    }
];

const Header: React.FC = (): JSX.Element => {
    const [current, setCurrent] = useState('store');
    const onClick: MenuProps['onClick'] = e => {
        setCurrent(e.key);
    };

    return (
        <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={items}
        />
    )
}

export default Header