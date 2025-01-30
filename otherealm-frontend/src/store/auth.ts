import axios from '../axios.ts'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { authDataProps, userPosts } from './interfaces.tsx';

export const fetchAuth = createAsyncThunk('/auth/fetchAuth', async (params: any) => {
    const { data } = await axios.post('/auth/login', params);
    return data
})

export const fetchRegister = createAsyncThunk('/auth/fetchRegister', async (params: any) => {
    const { data } = await axios.post('/auth/register', params);
    return data
})

export const fetchAuthMe = createAsyncThunk('/auth/fetchAuthMe', async () => {
    const { data } = await axios.get('/auth/me');
    return data
})

export const fetchUser = createAsyncThunk('/profile/getUser', async (nick: string) => {
    const { data } = await axios.get(`/profile/getUser/${nick}`);
    return data
})

export interface authProps {
    data: authDataProps | null
    status: string,

    userPosts: userPosts | [],
    feed: userPosts | [],
}

const initialState: authProps = {
    data: null,
    status: "loading",

    userPosts: [],
    feed: []
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.data = null
        },
        setFeed: (state, action) => {
            state.feed = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            //login
            .addCase(fetchAuth.pending, (state) => {
                state.status = "loading",
                    state.data = null
            })
            .addCase(fetchAuth.fulfilled, (state, action) => {
                state.status = "loaded",
                    state.data = action.payload
                    window.localStorage.setItem('authId', action.payload._id)
            })
            .addCase(fetchAuth.rejected, (state) => {
                state.status = "error",
                    state.data = null
            })

            //register
            .addCase(fetchRegister.pending, (state) => {
                state.status = "loading",
                    state.data = null
            })
            .addCase(fetchRegister.fulfilled, (state, action) => {
                state.status = "loaded",
                    state.data = action.payload
            })
            .addCase(fetchRegister.rejected, (state) => {
                state.status = "error",
                    state.data = null
            })

            //me
            .addCase(fetchAuthMe.pending, (state) => {
                state.status = "loading",
                    state.data = null
            })
            .addCase(fetchAuthMe.fulfilled, (state, action) => {
                state.status = "loaded",
                    state.data = action.payload
                window.localStorage.setItem('authId', action.payload._id)
            })
            .addCase(fetchAuthMe.rejected, (state) => {
                state.status = "error",
                    state.data = null
            })

            .addCase(fetchUser.pending, (state) => {
                state.status = "loading",
                    state.data = null
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.status = "loaded",
                    state.data = action.payload
            })
            .addCase(fetchUser.rejected, (state) => {
                state.status = "error",
                    state.data = null
            })
    }
})

// export const selectIsAuth = (state: any) => Boolean(state.auth.data);

export const { logout, setFeed } = authSlice.actions

export default authSlice.reducer
