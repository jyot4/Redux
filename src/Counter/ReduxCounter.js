import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {incre,dec} from './ReduxSlice'

function ReduxCounter() {

const dispatch = useDispatch()
const selector = useSelector((state)=>{
  return state.reduxStores
})


  return (
    <div>
      <button onClick={()=>dispatch(incre())}> Increament </button>
      <p>{selector.counter}</p>
      <button onClick={()=>dispatch(dec())}> decreament </button>
    </div>
  )
}

export default ReduxCounter
