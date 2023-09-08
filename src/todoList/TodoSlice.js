import { createSlice } from "@reduxjs/toolkit";


export const lists = createSlice({
    name: 'todoList',
    initialState: {
        inputvalue: "",
        list: [],


    },

    reducers: {
        setInput: (state, action) => {
            state.inputvalue = action.payload
        },
        add: (state, action) => {
            state.list = [...state.list, state.inputvalue]
            state.inputvalue = " "
        },
        remove: (state, action) => {
            const handleData =  state.list.filter((any,i)=> i !== action.payload)
            state.list  =  handleData
        }

    }
})

export const { add, setInput, remove } = lists.actions;
export default lists.reducer


