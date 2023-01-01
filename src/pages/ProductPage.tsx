import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAppSelector } from '../hooks/hooks'
import useStoreRequest from '../hooks/useStoreRequest'
import { IProductProperties } from '../types'
import AddToCartButton from '../components/addToCartButton/AddToCartButton'

import {
    Col,
    Row,
    Image,
    Skeleton,
    Rate,
    Typography,
} from 'antd'

const ProductPage: React.FC = () => {
    const { Text } = Typography
    const { id: productId } = useParams()
    const [product, setProduct] = useState<IProductProperties | null>(null)
    const [error, setError] = useState<boolean>(false)
    const { products } = useAppSelector(state => state.products)
    const { getProductById } = useStoreRequest()

    useEffect(() => {
        (async () => {
            try {
                if (!productId) return null
                const product = products.find(({ id }) => id === parseInt(productId))
                if (!product) {
                    const fetchedProduct = await getProductById(productId)
                    return setProduct(fetchedProduct)
                }
                setProduct(product)
            } catch (err) {
                console.error(err)
                setError(true)
            }
        })()
    }, [])

    return (
        <>
            {error && <h2 style={{ marginTop: 20 }}>There is no product with id {productId}</h2>}
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
                        null
                    }
                    {(!product && !error) ?
                        <Skeleton.Image
                            active={true}
                            style={{
                                height: 350,
                                width: 350
                            }}
                        />
                        : null
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
                            <AddToCartButton
                                css={{
                                    marginTop: 20,
                                    fontSize: '18px',
                                    display: 'block'
                                }}
                                product={product}
                            />
                        </>
                        : null
                    }
                    {(!product && !error) ? <Skeleton.Input /> : null}
                </Col>
            </Row>
        </>
    )
}

export default ProductPage