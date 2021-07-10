import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const getProfile = createAsyncThunk('profile/getProfile', async (userId) => {
    const res = await axios.get(`http://localhost:5000/api/profile/user/${userId}`);
    return res.data;
})

export const removePost = createAsyncThunk('profile/post/removePost', async (post) => {
    const res = await axios.delete(`http://localhost:5000/api/posts/${post._id}`)
    return res.data
})

export const follow = createAsyncThunk('profile/addFollow', async (profile) => {
    const res = await axios.put(`http://localhost:5000/api/profile/follow/${profile.user._id}`)
    return res.data
})

export const unfollow = createAsyncThunk('profile/removeFollow', async (profile) => {
    const res = await axios.put(`http://localhost:5000/api/profile/unfollow/${profile.user._id}`)
    console.log(res.data)
    return res.data
})

const initialState = {
    profile: null,
    posts: [],
    status: 'idle',
    error: null
}

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
    extraReducers: {
        [getProfile.pending]: (state) => {
            state.status = 'loading'
        },
        [getProfile.fulfilled]: (state, action) => {
            state.profile = action.payload.profile;
            state.posts = action.payload.posts;
            state.status = 'success'
        },
        [getProfile.rejected]: (state, action) => {
            state.error = action.payload;
            state.status = 'error'
        },

        [removePost.fulfilled]: (state, action) => {
            const x = state.posts.filter(post => post._id !== action.payload.postId)
            state.posts = x
        },

        [follow.fulfilled]: (state, action) => {
            console.log(action.payload)
            state.profile.followers = action.payload.profile.followers
        },

        [unfollow.fulfilled]: (state, action) => {
            console.log(action.payload)
            state.profile.followers = action.payload.profile.followers
        }
    }
})

export default profileSlice.reducer