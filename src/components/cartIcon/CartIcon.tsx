import React from 'react'
import { Link } from 'react-router-dom'
import { Badge } from 'antd'
import { ShoppingCartOutlined } from '@ant-design/icons'
import { useAppSelector, useAppDispatch } from '../../hooks/hooks'
import { clearSearchText } from '../../store/searchFilterSlice'

const CartIcon: React.FC = () => {
    const { totalCartProductsCount } = useAppSelector(state => state.cart)
    const dispatch = useAppDispatch()
    const onClearSearchText = () => dispatch(clearSearchText())

    return (
        <Badge count={totalCartProductsCount} status='success' offset={[8, 40]}>
            <Link to="/cart" onClick={onClearSearchText}>
                <ShoppingCartOutlined style={{ fontSize: 22 }} />
            </Link>
        </Badge>
    )
}

export default CartIcon