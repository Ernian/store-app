import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShoppingCartOutlined } from '@ant-design/icons'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import useStoreRequest from '../hooks/useStoreRequest'
import { IProductProperties } from '../types';

import {
    Col,
    Row,
    Image,
    Skeleton,
    Button,
    Rate,
    Typography,
} from 'antd';

const ProductPage: React.FC = () => {

    const { Text } = Typography

    const { id } = useParams()
    const { products } = useAppSelector(state => state.products)
    const { getProductById } = useStoreRequest()
    const [product, setProduct] = useState<IProductProperties | null>(null)

    function findProduct(productId: string | undefined) {
        if (!productId) return null
        const product = products.find(({ id }) => id === parseInt(productId))
        if (!product) {
            console.log('findProduct', '!product', product)
            getProductById(productId)
            return
        }
        setProduct(product)
    }

    useEffect(() => {
        findProduct(id)
    }, [id])

    return (
        <Row justify='center'>
            <Col
                style={{ boxSizing: 'border-box', padding: 20 }}
                xs={{ span: 20 }}
                sm={{ span: 12 }}
                md={{ span: 12 }}
                lg={{ span: 11 }}
                xl={{ span: 10 }}
                xxl={{ span: 10 }}
            >
                {product ?
                    <Image src={product.image} />
                    :
                    <Skeleton.Image
                        active={true}
                        style={{
                            height: 350,
                            width: 350
                        }}
                    />

                }
            </Col>
            <Col
                style={{ boxSizing: 'border-box', padding: 20 }}
                xs={{ span: 20 }}
                sm={{ span: 12 }}
                md={{ span: 12 }}
                lg={{ span: 11 }}
                xl={{ span: 10 }}
                xxl={{ span: 10 }}
            >
                {product ?
                    <>
                        <h2><Text type='success'>{product.title}</Text></h2>
                        <p>{product.description}</p>
                        <p className='product-price'>{product.price} &#36;</p>
                        <Rate
                            allowHalf
                            disabled
                            defaultValue={product.rating.rate}
                        />
                        <Button
                            type='default'
                            icon={<ShoppingCartOutlined />}
                            size='large'
                            style={{ marginTop: 20, fontSize: '18px', display: 'block' }}
                        >
                            Add to cart
                        </Button>
                    </>
                    : <Skeleton.Input />
                }
            </Col>
        </Row>
    )
}

export default ProductPage