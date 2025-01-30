import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { filmFetch, filmItemFetch } from "../fetches/filmFetch";
import { currentFilmItemProps, filmResultProps } from "../interfaces";


interface initialStateProps {
    kpToken: string,
    filmResult?: filmResultProps,
    currentFilmItem?: currentFilmItemProps,
    currentFilmItemLoadingStatus?: string
    filmsLoadingStatus?: string
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
            .addCase(filmFetch.pending, (state) => {
                state.filmsLoadingStatus = 'loading'
            })
            .addCase(filmFetch.fulfilled, (state, action: PayloadAction<filmResultProps>) => {
                
                state.filmsLoadingStatus = 'done'
                state.filmResult = action.payload
            })
            .addCase(filmFetch.rejected, (state) => {
                
                state.filmsLoadingStatus = 'rejected'
            })
            .addCase(filmItemFetch.fulfilled, (state, action: PayloadAction<currentFilmItemProps>) => {
                state.currentFilmItemLoadingStatus = 'done'
                state.currentFilmItem = action.payload
            })
            .addCase(filmItemFetch.rejected, (state) => {
                state.currentFilmItemLoadingStatus = 'rejected'
            })
    }
})

export default filmDataSlice.reducer;