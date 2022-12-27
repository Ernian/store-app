import { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Row, Slider, Select } from 'antd'
import { ArrowLeftOutlined } from '@ant-design/icons'
import useStoreRequest from '../hooks/useStoreRequest'
import { useAppSelector, useAppDispatch } from '../hooks/hooks'
import { clearSearchText } from '../store/searchFilterSlice'
import CardsSkeleton from '../components/cardsSkeleton/CardsSkeleton'
import ProductCard from '../components/productCard/ProductCard'
import { ProductsCategories } from '../types'


const SearchProductsPage = () => {
    const [[minPrice, maxPrice], setPriceRange] = useState<[number, number]>([0, 1000])
    const [[minRating, maxRating], setRatingRange] = useState<[number, number]>([1, 5])
    const [sortFeild, setSortFeild] = useState<'price' | 'rating'>('price')
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')
    const navigate = useNavigate()
    const { getProducts } = useStoreRequest()
    const { searchText } = useAppSelector(state => state.searchFilter)
    const {
        loading,
        error,
        products,
        downloadedCategories
    } = useAppSelector(state => state.products)
    const dispatch = useAppDispatch()


    const goBack = () => {
        navigate(-1)
        dispatch(clearSearchText())
    }

    useEffect(() => {
        if (downloadedCategories.length < 4) {
            getProducts(ProductsCategories.ALL)
        }
    }, [])

    const searchProducts = products.filter(({ title }) => {
        return title.toLowerCase().includes(searchText.toLowerCase())
    })

    const filterSearchProducts = searchProducts.filter(({ price, rating }) => (
        (price < maxPrice && price > minPrice)
        && (rating.rate < maxRating && rating.rate > minRating)
    ))

    let sortFilterSearchProducts = filterSearchProducts.sort((prev, next) => {
        if (sortFeild === 'price') {
            return prev.price - next.price
        }
        return prev.rating.rate - next.rating.rate
    })

    if (sortOrder === 'desc') {
        sortFilterSearchProducts.reverse()
    }

    const onChangeSortField = (feild: 'price' | 'rating') => setSortFeild(feild)
    const onChangeSortOrder = (order: 'asc' | 'desc') => setSortOrder(order)
    const onChangePrice = (range: [number, number]) => setPriceRange(range)
    const onChangeRatingRange = (range: [number, number]) => setRatingRange(range)

    const productCards = sortFilterSearchProducts.map(product => (
        <ProductCard
            key={product.id}
            product={product}
        />
    ))

    return (
        <>
            <div
                style={{
                    marginTop: 10,
                    display: 'flex',
                }}
            >
                <div
                    style={{
                        flexGrow: 1
                    }}
                >
                    <span onClick={goBack} style={{ cursor: 'pointer', fontSize: 18 }}>
                        <ArrowLeftOutlined style={{ marginRight: 10 }} />
                        Back
                    </span>
                    <p style={{ marginTop: 15, marginBottom: 0 }}>Sort by</p>
                    <Select
                        defaultValue="price"
                        style={{ display: 'block', width: '90%', marginTop: 3 }}
                        onChange={onChangeSortField}
                        options={[
                            {
                                value: 'price',
                                label: 'Price',
                            },
                            {
                                value: 'rating',
                                label: 'Rating',
                            },
                        ]}
                    />
                    <Select
                        defaultValue="asc"
                        style={{ display: 'block', width: '90%', marginTop: 24 }}
                        onChange={onChangeSortOrder}
                        options={[
                            {
                                value: 'asc',
                                label: 'Ascending',
                            },
                            {
                                value: 'desc',
                                label: 'Descending',
                            },
                        ]}
                    />
                </div>
                <div
                    style={{
                        flexGrow: 2
                    }}
                >
                    <div style={{ marginTop: 43 }}>
                        Filter by price
                        <Slider
                            range defaultValue={[1, 1000]}
                            step={10}
                            min={1}
                            max={1000}
                            onChange={onChangePrice}
                        />
                    </div>
                    <div style={{ marginTop: 15 }}>
                        Filter by rating
                        <Slider
                            range defaultValue={[1, 5]}
                            step={0.5}
                            min={1}
                            max={5}
                            onChange={onChangeRatingRange}
                        />
                    </div>
                </div>

            </div>
            <Row
                gutter={
                    [
                        { md: 16, lg: 16, xl: 16, xxl: 24 },
                        { xs: 24, sm: 24, md: 16, lg: 16, xl: 16, xxl: 24 }
                    ]}
                justify='center'
            >
                {(loading === 'loading')
                    && <CardsSkeleton />
                }
                {(!productCards.length && loading !== 'loading')
                    && <h2 style={{ marginTop: 100 }}>There is no such products</h2>
                }
                {(

                    loading === 'idle'
                    && searchProducts.length > 0
                    && !error
                )
                    && productCards
                }
            </Row >
        </>
    )
}

export default SearchProductsPage