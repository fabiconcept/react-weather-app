/* Importing the createSlice function from the reduxjs/toolkit library. */
import { createSlice } from "@reduxjs/toolkit";


/* Creating a slice of the state. */
export const sLgaSlice = createSlice({
    name: "selected states",
    initialState:{
        states: []
    },
    /* Updating the state of the slice. */
    reducers:{
        updateLGA(state, action){
            state.states = action.payload.states;
        }
    }
})

/* Exporting the actions from the slice. */
export const sLgaActions = sLgaSlice.actions;