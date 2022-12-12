import { Link } from 'react-router-dom'
import { Col, Card, Rate } from 'antd'
import AddToCartButton from '../addToCartButton/AddToCartButton'
import { IProductProperties } from '../../types'
import { sizes } from '../../consts'

const { Meta } = Card;

const ProductCard = ({ product }: { product: IProductProperties }) => {

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
                cover={<img alt={product.title} src={product.image} height={240} width='auto' />}
            >
                <Meta title={product.title} />
                <p className='product-price'>
                    {product.price} &#36;
                </p>
                <Rate
                    allowHalf
                    disabled
                    defaultValue={product.rating.rate}
                    style={{ display: 'flex', justifyContent: 'center' }}
                />
                <Link to={`/product/${product.id}`}>
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
                <AddToCartButton
                    css={{
                        margin: '15px auto',
                        fontSize: '18px',
                        display: 'block'
                    }}
                    product={product}
                />
            </Card>
        </Col>
    )
}

export default ProductCard
