import axios from '../axios.ts'
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import { authDataProps, usersProps } from './interfaces.tsx';

export const fetchOneUser = createAsyncThunk('/profile/getUser/:nick', async(nick: string) => {
    const {data} = await axios.get(`/profile/getUser/${nick}`);
    return data
})


export const fetchUsers = createAsyncThunk('/profile/findUsers/:nick', async(nick: string) => {
    const {data} = await axios.get(`/profile/findUsers/${nick}`);
    return data
})

export const fetchFollowUser = createAsyncThunk('/profile/follow', async(fields: object) => {
    const {data} = await axios.patch('/profile/follow', fields);
    return data
})

export const fetchUnfollowUser = createAsyncThunk('/profile/unfollow', async(fields: object) => {
    const {data} = await axios.patch('/profile/unfollow', fields);
    return data
})

export interface userStateProps{
    users:{
        items: usersProps[],
        status: string
    },
    currentUser: {
        items: authDataProps | null,
        status: string
    }
}

const initialState: userStateProps = {
    users: {
        items: [],
        status: ''
    },
    currentUser: {
        items: null,
        status: ''
    }
}

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers:{
        clearUserState: (state) =>{
            state.currentUser.items = null
        }
    },
    extraReducers: (builder) =>{
        builder
            
            .addCase(fetchUsers.pending, (state) =>{
                state.users.status = "loading"
            })
            .addCase(fetchUsers.fulfilled, (state, action) =>{
                state.users.items = action.payload,
                state.users.status = "loadedwq"
            })
            .addCase(fetchUsers.rejected, (state) =>{
                state.users.status = "error"
            })
           
            .addCase(fetchOneUser.pending, (state) =>{
                state.currentUser.status = "loading"
            })
            .addCase(fetchOneUser.fulfilled, (state, action) =>{
                state.currentUser.status = "loaded",
                state.currentUser.items = action.payload
                window.localStorage.setItem('currentUser', action.payload._id);
            })
            .addCase(fetchOneUser.rejected, (state) =>{
                state.currentUser.status = "error"
            })

            .addCase(fetchFollowUser.pending, (state) =>{
                state.currentUser.status = "loading"
            })
            .addCase(fetchFollowUser.fulfilled, (state) =>{
                state.currentUser.status = "follow"
            })
            .addCase(fetchFollowUser.rejected, (state) =>{
                state.currentUser.status = "error"
            })

            .addCase(fetchUnfollowUser.pending, (state) =>{
                state.currentUser.status = "loading"
            })
            .addCase(fetchUnfollowUser.fulfilled, (state) =>{
                state.currentUser.status = "unfollow"
            })
            .addCase(fetchUnfollowUser.rejected, (state) =>{
                state.currentUser.status = "error"
            })
    }
})

// export const selectIsAuth = (state: any) => Boolean(state.auth.data);

export const {clearUserState} = usersSlice.actions

export default usersSlice.reducer
