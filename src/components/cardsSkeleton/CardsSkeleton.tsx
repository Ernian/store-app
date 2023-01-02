import React from 'react'
import { Col, Row, Skeleton } from 'antd';
import { sizes } from '../../consts';

const CardsSkeleton: React.FC = () => {
    return (
        <Row
            style={{ marginTop: 20 }}
            gutter={
                [
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
                <div className='card'>
                    <Skeleton.Image active={true} />
                    <br />
                    <br />
                    <Skeleton.Input active={true} />
                    <br />
                    <br />
                    <Skeleton.Input active={true} />
                </div>
            </Col>
            <Col
                xs={sizes.xs}
                sm={sizes.sm}
                md={sizes.md}
                lg={sizes.lg}
                xl={sizes.xl}
                xxl={sizes.xxl}
            >
                <div className='card'>
                    <Skeleton.Image active={true} />
                    <br />
                    <br />
                    <Skeleton.Input active={true} />
                    <br />
                    <br />
                    <Skeleton.Input active={true} />
                </div>
            </Col>
            <Col
                xs={sizes.xs}
                sm={sizes.sm}
                md={sizes.md}
                lg={sizes.lg}
                xl={sizes.xl}
                xxl={sizes.xxl}
            >
                <div className='card'>
                    <Skeleton.Image active={true} />
                    <br />
                    <br />
                    <Skeleton.Input active={true} />
                    <br />
                    <br />
                    <Skeleton.Input active={true} />
                </div>
            </Col>
            <Col
                xs={sizes.xs}
                sm={sizes.sm}
                md={sizes.md}
                lg={sizes.lg}
                xl={sizes.xl}
                xxl={sizes.xxl}
            >
                <div className='card'>
                    <Skeleton.Image active={true} />
                    <br />
                    <br />
                    <Skeleton.Input active={true} />
                    <br />
                    <br />
                    <Skeleton.Input active={true} />
                </div>
            </Col>
            <Col
                xs={sizes.xs}
                sm={sizes.sm}
                md={sizes.md}
                lg={sizes.lg}
                xl={sizes.xl}
                xxl={sizes.xxl}
            >
                <div className='card'>
                    <Skeleton.Image active={true} />
                    <br />
                    <br />
                    <Skeleton.Input active={true} />
                    <br />
                    <br />
                    <Skeleton.Input active={true} />
                </div>
            </Col>
            <Col
                xs={sizes.xs}
                sm={sizes.sm}
                md={sizes.md}
                lg={sizes.lg}
                xl={sizes.xl}
                xxl={sizes.xxl}
            >
                <div className='card'>
                    <Skeleton.Image active={true} />
                    <br />
                    <br />
                    <Skeleton.Input active={true} />
                    <br />
                    <br />
                    <Skeleton.Input active={true} />
                </div>
            </Col>
            <Col
                xs={sizes.xs}
                sm={sizes.sm}
                md={sizes.md}
                lg={sizes.lg}
                xl={sizes.xl}
                xxl={sizes.xxl}
            >
                <div className='card'>
                    <Skeleton.Image active={true} />
                    <br />
                    <br />
                    <Skeleton.Input active={true} />
                    <br />
                    <br />
                    <Skeleton.Input active={true} />
                </div>
            </Col>
            <Col
                xs={sizes.xs}
                sm={sizes.sm}
                md={sizes.md}
                lg={sizes.lg}
                xl={sizes.xl}
                xxl={sizes.xxl}
            >
                <div className='card'>
                    <Skeleton.Image active={true} />
                    <br />
                    <br />
                    <Skeleton.Input active={true} />
                    <br />
                    <br />
                    <Skeleton.Input active={true} />
                </div>
            </Col>
        </Row>
    )
}

export default CardsSkeleton
