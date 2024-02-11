import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { booksFetch, filmFetch, filmItemFetch } from "../filmFetch/filmFetch";
import { bookResultProps, currentFilmItemProps, filmResultProps } from "../interfaces";


interface initialStateProps {
    kpToken: string,
    gbToken: string
    searchTitle: string,
    filmResult?: filmResultProps,
    currentFilmItem?: currentFilmItemProps,
    bookResult? : bookResultProps
}

const initialState: initialStateProps = {
    kpToken: '9QZ7FQQ-56VM4BF-KC6ACAD-C2KTRY4',
    gbToken: 'AIzaSyBSAhf-iLlQ2SNMvQ-CJm5yMlldhRg00Cg',
    searchTitle: '',
    filmResult: undefined,
    currentFilmItem: undefined,
    bookResult: undefined
};


export const filmDataSlice = createSlice({
    name: 'filmData',
    initialState,
    reducers: {
        addFilmTitle: (state, action: PayloadAction<string>) => {
            state.searchTitle = action.payload;
        },
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
            .addCase(booksFetch.fulfilled, (state, action: PayloadAction<bookResultProps>) => {
                console.log("Successfully");
                state.bookResult = action.payload
            })
    }
})

export const { addFilmTitle } = filmDataSlice.actions;
export default filmDataSlice.reducer;