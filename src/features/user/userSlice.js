import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

export const login = createAsyncThunk('user/login', async (formData) => {
    const res = await axios.post('https://dwidder-backend.herokuapp.com/api/auth/', formData)

    if (res.data) {
        const user = res.data.user
        const token = res.data.token
        localStorage.setItem('user', JSON.stringify({ user: user, token: token }))
        if (token) {
            axios.defaults.headers.common["Authorization"] = token;
        } else {
            delete axios.defaults.headers.common["Authorization"];
        }
    }

    return res.data
});

export const getUser = createAsyncThunk('user/getUser', async () => {
    const res = await axios.get('https://dwidder-backend.herokuapp.com/api/auth')
    return res.data
});

const initialState = {
    user: null,
    status: 'idle',
    error: null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        removeUser: (state) => {
            state.user = null;
            state.status = 'idle';
            state.error = null
        }
    },
    extraReducers: {

        [login.pending]: (state) => {
            state.status = 'loading'
        },

        [login.fulfilled]: (state, action) => {
            state.user = action.payload.user;
            state.status = 'idle'
        },

        [login.rejected]: (state, action) => {
            state.status = 'error';
            state.error = action.error.message
        },

        [getUser.pending]: (state) => {
            state.status = 'loading'
        },

        [getUser.fulfilled]: (state, action) => {
            state.user = action.payload;
            state.status = 'idle'
        },

        [getUser.rejected]: (state, action) => {
            state.status = 'error';
            state.error = action.error.message
        }
    }
})


export const { removeUser } = userSlice.actions
export default userSlice.reducer