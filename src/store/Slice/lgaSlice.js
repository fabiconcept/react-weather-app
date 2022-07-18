/* Importing the createSlice function from the reduxjs/toolkit library. */
import { createSlice } from "@reduxjs/toolkit";

/* Creating a reducer function that will be used to update the state of the application. */
export const  lgaSlice = createSlice({
    name: "lgaList",
    /* The initial state of the application. */
    initialState: {
        lgaList: [],
        isPending: false,
        error: ""
    },
    /* Creating a reducer function that will be used to update the state of the application. */
    reducers:{
        createList(state, action){
            state.lgaList = action.payload.lgaList;
            state.isPending = action.payload.isPending;
            state.error = action.payload.error
        }
    }
})

/* Exporting the actions from the lgaSlice. */
export const lgaAction = lgaSlice.actions;