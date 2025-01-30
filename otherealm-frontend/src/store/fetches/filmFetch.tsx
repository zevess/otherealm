import { createAsyncThunk } from "@reduxjs/toolkit";

export const filmFetch = createAsyncThunk(
    'filmData/filmFetch',
    async ({ searchTitle, currentMediaPage, kpToken } : { searchTitle: string, currentMediaPage: number, kpToken: string },) => {
        let fetchURL = `https://api.kinopoisk.dev/v1.4/movie/search?page=${currentMediaPage}&limit=20&query=${searchTitle}`
        const response = await fetch(fetchURL, {
            method: 'GET',
            headers: {
                'X-API-KEY': `${kpToken}`,
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


