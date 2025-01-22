import { configureStore } from '@reduxjs/toolkit'
import basketReducer from "./slices/basketSlice.js"

export default configureStore({
    reducer: {
        basket: basketReducer
    },
})