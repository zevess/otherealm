import axios from '../axios.ts'
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import { favouriteProps } from './interfaces.tsx';

export const fetchFavourite = createAsyncThunk('/favourite', async(params) => {
    const {data} = await axios.post('/favourite', params);
    return data
})

export const fetchUserFavourites = createAsyncThunk('/favourite/:userId', async(userId:string) => {
    const {data} = await axios.get(`/favourite/${userId}`);
    return data
})

export const fetchAddToFavourite = createAsyncThunk('/favourite/:postId', async(favouriteId) => {
    const {data} = await axios.patch(`/favourite/add/${favouriteId}`);
    return data
})

export interface favouriteStateProps{
    favourites:{
        items: favouriteProps[],
        status: string
    }
}

const initialState = {
    favourites: {
        items: [],
        status: "loading"
    }
}

export const favouritesSlice = createSlice({
    name: 'favourites',
    initialState,
    reducers:{
        addFavourites: (state, action) =>{
            state.favourites.items = action.payload
        },
        isFavourire: (state, action) =>{
            state.favourites.items = action.payload
        },
        clearFavourite: (state) => {
            state.favourites.items = [];
        }
    },
    extraReducers: (builder) =>{
        builder
            //create favourite
            .addCase(fetchFavourite.fulfilled, (state, action) =>{
                state.favourites.status = "loaded",
                state.favourites.items = action.payload
            })
            .addCase(fetchFavourite.rejected, (state) =>{
                state.favourites.status = "error"
            })
            //get favourites
            .addCase(fetchUserFavourites.pending, (state) =>{
                state.favourites.status = "loading"
            })
            .addCase(fetchUserFavourites.fulfilled, (state, action) =>{
                state.favourites.status = "loaded",
                state.favourites.items = action.payload
            })
            .addCase(fetchUserFavourites.rejected, (state) =>{
                state.favourites.status = "error"
            })
            //add to favourite
            .addCase(fetchAddToFavourite.pending, (state) =>{
                state.favourites.status = "loading"
            })
            .addCase(fetchAddToFavourite.fulfilled, (state, action) =>{
                state.favourites.status = "loaded",
                state.favourites.items = action.payload
            })
            .addCase(fetchAddToFavourite.rejected, (state) =>{
                state.favourites.status = "error"
            })
    }
})

// export const selectIsAuth = (state: any) => Boolean(state.auth.data);

export const { addFavourites, isFavourire, clearFavourite } = favouritesSlice.actions;

export default favouritesSlice.reducer
