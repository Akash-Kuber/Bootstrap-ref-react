import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./slices/CounterSlice";

// Centralize store for data
export const store = configureStore({
    reducer: {
        // Slicer (first step which is mention in "CounterSlice.jsx" (key)) : Reducer
        counter : CounterSlice
    },
})