import { createSlice } from "@reduxjs/toolkit";


 export const redux = createSlice({
    name:"redd",
    initialState:{
        counter:0
    },
    reducers:{
        incre:(state,action)=>{
            state.counter  = state.counter+2
        },
        dec:(state,action)=>{
            state.counter = state.counter-1
        }

    }
})

 export const {incre,dec} = redux.actions

 export default redux.reducer
