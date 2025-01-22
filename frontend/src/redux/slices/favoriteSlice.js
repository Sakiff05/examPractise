import { createSlice } from '@reduxjs/toolkit'

export const favoriteSlice = createSlice({
    name: 'favorite',
    initialState: {
        favorite: JSON.parse(localStorage.getItem("favorite")) || []
    },
    reducers: {
        addFavorite: (state, action) => {
            state.favorite.push(action.payload)
            localStorage.setItem("favorite", JSON.stringify(state.favorite))
        },
        removeFavorite: (state, action) => {
            let item = state.favorite.find(item => item._id == action.payload._id)
            state.favorite = state.favorite.filter(card => card._id != item._id)
            localStorage.setItem("favorite", JSON.stringify(state.favorite))
        },

    },
})

export const { addFavorite, removeFavorite } = favoriteSlice.actions

export default favoriteSlice.reducer