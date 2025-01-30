import { createAsyncThunk } from "@reduxjs/toolkit";

export const gameFetch = createAsyncThunk(
    'gameData/gameFetch',
    async ({ gameSearchTitle, rawgToken, currentGamePage }: { gameSearchTitle: string, rawgToken: string, currentGamePage: number },) => {
        let fetchURL = `https://api.rawg.io/api/games?key=${rawgToken}&search=${gameSearchTitle}&page=${currentGamePage}`
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