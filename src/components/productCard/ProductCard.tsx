import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Card, Button, Rate, notification } from 'antd'
import { ShoppingCartOutlined, SmileOutlined } from '@ant-design/icons'
import type { NotificationPlacement } from 'antd/es/notification'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { addProductToCart, incProductCount } from '../../store/cartSlice'
import { IProductProperties } from '../../types'
import { sizes } from '../../consts'

const { Meta } = Card;

const ProductCard: React.FC<IProductProperties> = (props: IProductProperties) => {
    const dispatch = useAppDispatch()
    const { cartProducts } = useAppSelector(state => state.cart)

    const placement: NotificationPlacement = 'bottomRight'
    function buttonHandler() {
        const isProductInCart = !!cartProducts.find(product => product.id === props.id)
        if (!isProductInCart) {
            dispatch(addProductToCart({ ...props, count: 1 }))
        } else {
            dispatch(incProductCount(props.id))
        }
        notification.open({
            message: `${props.title} added to cart`,
            description: 'Visit cart page to see all products',
            icon: <SmileOutlined style={{ color: '#108ee9' }} />,
            placement
        })
    }

    return (
        <Col
            xs={sizes.xs}
            sm={sizes.sm}
            md={sizes.md}
            lg={sizes.lg}
            xl={sizes.xl}
            xxl={sizes.xxl}
        >
            <Card
                hoverable={true}
                style={{
                    height: 440,
                    marginTop: 20,
                    padding: 10,
                    borderRadius: 20,
                    position: 'relative',
                }}
                cover={<img alt={props.title} src={props.image} height={240} width='auto' />}
            >
                <Meta title={props.title} />
                <p className='product-price'>
                    {props.price} &#36;
                </p>
                <Rate
                    allowHalf
                    disabled
                    defaultValue={props.rating.rate}
                    style={{ display: 'flex', justifyContent: 'center' }}
                />
                <Link to={`/product/${props.id}`}>
                    <div
                        style={{
                            position: 'absolute',
                            width: '100%',
                            height: 310,
                            top: 0,
                            left: 0,
                        }}
                    />
                </Link>
                <Button
                    type='default'
                    icon={<ShoppingCartOutlined />}
                    size='large'
                    style={{ margin: '15px auto', fontSize: '18px', display: 'block' }}
                    onClick={buttonHandler}
                >
                    Add to cart
                </Button>
            </Card>
        </Col>
    )
}

export default ProductCard
