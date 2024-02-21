import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { bookItemFetch, booksFetch } from "../fetches/bookFetch";
import { bookResultProps, currentBookProps } from "../interfaces";


interface initialStateProps {
    gbToken: string
    bookResult? : bookResultProps,
    currentBookItem? : currentBookProps
}


const initialState: initialStateProps = {
    gbToken: 'AIzaSyBSAhf-iLlQ2SNMvQ-CJm5yMlldhRg00Cg',
    bookResult: undefined,
    currentBookItem: undefined
};

export const bookDataSlice = createSlice({
    name: 'bookData',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(booksFetch.fulfilled, (state, action: PayloadAction<bookResultProps>) => {
                console.log("Successfully");
                state.bookResult = action.payload
            })
            .addCase(booksFetch.rejected, () => {
                console.log("Rejected");
            })
            .addCase(bookItemFetch.fulfilled, (state, action: PayloadAction<currentBookProps>) => {
                console.log("Successfully");
                state.currentBookItem = action.payload
            })
            .addCase(bookItemFetch.rejected, () => {
                console.log("Rejected");
            })

    }
})

export default bookDataSlice.reducer;