import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Card, Button, Rate } from 'antd'
import { sizes } from '../../consts'
import { ShoppingCartOutlined } from '@ant-design/icons'
import { IProductProperties } from '../../types'
import productSlice from '../../store/productSlice'

const { Meta } = Card;

const ProductCard: React.FC<IProductProperties> = (props: IProductProperties) => {
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
                >
                    Add to cart
                </Button>
            </Card>
        </Col>
    )
}

export default ProductCard
