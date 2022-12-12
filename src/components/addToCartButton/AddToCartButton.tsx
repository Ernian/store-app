import { CSSProperties } from 'react'
import { Button, notification, } from 'antd'
import { ShoppingCartOutlined, SmileOutlined } from '@ant-design/icons'
import type { NotificationPlacement } from 'antd/es/notification'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { addProductToCart, incProductCount } from '../../store/cartSlice'
import { IProductProperties } from '../../types'

const AddToCartButton = ({ css, product }:
    {
        css: CSSProperties,
        product: IProductProperties
    }) => {
    const { cartProducts } = useAppSelector(state => state.cart)
    const dispatch = useAppDispatch()

    const placement: NotificationPlacement = 'bottomRight'

    function buttonHandler() {
        const isProductInCart = !!cartProducts.find(cartProduct => cartProduct.id === product.id)

        if (!isProductInCart) {
            dispatch(addProductToCart({ ...product, count: 1 }))
        } else {
            dispatch(incProductCount(product.id))
        }
        notification.open({
            message: `${product.title} added to cart`,
            description: 'Visit cart page to see all products',
            icon: <SmileOutlined style={{ color: '#108ee9' }} />,
            placement
        })
    }

    return (
        <Button
            type='default'
            icon={<ShoppingCartOutlined />}
            size='large'
            style={css}
            onClick={buttonHandler}
        >
            Add to cart
        </Button>
    )
}

export default AddToCartButton