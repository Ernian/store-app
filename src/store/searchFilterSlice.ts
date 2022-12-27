import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ISearchFilterInitialState } from '../types'

const initialState: ISearchFilterInitialState = {
    searchText: '',
    price: {
        min: 0,
        max: 1000
    },
    rating: {
        min: 0,
        max: 5
    },
    sort: {
        feild: 'price',
        order: 'asc',
    }
}

const searchFilterSlice = createSlice({
    name: 'searchFilter',
    initialState,
    reducers: {
        setSearchText(state, action: PayloadAction<string>) {
            state.searchText = action.payload
        },
        clearSearchText(state) {
            state.searchText = ''
        },
    },
})

export const { setSearchText, clearSearchText } = searchFilterSlice.actions
export default searchFilterSlice.reducer