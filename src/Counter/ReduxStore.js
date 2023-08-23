import { configureStore } from "@reduxjs/toolkit";
import redux from './ReduxSlice'

const ReduxStore = configureStore({
    reducer: {
        reduxStores : redux
    }
})
export default ReduxStore