import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"


export const getPosts = createAsyncThunk('feed/getPosts', async () => {
    const res = await axios.get(`http://localhost:5000/api/posts`);

    return res.data;
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
    }
})


export default postsSlice.reducer