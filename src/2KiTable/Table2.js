import React from 'react'
// import { UseSelector,useDispatch } from 'react-redux'
import { useDispatch, useSelector } from 'react-redux'
import {handle2Table}from '../2KiTable/TableSlice'

function Table2() {
    const dispatch = useDispatch()
    const tableSelector  = useSelector((state)=>{
        return  state.TableStore2
    })
  return (
    <div>
      <button onClick={()=> dispatch(handle2Table())}> print </button>
<table>
  <tr>
    <th>
      {
        tableSelector.array.map((totalTable)=>{
         return <tr>{totalTable}</tr>
        })
      }
    </th>
  </tr>
</table>



    </div>
  )
}

export default Table2
