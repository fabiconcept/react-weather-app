/* Importing the createSlice function from the reduxjs/toolkit library. */
import { createSlice } from "@reduxjs/toolkit";

/* Creating a slice of the store. */
export const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        weather: [],
        isLoading: true,
        err: null
    },
    reducers: {
        addWeather(state, action){
            const data = action.payload.weather;

            let exist = state.weather.find(item => item.location.name === data.location.name)

            if (!exist) {
                state.weather.push(data);
            }else{
                exist = data
            }
        },
        isLoad(state, action){
            state.isLoading = action.payload.isLoading;
        },
        err(state, action){
            state.err = action.payload.err;
        }
    }
})

/* Creating an object with all the actions that can be dispatched to the store. */
export const weatherAction = weatherSlice.actions;