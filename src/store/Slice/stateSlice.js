/* Importing the createSlice function from the reduxjs/toolkit library. */
import { createSlice } from "@reduxjs/toolkit";

/* Creating a reducer function. */
export const  stateSlice = createSlice({
    name: "StateList",
    initialState: {
        stateList: [],
        isPending: false,
        error: ""
    },
    /* Creating a reducer function. */
    reducers:{
        createList(state, action){
            state.stateList = action.payload.stateList;
            state.isPending = action.payload.isPending;
            state.error = action.payload.error
        }
    }
})

/* Creating an object with the same name as the reducer function. */
export const stateAction = stateSlice.actions;