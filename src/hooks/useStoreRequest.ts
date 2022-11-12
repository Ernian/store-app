import { useAppDispatch, useAppSelector } from './hooks'
import { fetchProducts, fetchProductById } from '../store/productSlice'
import { ProductsCategories, IProductProperties } from '../types'
import { baseUrl } from './../consts'

function useStoreRequest() {
    const dispatch = useAppDispatch()
    const downloadedCategories = useAppSelector(state => state.products.downloadedCategories)

    function checkCategory(category: string | undefined): category is ProductsCategories {
        switch (category) {
            case ProductsCategories.ALL:
                return true
            case ProductsCategories.ELECTRONICS:
                return true
            case ProductsCategories.JEWELERY:
                return true
            case ProductsCategories.MEN_ALIAS:
                return true
            case ProductsCategories.WOMEN_ALIAS:
                return true
            default:
                return false
        }
    }

    function createUrl(category: ProductsCategories) {
        switch (category) {
            case ProductsCategories.ALL:
                return baseUrl
            case ProductsCategories.MEN_ALIAS:
                return `${baseUrl}/category/${ProductsCategories.MEN}`
            case ProductsCategories.WOMEN_ALIAS:
                return `${baseUrl}/category/${ProductsCategories.WOMEN}`
            default:
                return `${baseUrl}/category/${category}`
        }
    }

    function getProducts(category: ProductsCategories) {
        if (!downloadedCategories.includes(category)
            && downloadedCategories.length < 4) {
            const url = createUrl(category)
            dispatch(fetchProducts({ url, category }))
        }
    }

    function getProductById(id: string) {
        dispatch(fetchProductById(id))
    }

    return { checkCategory, getProducts, getProductById }
}

export default useStoreRequest