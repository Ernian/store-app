import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import {
    IProductsInitialState,
    IProductsPayload,
    ProductsCategories
} from '../types'

const initialState: IProductsInitialState = {
    products: [],
    downloadedCategories: [],
    selectedCategory: null,
    loading: 'idle',
    error: null
}

export const fetchProducts = createAsyncThunk
    <IProductsPayload, { url: string, category: ProductsCategories }>
    (
        'products/fetchProducts',
        async ({ url, category }) => {
            const response = await fetch(url)
            const products = await response.json()
            return { products, category }
        }
    )

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        selectCategory(state, action: PayloadAction<ProductsCategories>) {
            state.selectedCategory = action.payload
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = 'loading'
                state.error = null
            })
            .addCase(fetchProducts.fulfilled, (state, { payload: { products, category } }) => {
                if (products.length > 0) {
                    state.loading = 'idle'
                    state.error = null
                    if (category === 'all') {
                        state.products = products
                        state.downloadedCategories = [
                            ProductsCategories.ELECTRONICS,
                            ProductsCategories.JEWELERY,
                            ProductsCategories.MEN_ALIAS,
                            ProductsCategories.WOMEN_ALIAS
                        ]
                    } else {
                        state.products.push(...products)
                        state.downloadedCategories.push(category)
                    }
                } else {
                    state.loading = 'idle'
                    state.error = 'Server error'
                }
            })
    }
})

export const { selectCategory } = productsSlice.actions
export default productsSlice.reducer