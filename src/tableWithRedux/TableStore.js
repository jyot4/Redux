import {configureStore} from '@reduxjs/toolkit'
import TableSlice from './TableSlice'

const Tables = configureStore({
    reducer:{
        TableStore : TableSlice
    }
})

export default Tables