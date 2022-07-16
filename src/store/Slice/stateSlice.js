import { createSlice } from "@reduxjs/toolkit";

export const  stateSlice = createSlice({
    name: "StateList",
    initialState: {
        stateList: [],
        isPending: false,
        error: ""
    },
    reducers:{
        createList(state, action){
            state.stateList = action.payload.stateList;
            state.isPending = action.payload.isPending;
            state.error = action.payload.error
        }
    }
})

export const stateAction = stateSlice.actions;