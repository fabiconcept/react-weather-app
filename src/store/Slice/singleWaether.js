/* Importing the createSlice function from the reduxjs/toolkit library. */
import { createSlice } from "@reduxjs/toolkit";

/* Creating a slice of the state. */
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

/* Exporting the actions from the reducer. */
export const singleWeatherAction = singleWeatherSlice.actions;