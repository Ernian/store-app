import React from 'react'
import { Col, Row } from 'antd';
import CardSkeleton from '../components/cardSkeleton/CardSkeleton';

const sizes = {
    xs: 22,
    sm: 20,
    md: 12,
    lg: 8,
    xl: 6,
    xxl: 6,
}

const ProductsPage: React.FC = (): JSX.Element => {
    const [loading, setLoading] = React.useState(true)

    // 'https://fakestoreapi.com/products/category/men\'s clothing'
    // 'https://fakestoreapi.com/products/category/women\'s clothing'

    return (
        <Row
            gutter={[
                { md: 16, lg: 16, xl: 16, xxl: 24 },
                { xs: 24, sm: 24, md: 16, lg: 16, xl: 16, xxl: 24 }
            ]}
            justify='center'
        >
            <Col
                xs={sizes.xs}
                sm={sizes.sm}
                md={sizes.md}
                lg={sizes.lg}
                xl={sizes.xl}
                xxl={sizes.xxl}
            >
                <CardSkeleton />
            </Col>
            <Col xs={sizes.xs} sm={sizes.sm} md={sizes.md} lg={sizes.lg} xl={sizes.xl} xxl={sizes.xxl}>
                <CardSkeleton />
            </Col>
            <Col xs={sizes.xs} sm={sizes.sm} md={sizes.md} lg={sizes.lg} xl={sizes.xl} xxl={sizes.xxl}>
                <CardSkeleton />
            </Col>
            <Col xs={sizes.xs} sm={sizes.sm} md={sizes.md} lg={sizes.lg} xl={sizes.xl} xxl={sizes.xxl}>
                <CardSkeleton />
            </Col>
            <Col xs={sizes.xs} sm={sizes.sm} md={sizes.md} lg={sizes.lg} xl={sizes.xl} xxl={sizes.xxl}>
                <CardSkeleton />
            </Col>
            <Col xs={sizes.xs} sm={sizes.sm} md={sizes.md} lg={sizes.lg} xl={sizes.xl} xxl={sizes.xxl}>
                <CardSkeleton />
            </Col>
            <Col xs={sizes.xs} sm={sizes.sm} md={sizes.md} lg={sizes.lg} xl={sizes.xl} xxl={sizes.xxl}>
                <CardSkeleton />
            </Col>
            <Col xs={sizes.xs} sm={sizes.sm} md={sizes.md} lg={sizes.lg} xl={sizes.xl} xxl={sizes.xxl}>
                <CardSkeleton />
            </Col>
        </Row>
    )
}

export default ProductsPage