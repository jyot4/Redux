import { createSlice } from "@reduxjs/toolkit";


export const lists = createSlice({
    name: 'todoList',
    initialState: {
        inputvalue : "",
        list: [],


    },

    reducers: {
        setInput:(state,action)=>{
            state.inputvalue = action.payload
        },
        add: (state, action) => {
            state.list = [...state.list, state.inputvalue]
        }

    }
})

export const { add , setInput } = lists.actions;
export default lists.reducer


