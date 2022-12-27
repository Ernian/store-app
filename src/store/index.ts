import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productSlice'
import cartReducer from './cartSlice'
import searchFilterReducer from './searchFilterSlice'

const store = configureStore({
    reducer: {
        products: productReducer,
        cart: cartReducer,
        searchFilter: searchFilterReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store