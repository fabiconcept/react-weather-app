import { createSlice } from "@reduxjs/toolkit";

export const singleWeatherSlice = createSlice({
    name: "SingleWeather",
    initialState: {
        weather: [],
        isLoading: true,
        error: ''
    },
    reducers:{
        addWeather(state, action){
            state.weather = action.payload.weather;
        }
    }
});

export const singleWeatherAction = singleWeatherSlice.actions;