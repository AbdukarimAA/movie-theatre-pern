import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {authRegister} from "./UserSlice";

const initialState = {
    loading: false,
    error: null
}

export const createFilm = createAsyncThunk(
    'createMovie',
    async function({title, country, desc, director, genres, img, imgSmall, imgTitle, limit, ratings, trailer, video, year, isSeries}, {rejectWithValue}) {
        try {
            const res = await axios.post('http://localhost:5000/api/movie', {title, country, desc, director, genres, img, imgSmall, imgTitle, limit, ratings, trailer, video, year, isSeries})

            console.log('Create movie Request Data => ', res)
            return res.data
        } catch (e) {
            return rejectWithValue(e)
        }
    }
)

const FilmSlice = createSlice({
    name: "film",
    initialState,
    reducers: {

    },
    extraReducers: {
        [createFilm.pending]: (state) => {
            state.loading = true;
            state.error = null;
        },
        [createFilm.fulfilled]: (state) => {
            state.loading = false
            state.error = null
        },
        [createFilm.rejected]: (state, action) => {
            state.loading = false
            state.error = true
        },
    }
})

export const FilmReducer = FilmSlice.reducer;

