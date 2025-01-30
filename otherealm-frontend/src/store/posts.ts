import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { postProps, userPosts } from "./interfaces"
import axios from '../axios'


export const fetchPosts = createAsyncThunk('/posts/:userId', async (userId: string) => {
    const {data} = await axios.get(`/posts/${userId}`);
    return data;
})

export const fetchAllPosts = createAsyncThunk('/posts', async () => {
    const { data } = await axios.get('/posts');
    return data
})

export const fetchOnePost = createAsyncThunk('/post/:postId', async (postId: string) => {
    const { data } = await axios.get(`/post/${postId}`);
    return data
})

export const fetchAddPost = createAsyncThunk('/post/add', async (fields: object) => {
    const { data } = await axios.post('/posts', fields);
    return data
}
)

export const fetchPatchPost = createAsyncThunk('/post/patch', async ({ postId, fields }: { postId: string, fields: object }) => {
    await axios.post(`/post/${postId}`, fields);
}
)

export const fetchDeletePost = createAsyncThunk('/post/delete', async (postId: string) => {
    const { data } = await axios.delete(`post/${postId}`)
    return data
})

export const fetchPostsFeed = createAsyncThunk('/posts/feed', async (userId: string) => {
    const { data } = await axios.get(`/posts/feed/${userId}`)
    return data
})

export interface postsProps {
    userPosts: {
        userPosts: userPosts[],
        status: string
    },
    feed: {
        feedPosts: userPosts[],
        status: string
    },
    currentPost: {
        post: postProps | null,
        status: string
    }
}

const initialState: postsProps = {
    userPosts: {
        userPosts: [],
        status: ''
    },
    feed: {
        feedPosts: [],
        status: ''
    },
    currentPost: {
        post: null,
        status: ''
    }
}

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        clearPostsState: (state) => {
            state.userPosts.userPosts = []
        },
        setCurrentPostState: (state, action) =>{
            state.currentPost.post = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.userPosts.status = 'loading'
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.userPosts.status = 'loaded'
                state.userPosts.userPosts = action.payload
            })
            .addCase(fetchPosts.rejected, (state) => {
                state.userPosts.status = 'rejected'
            })

            .addCase(fetchAllPosts.pending, (state) => {
                state.userPosts.status = 'loading'
            })
            .addCase(fetchAllPosts.fulfilled, (state, action) => {
                state.userPosts.status = 'loaded'
                state.userPosts.userPosts = action.payload
            })
            .addCase(fetchAllPosts.rejected, (state) => {
                state.userPosts.status = 'rejected'
            })

            .addCase(fetchOnePost.pending, (state) => {
                state.currentPost.status = 'loading'
            })
            .addCase(fetchOnePost.fulfilled, (state, action) => {
                state.currentPost.status = 'loaded'
                state.currentPost.post = action.payload
            })
            .addCase(fetchOnePost.rejected, (state) => {
                state.currentPost.status = 'rejected'
            })

            .addCase(fetchAddPost.pending, (state) => {
                state.currentPost.status = 'loading'
            })
            .addCase(fetchAddPost.fulfilled, (state) => {
                state.currentPost.status = 'added'
            })
            .addCase(fetchAddPost.rejected, (state) => {
                state.currentPost.status = 'rejected'
            })

            .addCase(fetchPatchPost.pending, (state) => {
                state.currentPost.status = 'loading'
            })
            .addCase(fetchPatchPost.fulfilled, (state) => {
                state.currentPost.status = 'patched'
            })
            .addCase(fetchPatchPost.rejected, (state) => {
                state.currentPost.status = 'rejected'
            })

            .addCase(fetchDeletePost.pending, (state) => {
                state.currentPost.status = 'loading'
            })
            .addCase(fetchDeletePost.fulfilled, (state) => {
                state.currentPost.status = 'deleted'
            })
            .addCase(fetchDeletePost.rejected, (state) => {
                state.currentPost.status = 'rejected'
            })

            .addCase(fetchPostsFeed.pending, (state) => {
                state.feed.status = 'loading'
            })
            .addCase(fetchPostsFeed.fulfilled, (state, action) => {
                state.feed.status = 'loaded'
                state.feed.feedPosts = action.payload
            })
            .addCase(fetchPostsFeed.rejected, (state) => {
                state.feed.status = 'rejected'
            })
    }
})

export const { clearPostsState, setCurrentPostState } = postsSlice.actions

export default postsSlice.reducer