import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {  filmFetch, filmItemFetch } from "../fetches/filmFetch";
import { bookResultProps, currentFilmItemProps, filmResultProps } from "../interfaces";


interface initialStateProps {
    searchTitle: string,
    currentSearchSection: string,
    currentMediaPage: number,
    totalMediaPage: number,
    currentGamePage: number,
    totalGamePage: number,
    currentBookPage: number,
    totalBookPage: number,
    isFetching: boolean,
    currentFilterItem: string
    currentFavouriteItem: string
}

const initialState: initialStateProps = {
    searchTitle: '',
    currentSearchSection: 'media',
    currentMediaPage: 1,
    totalMediaPage: 1,
    currentGamePage: 1,
    totalGamePage: 1,
    currentBookPage: 1,
    totalBookPage: 1,
    isFetching: false,
    currentFilterItem: "ВСЕ",
    currentFavouriteItem: ''
};


export const stateSlice = createSlice({
    name: 'stateData',
    initialState,
    reducers: {
        addItemTitle: (state, action: PayloadAction<string>) => {
            state.searchTitle = action.payload;
        },
        setSearchSection: (state, action: PayloadAction<string>) =>{
            state.currentSearchSection = action.payload
        },
        setMediaPage: (state, action: PayloadAction<number>) =>{
            state.currentMediaPage = action.payload
        },
        setTotalMediaPage: (state, action: PayloadAction<number>) =>{
            state.totalMediaPage = action.payload
        },
        setGamePage: (state, action: PayloadAction<number>) =>{
            state.currentGamePage = action.payload
        },
        setTotalGamePage: (state, action: PayloadAction<number>) =>{
            state.totalGamePage = action.payload
        },
        setBookPage: (state, action: PayloadAction<number>) =>{
            state.currentBookPage = action.payload
        },
        setTotalBookPage: (state, action: PayloadAction<number>) =>{
            state.totalBookPage = action.payload
        },
        setIsFetching: (state, action: PayloadAction<boolean>) =>{
            state.isFetching = action.payload
        },

        setCurrentFilterItem: (state, action: PayloadAction<string>) =>{
            state.currentFilterItem = action.payload
        },
        setCurrentFavouriteItem: (state, action: PayloadAction<string>) =>{
            state.currentFavouriteItem = action.payload
        },
    },
    
})

export const { addItemTitle, setSearchSection, setMediaPage, setTotalMediaPage, setGamePage, setTotalGamePage,  setBookPage, setTotalBookPage, setCurrentFavouriteItem, setCurrentFilterItem } = stateSlice.actions;
export default stateSlice.reducer;