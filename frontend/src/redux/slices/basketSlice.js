import { createSlice } from '@reduxjs/toolkit'

export const basketSlice = createSlice({
    name: 'basket',
    initialState: {
        basket: JSON.parse(localStorage.getItem("basket")) || []
    },
    reducers: {
        addBasket: (state, action) => {
            let isExist = state.basket.find(item => item._id == action.payload._id)
            if (isExist) {
                isExist.count++
            } else {
                state.basket.push({ ...action.payload, count: 1 })
            }
            localStorage.setItem("basket", JSON.stringify(state.basket))
        },
        increment: (state, action) => {
            let item = state.basket.find(item => item._id == action.payload._id)
            item.count++
            localStorage.setItem("basket", JSON.stringify(state.basket))
        },
        decrement: (state, action) => {
            let item = state.basket.find(item => item._id == action.payload._id)
            if (item.count > 1) {
                item.count--
            } else {
                state.basket = state.basket.filter(card => card._id != item._id)
            }
            localStorage.setItem("basket", JSON.stringify(state.basket))

        },
        deleteProduct: (state, action) => {
            let item = state.basket.find(item => item._id == action.payload._id)
            state.basket = state.basket.filter(card => card._id != item._id)
            localStorage.setItem("basket", JSON.stringify(state.basket))
        },

    },
})

export const { addBasket, increment, decrement, deleteProduct } = basketSlice.actions

export default basketSlice.reducer