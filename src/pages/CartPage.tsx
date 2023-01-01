import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import {
    incProductCount,
    decProductCount,
    deleteProductFromCart,
} from '../store/cartSlice'
import { Table, Tag } from 'antd'
import {
    DownCircleOutlined,
    UpCircleOutlined,
    DeleteOutlined
} from '@ant-design/icons'
import type { ColumnsType } from 'antd/es/table'

const CartPage = () => {
    const {
        cartProducts,
        totalCartProductsCount,
        totalCartProductsPrice
    } = useAppSelector(state => state.cart)

    const dispatch = useAppDispatch()

    const decCartProductCount = (product: ICartProductProperties) => {
        dispatch(decProductCount(product.key))
        if (!product.count) dispatch(deleteProductFromCart(product.key))
    }

    interface ICartProductProperties {
        key: number
        title: string
        price: number
        count: number
    }

    const columns: ColumnsType<ICartProductProperties> = [
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
            render: (text, product) => <Link to={`/product/${product.key}`}>{text}</Link>,
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Count',
            dataIndex: 'count',
            key: 'count',
            render: (count, product) => (
                <>
                    <DownCircleOutlined
                        className='cart-icon'
                        onClick={() => decCartProductCount(product)} />
                    {count}
                    <UpCircleOutlined
                        className='cart-icon'
                        onClick={() => dispatch(incProductCount(product.key))} />
                    <DeleteOutlined
                        className='cart-icon'
                        onClick={() => dispatch(deleteProductFromCart(product.key))} />
                </>
            )
        },
    ]

    const listCartProducts: ICartProductProperties[] = cartProducts
        .reduce((list: ICartProductProperties[], product) => {
            if (product.count !== undefined && product.count > 0) {
                list.push({
                    key: product.id,
                    title: product.title,
                    price: product.price,
                    count: product.count
                })
            }
            return list
        }, [])

    return (
        <>
            {totalCartProductsCount ? (
                <>
                    <Table
                        columns={columns}
                        dataSource={listCartProducts}
                        pagination={false}
                        bordered={true}
                    />
                    <Tag
                        color="processing"
                        style={{
                            fontSize: 18,
                            marginTop: 30,
                            padding: 10,
                        }}
                    >
                        Total price: {totalCartProductsPrice.toFixed(2)}
                    </Tag>
                </>
            ) : <h2 style={{ marginTop: 10 }}>Cart is empty</h2>}
        </>
    )
}

export default CartPage