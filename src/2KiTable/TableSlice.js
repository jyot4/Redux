import { createSlice } from "@reduxjs/toolkit";


 export const Slices = createSlice({
    name: 'table2',
    initialState: {
        counting: 0,
        array: []
    },

    reducers    : {
        handle2Table: ((state, action) => {
            for (let i = 0; i >= 10; i++) {
                state.counting = state.counting + 2
                state.array = [...state.array, state.counting]
            }
        })
    }
})


 export const {handle2Table} = Slices.actions
 export default Slices.reducer

