import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { setDecrement , setIncrement } from './Slice'



function Counter() {

    const dispatch = useDispatch()
    const data = useSelector((state) => {
        return state.sliceCounter
    })

    
    return (
        <div>
            <button onClick={()=>dispatch(setIncrement())}>increment</button>
            <p>{data.counter}</p>
            <button onClick={()=>dispatch(setDecrement())}>decrement</button>
        </div>
    )
}

export default Counter
