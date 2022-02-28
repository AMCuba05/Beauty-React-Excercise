import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosClient } from '../../utils/axios'
import {USERS_ENDPOINT} from "../../utils/constants";

const initialState = []

export const fetchUsers = createAsyncThunk('users/fetchUsers',async ()=> {
    const response = await AxiosClient.get(USERS_ENDPOINT)
    return response.data
})

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            return action.payload
        })
    }
})
export const getUsers = state => state.users

export default usersSlice.reducer
