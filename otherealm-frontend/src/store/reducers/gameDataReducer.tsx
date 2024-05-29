import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { currentGameItemProps, gameResultProps } from "../interfaces";
import { gameFetch, gameItemFetch } from "../fetches/gameFetch";


interface initialStateProps {
    rawgToken: string,
    gameResult?: gameResultProps,
    gamesLoadingStatus?: string,
    currentGameItem?: currentGameItemProps,
    currentGameItemLoadingStatus?: string
}

const initialState: initialStateProps = {
    rawgToken: 'b4fd0df38636414f98d77329eae07427',
    gameResult: undefined,
    currentGameItem: undefined,
};


export const gameDataSlice = createSlice({
    name: 'gameData',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(gameFetch.pending, (state) => {
                state.gamesLoadingStatus = 'loading'
            })
            .addCase(gameFetch.fulfilled, (state, action: PayloadAction<gameResultProps>) => {
                console.log("Successfully");
                state.gamesLoadingStatus = 'done'
                state.gameResult = action.payload
            })
            .addCase(gameFetch.rejected, (state) => {
                state.gamesLoadingStatus = 'rejected'
                console.log('Rejected')
            })
            .addCase(gameItemFetch.fulfilled, (state, action: PayloadAction<currentGameItemProps>) => {
                console.log("Successfully");
                state.currentGameItemLoadingStatus = 'done'
                state.currentGameItem = action.payload
            })
            .addCase(gameItemFetch.rejected, (state) => {
                state.currentGameItemLoadingStatus = 'done'
                console.log('Rejected')
            })
    }
})

export default gameDataSlice.reducer;