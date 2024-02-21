import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

export const gameFetch = createAsyncThunk(
    'gameData/gameFetch',
    async ({ searchTitle, rawgToken, currentGamePage }: { searchTitle: string, rawgToken: string, currentGamePage: number },) => {
        let fetchURL = `https://api.rawg.io/api/games?key=${rawgToken}&search=${searchTitle}&page=${currentGamePage}`
        console.log(fetchURL)
        const response = await fetch(fetchURL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const json = await response.json();
        return json;
    }
)

export const gameItemFetch = createAsyncThunk(
    'gameData/gameItemFetch',
    async ({gameId, rawgToken} : {gameId: string, rawgToken: string})  => {
        let fetchURL = `https://api.rawg.io/api/games/${gameId}?key=${rawgToken}`
        console.log(fetchURL)
        const response = await fetch(fetchURL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const json = await response.json();
        return json;
    }
)