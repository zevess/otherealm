import axios from '../axios.ts'
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import { CommentsProps } from './interfaces.tsx';

export const fetchPostComment = createAsyncThunk('/comments', async(fields: object) => {
    const data = await axios.post('/comments', fields);
    return data.data
})

export const fetchGetComments = createAsyncThunk('/comments/fetchComments', async(postId: string) => {
    const data = await axios.get(`/comments/${postId}`);
    return data.data
})

export interface commentsProps{
    comments:{
        items: CommentsProps[],
        status: string
    }
}

const initialState: commentsProps = {
    comments: {
        items: [],
        status: "loading"
    }
}

export const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers:{
        addComments: (state, action) =>{
            state.comments.items = action.payload;
        },
        clearComments: (state) =>{
            state.comments.items = [];
        }
    },
    extraReducers: (builder) =>{
        builder
        //comment
            .addCase(fetchPostComment.pending, (state) =>{
                state.comments.status = "loading"
            })
            .addCase(fetchPostComment.fulfilled, (state) =>{
                state.comments.status = "loaded"
                // state.comments.items = action.payload
            })

            .addCase(fetchGetComments.pending, (state) =>{
                state.comments.status = "loading"
            })
            .addCase(fetchGetComments.fulfilled, (state, action) =>{
                state.comments.status = "loaded",
                state.comments.items = action.payload
            })
    }
})

// export const selectIsAuth = (state: any) => Boolean(state.auth.data);
export const {addComments, clearComments} = commentsSlice.actions

export default commentsSlice.reducer
