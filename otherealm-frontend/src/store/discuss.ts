import axios from '../axios.ts'
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import { postProps, userPosts } from './interfaces.tsx';

export const fetchItemDiscusses = createAsyncThunk('/discuss/:itemId', async (itemId: string) => {
    const { data } = await axios.get(`/discuss/${itemId}`);
    return data
})

export const fetchAllDiscusses = createAsyncThunk('/allDiscuss', async () => {
    const { data } = await axios.get('/discuss');
    return data
})

export const fetchOneDiscuss = createAsyncThunk('/discuss/:itemId/:discussId', async ({itemId, discussId}: {itemId: string, discussId: string}) => {
    const { data } = await axios.get(`/discuss/${itemId}/${discussId}`);
    return data
})

export const fetchAddDiscuss = createAsyncThunk('/discuss', async (fields: object) => {
    const { data } = await axios.post('/discuss', fields);
    return data
}
)

export interface discussProps {
    discusses: {
        discusses: userPosts[],
        status: string
    },
    currentDiscuss: {
        currentDiscuss: postProps | null,
        status: string
    }
}

const initialState: discussProps = {
    discusses: {
        discusses: [],
        status: ''
    },
    currentDiscuss: {
        currentDiscuss: null,
        status: ''
    }
}

export const discussSlice = createSlice({
    name: 'discuss',
    initialState,
    reducers:{
        clearDiscuss: (state) => {
            state.discusses.discusses = [];
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchItemDiscusses.pending, (state) => {
                state.discusses.status = 'loading'
            })
            .addCase(fetchItemDiscusses.fulfilled, (state, action) => {
                state.discusses.status = 'loaded'
                state.discusses.discusses = action.payload
            })
            .addCase(fetchItemDiscusses.rejected, (state) => {
                state.discusses.status = 'rejected'
            })

            .addCase(fetchAllDiscusses.pending, (state) => {
                state.discusses.status = 'loading'
            })
            .addCase(fetchAllDiscusses.fulfilled, (state, action) => {
                state.discusses.status = 'loaded'
                state.discusses.discusses = action.payload
            })
            .addCase(fetchAllDiscusses.rejected, (state) => {
                state.discusses.status = 'rejected'
            })

            .addCase(fetchOneDiscuss.pending, (state) => {
                state.currentDiscuss.status = 'loading'
            })
            .addCase(fetchOneDiscuss.fulfilled, (state, action) => {
                state.currentDiscuss.status = 'loaded'
                state.currentDiscuss.currentDiscuss = action.payload
                window.localStorage.setItem('currentUser', action.payload.user._id);
            })
            .addCase(fetchOneDiscuss.rejected, (state) => {
                state.currentDiscuss.status = 'rejected'
            })

            .addCase(fetchAddDiscuss.pending, (state) => {
                state.currentDiscuss.status = 'loading'
            })
            .addCase(fetchAddDiscuss.fulfilled, (state) => {
                state.currentDiscuss.status = 'added'
            })
            .addCase(fetchAddDiscuss.rejected, (state) => {
                state.currentDiscuss.status = 'rejected'
            })
}})

// export const selectIsAuth = (state: any) => Boolean(state.auth.data);

export const { clearDiscuss } = discussSlice.actions;

export default discussSlice.reducer
