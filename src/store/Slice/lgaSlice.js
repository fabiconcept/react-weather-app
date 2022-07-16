import { createSlice } from "@reduxjs/toolkit";

export const  lgaSlice = createSlice({
    name: "lgaList",
    initialState: {
        lgaList: [],
        isPending: false,
        error: ""
    },
    reducers:{
        createList(state, action){
            state.lgaList = action.payload.lgaList;
            state.isPending = action.payload.isPending;
            state.error = action.payload.error
        }
    }
})

export const lgaAction = lgaSlice.actions;