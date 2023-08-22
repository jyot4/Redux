import { configureStore } from '@reduxjs/toolkit'
import slice from './Slice'


const Store = configureStore({
    reducer: {
        sliceCounter: slice
    }
})
export default Store