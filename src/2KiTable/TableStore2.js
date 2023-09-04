import { configureStore } from "@reduxjs/toolkit";
import stores from '../2KiTable/TableSlice'

const Tables = configureStore({
    reducers:{
        TableStore2 : stores
    }
})

export default Tables