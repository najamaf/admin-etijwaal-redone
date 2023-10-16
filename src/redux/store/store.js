import { configureStore } from "@reduxjs/toolkit";
import openSlice from "../slices/openSlice";


export const store = configureStore({
    reducer: {
        open: openSlice,
    },
    devTools: process.env.NODE_ENV !== 'production'
});


