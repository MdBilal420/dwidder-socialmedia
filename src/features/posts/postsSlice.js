import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"


export const getPosts = createAsyncThunk('feed/getPosts', async () => {
    const res = await axios.get(`http://localhost:5000/api/posts`);
    return res.data;
})

export const addPost = createAsyncThunk('feed/addPost', async (postContent) => {
    const res = await axios.post(`http://localhost:5000/api/posts`, {
        text: postContent
    })
    return res.data
})


export const addLike = createAsyncThunk('feed/post/like', async (post) => {
    const res = await axios.put(`http://localhost:5000/api/posts/like/${post._id}`)
    return res.data
})

export const removeLike = createAsyncThunk('feed/post/unlike', async (post) => {
    const res = await axios.put(`http://localhost:5000/api/posts/unlike/${post._id}`)
    return res.data
})

const initialState = {
    posts: [],
    status: 'idle',
    error: null,
}


const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: {
        [getPosts.pending]: (state) => {
            state.status = 'loading'
        },

        [getPosts.fulfilled]: (state, action) => {
            state.posts = action.payload;
            state.status = 'idle'
        },

        [getPosts.rejected]: (state, action) => {
            state.status = 'error';
            state.error = action.error.message
        },

        [addPost.fulfilled]: (state, action) => {
            state.posts.unshift(action.payload)
        },

        [addLike.fulfilled]: (state, action) => {
            const postIndex = state.posts.findIndex((post) => post._id === action.payload._id)
            state.posts[postIndex] = action.payload
        },

        [removeLike.fulfilled]: (state, action) => {
            const postIndex = state.posts.findIndex((post) => post._id === action.payload._id)
            state.posts[postIndex] = action.payload
        }
    }
})


export default postsSlice.reducer