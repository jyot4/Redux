import {configureStore} from '@reduxjs/toolkit'
import numberValue from "./ProductSlice"

 const product = configureStore({
    reducer: {
        data :numberValue
    }
})

export default product;

