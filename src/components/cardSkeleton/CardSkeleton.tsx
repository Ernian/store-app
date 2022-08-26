import React from 'react'
import { Skeleton } from 'antd';

const CardSkeleton: React.FC = (): JSX.Element => {
    return (
        <div className='card'>
            <Skeleton.Image active={true} />
            <br />
            <br />
            <Skeleton.Input active={true} />
            <br />
            <br />
            <Skeleton.Input active={true} />
        </div>
    )
}

export default CardSkeleton
