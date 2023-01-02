import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { setProductsCartToLocal } from '../localStorage'
import { IProductProperties, ICartInitialState } from '../types'

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
            setProductsCartToLocal(state)
        },
        deleteProductFromCart(state, action) {
            const deleteProduct = state.cartProducts.find(product => product.id === action.payload)
            if (deleteProduct && deleteProduct?.count) {
                state.totalCartProductsCount -= deleteProduct?.count
                state.totalCartProductsPrice -= deleteProduct?.count * deleteProduct.price
                state.cartProducts = state.cartProducts.filter(({ id }) => id !== action.payload)
                setProductsCartToLocal(state)
            }
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
            setProductsCartToLocal(state)
        },
        decProductCount(state, action) {
            state.cartProducts = state.cartProducts.map(product => {
                if (product.id === action.payload && product.count) {
                    --product.count
                    state.totalCartProductsPrice = Number((state.totalCartProductsPrice - product.price).toFixed(2))
                    return product
                }
                return product
            })
            --state.totalCartProductsCount
            setProductsCartToLocal(state)
        },
        setCartFomLocal(state, { payload }) {
            state.cartProducts = payload.cartProducts
            state.totalCartProductsCount = payload.totalCartProductsCount
            state.totalCartProductsPrice = payload.totalCartProductsPrice
        }
    },
})

export const {
    addProductToCart,
    deleteProductFromCart,
    incProductCount,
    decProductCount,
    setCartFomLocal } = cartSlice.actions
export default cartSlice.reducer