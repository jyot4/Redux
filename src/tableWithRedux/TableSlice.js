import { createSlice } from "@reduxjs/toolkit";

 export const TableSlice = createSlice({
    name : 'Table',
    initialState:{
        count:0,
        tableValue :[]
    },
    reducers:{
        handleTable: (state,action)=>{
            for(let i=1 ; i<=10;i++){
                state.count=state.count+2
                state.tableValue=[...state.tableValue,state.count]
            }
        }
    }
})

 export const {handleTable} = TableSlice.actions
export default TableSlice.reducer

