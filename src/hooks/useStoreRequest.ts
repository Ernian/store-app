import { useAppDispatch, useAppSelector } from './hooks'
import { fetchProducts } from '../store/productSlice'
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
        try {
            if (!downloadedCategories.includes(category)
                && downloadedCategories.length < 4) {
                const url = createUrl(category)
                dispatch(fetchProducts({ url, category }))
            }
        } catch (error) {
            console.error(error)
        }
    }

    async function getProductById(id: string) {
        const response = await fetch(`${baseUrl}/${id}`)
        const product = await response.json()
        return product as IProductProperties
    }

    return { checkCategory, getProducts, getProductById }
}

export default useStoreRequest