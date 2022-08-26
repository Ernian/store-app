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

const { Search } = Input
const onSearch = (value: string) => console.log(value);

const items: MenuProps['items'] = [
    {
        label: <a href="#store">Store</a>,
        key: 'store',
        icon: <AppstoreOutlined />,
    },
    {
        label: 'Categories',
        key: 'categories',
        icon: <MenuOutlined />,
        children: [
            {
                label: <a href="#all">All products</a>,
                key: 'all',
                icon: <BarsOutlined />
            },
            {
                label: <a href="#electronics">Electronics</a>,
                key: 'electronics',
                icon: <AndroidOutlined />
            },
            {
                label: <a href="#jewelery">Jewelery</a>,
                key: 'jewelery',
                icon: <SketchOutlined />
            },
            {
                label: <a href="#men">Men's clothing</a>,
                key: 'men clothing',
                icon: <ManOutlined />
            },
            {
                label: <a href="#women">Women's clothing</a>,
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
                <a href="/cart">
                    <ShoppingCartOutlined style={{ fontSize: 22 }} />
                </a>
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