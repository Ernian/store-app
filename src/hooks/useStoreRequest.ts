import { useAppDispatch, useAppSelector } from './hooks'
import { fetchProducts } from '../store/productSlice'
import { ProductsCategories } from '../types'

function useStoreRequest() {
    const dispatch = useAppDispatch()
    const downloadedCategories = useAppSelector(state => state.products.downloadedCategories)
    let url = 'https://fakestoreapi.com/products'

    function checkCategory(category: string | undefined): category is ProductsCategories {
        switch (category) {
            case ProductsCategories.ALL:
                return true
            case ProductsCategories.ELECTRONICS:
                url += `/category/${category}`
                return true
            case ProductsCategories.JEWELERY:
                url += `/category/${category}`
                return true
            case ProductsCategories.MEN:
                url += `/category/men's clothing`
                return true
            case ProductsCategories.WOMEN:
                url += `/category/women's clothing`
                return true
            default:
                return false
        }
    }

    function getProducts(category: ProductsCategories) {
        if (!downloadedCategories.includes(category)) {
            dispatch(fetchProducts({ url, category }))
        }
    }

    return { checkCategory, getProducts }
}

export default useStoreRequest