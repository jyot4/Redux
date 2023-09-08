import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setInput , add ,remove} from './TodoSlice'




function Todo() {
  const dispatch = useDispatch()

  const todoselect = useSelector((state) => {
    return state.allTodo
  })

  // const [input, setInput] = useState()

  return (
    <>
      <div>
        <input type='text' placeholder='enter anything' value={todoselect.inputvalue} onChange={(e) => dispatch(setInput(e.target.value))}></input>
        <button onClick={() => dispatch(add())}>Print</button>
      </div>
      <ul>
        {
          todoselect.list.map((item , index) => {
            return <li>{item} 

            <button onClick={()=>dispatch(remove(index))}>remove</button>
            </li>
            

          })
        }

      </ul>


    </>
  )
}

export default Todo
