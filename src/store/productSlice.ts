import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { IProductsInitialState, IProductsPayload, ProductsCategories } from '../types';

const initialState: IProductsInitialState = {
    products: [],
    downloadedCategories: [],
    selectedCategory: null,
    loading: 'idle',
    error: null
}

export const fetchProducts = createAsyncThunk<IProductsPayload, { url: string, category: ProductsCategories }, { rejectValue: string }>(
    'products/fetchProducts',
    async function ({ url, category }, { rejectWithValue }) {
        const response = await fetch(url)
        if (!response.ok) {
            return rejectWithValue('Server error')
        }
        const products = await response.json()
        return { products, category }
    }
)

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
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
                            ProductsCategories.ALL,
                            ProductsCategories.ELECTRONICS,
                            ProductsCategories.JEWELERY,
                            ProductsCategories.MEN,
                            ProductsCategories.WOMEN
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

    }

})

export default productsSlice.reducer