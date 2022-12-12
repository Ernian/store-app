import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useStoreRequest from '../hooks/useStoreRequest'
import { useAppSelector, useAppDispatch } from '../hooks/hooks'
import { selectCategory } from '../store/productSlice'
import { Row } from 'antd'
import CardsSkeleton from '../components/cardsSkeleton/CardsSkeleton'
import ProductCard from '../components/productCard/ProductCard'
import { ProductsCategories } from '../types'

const ProductsPage: React.FC = () => {
    const { category } = useParams()
    const { checkCategory, getProducts } = useStoreRequest()
    const dispatch = useAppDispatch()

    const {
        loading,
        error,
        products,
        selectedCategory
    } = useAppSelector(state => state.products)

    useEffect(() => {
        if (checkCategory(category)) {
            dispatch(selectCategory(category))
            getProducts(category)
        }
    }, [category])

    const visibleProducts = products.filter(({ category }) => {
        if (selectedCategory === ProductsCategories.ALL) {
            return true
        }
        if (selectedCategory === ProductsCategories.MEN_ALIAS) {
            return category === ProductsCategories.MEN
        }
        if (selectedCategory === ProductsCategories.WOMEN_ALIAS) {
            return category === ProductsCategories.WOMEN
        }
        return category === selectedCategory
    })

    const productCards = visibleProducts.map(product => (
        <ProductCard
            key={product.id}
            product={product}
        />
    ))

    return (
        <Row
            gutter={
                [
                    { md: 16, lg: 16, xl: 16, xxl: 24 },
                    { xs: 24, sm: 24, md: 16, lg: 16, xl: 16, xxl: 24 }
                ]}
            justify='center'
        >
            {(
                loading === 'loading'
                || visibleProducts.length === 0
            )
                && <CardsSkeleton />
            }
            {(

                loading === 'idle'
                && visibleProducts.length > 0
                && !error
            )
                && productCards
            }
        </Row >
    )
}

export default ProductsPage