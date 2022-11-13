import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IProductProperties } from './../types';
import { ICartInitialState } from '../types'

const initialState: ICartInitialState = {
    cartProducts: [],
    totalCartProductsCount: 0,
    totalCartProductsPrice: 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProductToCart(state, action: PayloadAction<IProductProperties>) {
            state.cartProducts.push(action.payload)
            ++state.totalCartProductsCount
            state.totalCartProductsPrice = Number((state.totalCartProductsPrice + action.payload.price).toFixed(2))
        },
        incProductCount(state, action) {
            state.cartProducts = state.cartProducts.map(product => {
                if (product.id === action.payload) {
                    product.count = product.count ? ++product.count : 1
                    state.totalCartProductsPrice = Number((state.totalCartProductsPrice + product.price).toFixed(2))
                    return product
                }
                return product
            })
            ++state.totalCartProductsCount
        },
    },
})

export const { addProductToCart, incProductCount } = cartSlice.actions
export default cartSlice.reducer