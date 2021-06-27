import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    profile: null,
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
            state.profile = action.payload;
            state.status = 'success'
        },
        [getProfile.rejected]: (state, action) => {
            state.error = action.payload;
            state.status = 'error'
        }
    }
})

export default profileSlice.reducer