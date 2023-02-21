// Import the createSlice API from Redux Toolkit
import { createSlice } from "@reduxjs/toolkit";

// This is the initial state of the slice
const initialState = {
    myfavorite: [],
};

export const favoriteSlice = createSlice({
    name: "favorite",
    initialState: initialState,
    reducers: {
        // to add favorite
        addmovie: (state = {}, action) => {
            state.myfavorite.push(action.payload);
        },
        // to delete favorite
        removemovie: (state, action) => {
            state.myfavorite = state.myfavorite.filter(
                (movie) => movie.title !== action.payload
            );
        },
    },
});

// Action creators are generated for each case reducer function
export const { addmovie, removemovie } = favoriteSlice.actions;

// We export the reducer function so that it can be added to the store
export default favoriteSlice.reducer;