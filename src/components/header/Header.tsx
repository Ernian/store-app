import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate, useLocation } from 'react-router-dom'
import { Menu, Input } from 'antd'
import type { MenuProps } from 'antd'
import { useAppSelector, useAppDispatch } from '../../hooks/hooks'
import { setSearchText, clearSearchText } from '../../store/searchFilterSlice'
import CartIcon from '../cartIcon/CartIcon'
import {
    AppstoreOutlined,
    MenuOutlined,
    AndroidOutlined,
    SketchOutlined,
    ManOutlined,
    WomanOutlined,
} from '@ant-design/icons'
import './header.css'

const Header: React.FC = () => {
    const [current, setCurrent] = useState('store')
    const navigate = useNavigate()
    const onClick: MenuProps['onClick'] = event => setCurrent(event.key)
    const { searchText } = useAppSelector(state => state.searchFilter)
    const dispatch = useAppDispatch()
    const { pathname } = useLocation()

    const { Search } = Input

    const onSearch = (searchQuery: string) => {
        if (!searchQuery || pathname === '/search') return
        navigate('/search')
    }

    const onChangeSearchText = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearchText(event.target.value))
    }

    const onClearSearchText = () => dispatch(clearSearchText())

    const items: MenuProps['items'] = [
        {
            label: <Link to='/' onClick={onClearSearchText}>Store</Link>,
            key: 'store',
            icon: <AppstoreOutlined />,
        },
        {
            label: 'Categories',
            key: 'categories',
            icon: <MenuOutlined />,
            children: [
                {
                    label: <Link to='/products/electronics' onClick={onClearSearchText}>Electronics</Link>,
                    key: 'electronics',
                    icon: <AndroidOutlined />
                },
                {
                    label: <Link to='/products/jewelery' onClick={onClearSearchText}>Jewelery</Link>,
                    key: 'jewelery',
                    icon: <SketchOutlined />
                },
                {
                    label: <Link to='/products/men' onClick={onClearSearchText}>Men's clothing</Link>,
                    key: 'men clothing',
                    icon: <ManOutlined />
                },
                {
                    label: <Link to='/products/women' onClick={onClearSearchText}>Women's clothing</Link>,
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
                    value={searchText}
                    onChange={onChangeSearchText}
                />
            ),
            key: 'search',
        },
        {
            label: <CartIcon />,
            key: 'cart',
            style: { marginLeft: 'auto', marginRight: 12 }
        }
    ]

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