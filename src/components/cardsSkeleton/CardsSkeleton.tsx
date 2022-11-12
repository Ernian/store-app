import React from 'react'
import { Col, Skeleton } from 'antd';
import { sizes } from '../../consts';

const CardsSkeleton: React.FC = () => {
    return (
        <>
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
        </>
    )
}

export default CardsSkeleton
