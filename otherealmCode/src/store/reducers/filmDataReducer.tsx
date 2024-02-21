import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { filmFetch, filmItemFetch } from "../fetches/filmFetch";
import {  currentFilmItemProps, filmResultProps } from "../interfaces";


interface initialStateProps {
    kpToken: string,
    filmResult?: filmResultProps,
    currentFilmItem?: currentFilmItemProps,

}

const initialState: initialStateProps = {
    kpToken: '9QZ7FQQ-56VM4BF-KC6ACAD-C2KTRY4',
    filmResult: undefined,
    currentFilmItem: undefined,
};


export const filmDataSlice = createSlice({
    name: 'filmData',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(filmFetch.fulfilled, (state, action: PayloadAction<filmResultProps>) => {
                console.log("Successfully");
                state.filmResult = action.payload
            })
            .addCase(filmFetch.rejected, () => {
                console.log('Rejected')
            })
            .addCase(filmItemFetch.fulfilled, (state, action: PayloadAction<currentFilmItemProps>) => {
                console.log("Successfully");
                state.currentFilmItem = action.payload
            })
            .addCase(filmItemFetch.rejected, () => {
                console.log('Rejected')
            })
    }
})

export default filmDataSlice.reducer;