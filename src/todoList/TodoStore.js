import {configureStore} from '@reduxjs/toolkit'
import data from './TodoSlice'


export const todo = configureStore({
    reducer : {
    allTodo : data
    }
})