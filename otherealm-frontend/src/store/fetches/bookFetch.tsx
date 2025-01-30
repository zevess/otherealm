import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const booksFetch = createAsyncThunk(
    'bookData/bookFetch',
    async ({ searchTitle, gbToken, currentBookPage }: { searchTitle: string, gbToken: string, currentBookPage: number },) => {
        let fetchURL = `https://www.googleapis.com/books/v1/volumes?q=${searchTitle}&startIndex=${(currentBookPage - 1) * 20}&maxResults=40&key=${gbToken}`

        const response = await axios.get(fetchURL)
        return response.data
    }
)

export const bookItemFetch = createAsyncThunk(
    'bookData/bookItemFetch',
    async ({ bookId }: { bookId: string },) => {
        let fetchURL = `https://www.googleapis.com/books/v1/volumes/${bookId}`
        const response = await axios.get(fetchURL)
        return response.data
    }
)

