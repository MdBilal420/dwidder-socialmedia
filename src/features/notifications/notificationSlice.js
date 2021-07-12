import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"


export const getNotifications = createAsyncThunk('notification/getNotifications', async (profileId) => {
    const res = await axios.get(`https://dwidder-backend.herokuapp.com/api/notification/${profileId}`)
    console.log(res.data)
    return res.data
})


const initialState = {
    notifications: [],
    status: 'idle',
    error: null
}


const notificationSlice = createSlice({
    name: 'notification',
    initialState,

    reducers: {
        logout: (state) => {
            state.notifications = [];
            state.status = 'idle';
            state.error = null
        }
    },

    extraReducers: {
        [getNotifications.pending]: (state) => {
            state.status = 'loading'
        },

        [getNotifications.fulfilled]: (state, action) => {
            state.notifications = action.payload;
            state.status = 'idle'
        },

        [getNotifications.rejected]: (state, action) => {
            state.status = 'error'
            state.error = action.error.message
        }
    }
})

export default notificationSlice.reducer