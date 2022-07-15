import { createSlice } from "@reduxjs/toolkit";

export const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        weather: [],
        isLoading: true,
        err: null
    },
    reducers: {
        addWeather(state, action){
            state.weather = action.payload.weather;
        },
        isLoad(state, action){
            state.isLoading = action.payload.isLoading;
        },
        err(state, action){
            state.err = action.payload.err;
        }
    }
})

export const weatherAction = weatherSlice.actions;