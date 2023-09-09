import { createSlice } from "@reduxjs/toolkit";


export const lists = createSlice({
    name: 'todoList',
    initialState: {
        inputvalue: "",
        list: [],
        updateValue: -1


    },

    reducers: {
        setInput: (state, action) => {
            state.inputvalue = action.payload
        },
        add: (state, action) => {
            // state.list = [...state.list, state.inputvalue]

            if (state.updateValue !== -1) {
                const editindex = [...state.list]
                editindex[state.updateValue] = state.inputvalue
                state.list = editindex;
                state.updateValue = -1

                console.log(editindex)
            }
            else {
                if (state.inputvalue.length !== 0) {
                    state.list = [...state.list, state.inputvalue]
                }

                state.inputvalue = " "
            }
        },
        remove: (state, action) => {
            const handleData = state.list.filter((any, i) => i !== action.payload)
            state.list = handleData
        },

        update: (state, action) => {
            // setInput(state.list, state.inputvalue)
            // state.editindex = [...state.inputvalue]

            state.updateValue = action.payload
                state.inputvalue = state.list[state.updateValue]
               
            

        }
    }
})

export const { add, setInput, remove, update} = lists.actions;
export default lists.reducer


