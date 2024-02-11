import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const filmFetch = createAsyncThunk(
    'filmData/filmFetch',
    async ({ filmTitle, token } : { filmTitle: string, token: string },) => {
        let fetchURL = `https://api.kinopoisk.dev/v1.4/movie/search?page=1&limit=20&query=${filmTitle}`
        console.log(fetchURL)
        const response = await fetch(fetchURL, {
            method: 'GET',
            headers: {
                'X-API-KEY': `${token}`,
                'Content-Type': 'application/json',
            },
        });
        const json = await response.json();
        return json;
    }
)


export const filmItemFetch = createAsyncThunk(
    'filmData/filmItemFetch',
    async ({ paramsId, token } : { paramsId: string, token: string },) => {
        let fetchURL = `https://api.kinopoisk.dev/v1.4/movie/${paramsId}`
        console.log(fetchURL)
        const response = await fetch(fetchURL, {
            method: 'GET',
            headers: {
                'X-API-KEY': `${token}`,
                'Content-Type': 'application/json',
            },
        });
        const json = await response.json();
        return json;
    }
)


export const booksFetch = createAsyncThunk(
    'filmData/bookFetch',
    async ({ filmTitle, gbToken } : { filmTitle: string, gbToken: string },) => {
        let fetchURL = `https://www.googleapis.com/books/v1/volumes?q=${filmTitle}&key=${gbToken}`
        console.log(fetchURL)

        const response = await axios.get(fetchURL)
        return response.data
    }
)