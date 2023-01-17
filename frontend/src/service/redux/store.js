import {configureStore} from "@reduxjs/toolkit";
import {UserReducer} from "./slices/UserSlice";
import {FilmReducer} from "./slices/FilmSlice";

export const store = configureStore({
    reducer: {
        UserReducer,
        FilmReducer
    }
})