import axios from 'axios'
import { IProductProperties } from './../types';
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import {
    IProductsInitialState,
    IProductsPayload,
    ProductsCategories
} from '../types'
import { baseUrl } from './../consts'

const initialState: IProductsInitialState = {
    singleProduct: null,
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
            const products = (await axios.get(url)).data
            return { products, category }
        }
    )

export const fetchProductById = createAsyncThunk<IProductProperties, string>(
    'products/fetchProductById',
    async (id) => (await axios.get(`${baseUrl}/${id}`)).data
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
                    state.error = 'Empty products array'
                }
            })
            .addCase(fetchProductById.pending, state => {
                state.loading = 'loading'
                state.error = null
            })
            .addCase(fetchProductById.fulfilled, (state, { payload: product }) => {
                if (product.id) {
                    state.singleProduct = product
                    state.selectedCategory = product.category
                    state.loading = 'idle'
                    state.error = null
                }
            })
    }
})

export const { selectCategory } = productsSlice.actions
export default productsSlice.reducer