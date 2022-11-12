import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IProductProperties } from './../types';
import { ICartInitialState } from '../types'

const initialState: ICartInitialState = {
    cartProducts: [],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProductToCart(state, action: PayloadAction<IProductProperties>) {
            state.cartProducts.push(action.payload)
        },
        incProductCount(state, action) {
            state.cartProducts = state.cartProducts.map(product => {
                if (product.id === action.payload) {
                    product.count = product.count ? ++product.count : 1
                    return product
                }
                return product
            })
        },
    },
})

export const { addProductToCart, incProductCount } = cartSlice.actions
export default cartSlice.reducer