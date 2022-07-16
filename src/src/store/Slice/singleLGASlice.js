import { createSlice } from "@reduxjs/toolkit";


export const sLgaSlice = createSlice({
    name: "selected lgas",
    initialState:{
        lgas: []
    },
    reducers:{
        updateLGA(state, action){
            state.lgas = action.payload.lgas;
        }
    }
})

export const sLgaActions = sLgaSlice.actions;