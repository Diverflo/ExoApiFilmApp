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
        // pour ajouter favoris
        addmovie: (state = {}, action) => {
            // const myFav = [];
            // console.log("state", state);
            state.myfavorite.push(action.payload);
            // console.log("state2", action.payload);
            // state.myfavorite += action.payload;
            // return action.payload;

            // myfavorite.push(action.payload);
        },
        // pour supprimer favoris
        removemovie: (state, action) => {
            // state.myfavorite.pop(action.payload);
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
