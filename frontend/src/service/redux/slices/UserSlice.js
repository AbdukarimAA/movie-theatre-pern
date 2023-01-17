import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    user: null,
    loading: false,
    error: null
}

export const authRegister = createAsyncThunk(
    'auth/authRegister',
    async function({username, email, password}, {rejectWithValue}) {
        try {
            const res = await axios.post('http://localhost:5000/api/auth/registration', {username, email, password})

            console.log('Register Request Data => ', res)
            return res.data
        } catch (e) {
            return rejectWithValue(e)
        }
    }
);

export const userLogin = createAsyncThunk(
    'auth/userLogin',
    async function({email, password}, {rejectWithValue, dispatch}) {
        try {
            const res = await axios.post('http://localhost:5000/api/auth/login',{email, password})
            // dispatch(addUser(res.data))

            console.log('Login Request Data => ', res)
            return res.data
        } catch (e) {
            return rejectWithValue(e)
        }
    }
);

const UserSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUser(state, action){
            state.user = action.payload
        }
    },
    extraReducers: {
        [authRegister.pending]: (state) => {
            state.loading = true;
            state.error = null;
        },
        [authRegister.fulfilled]: (state) => {
            state.loading = false
            state.error = null
        },
        [authRegister.rejected]: (state, action) => {
            state.loading = false
            state.error = true
        },
        [userLogin.pending]: (state) => {
            state.loading = true;
            state.error = null;
        },
        [userLogin.fulfilled]: (state) => {
            state.loading = false
            state.error = null
        },
        [userLogin.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
    }
});

export const UserReducer = UserSlice.reducer;
export const {addUser} = UserSlice.actions;

