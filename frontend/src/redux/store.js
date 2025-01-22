import { configureStore } from '@reduxjs/toolkit'
import basketReducer from "./slices/basketSlice.js"
import favoriteReducer from "./slices/favoriteSlice.js"

export default configureStore({
    reducer: {
        basket: basketReducer,
        favorite: favoriteReducer
    },
})