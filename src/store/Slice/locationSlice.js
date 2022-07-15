import { createSlice, CreateSlice } from "@reduxjs/toolkit";

export const locationSlice = createSlice({
    name: "locations",
    initialState: {
        states: [],
        lgas: [],
        isLoading: true,
        err: null
    },
    reducers:{
        addState(state, action){
            state.states = action.payload.area
        },
        addLGA(state, action){
            state.lgas = action.payload.lgas
        },
        isLoad(state, action){
            state.isLoading = action.payload.isLoading;
        },
        err(state, action){
            state.err = action.payload.err;
        }
    }
})

export const locationAction = locationSlice.actions;