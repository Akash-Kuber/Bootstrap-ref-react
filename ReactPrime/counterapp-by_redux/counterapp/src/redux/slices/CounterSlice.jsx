import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    value:0,
}

// Created createSlice Function (Reducer Function)
export const CounterSlice = createSlice({
    // step 1 ---> name
    name:"counter",
    // step 2 ---> initial state
    initialState,
    // step 3 ---> Reducer
    reducers:{
        increment: (state) => {
            state.value += 1;
        },

        decrement: (state) => {
            state.value -= 1;
        }
    }
})

// Syntax for fetching functions from createSlice()
export const {increment, decrement} = CounterSlice.actions;
export default CounterSlice.reducer;