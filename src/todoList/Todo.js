import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setInput , add ,remove,update } from './TodoSlice'
import './Todo.css'
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';




function Todo() {
  const dispatch = useDispatch()

  const todoselect = useSelector((state) => {
    return state.allTodo
  })

  // const [input, setInput] = useState()

  return (
    <>
    <div className='main'>
      <div className='left'>
        <input type='text' placeholder='enter anything' value={todoselect.inputvalue} onChange={(e) => dispatch(setInput(e.target.value))}></input>
        <button onClick={() => dispatch(add())}><AddIcon/></button>
      </div>
      <div>
      <ul>
        {
          todoselect.list.map((item , index) => {
            return <li>{item} 

            <button onClick={()=>dispatch(remove(index))}><DeleteIcon/></button> 
            <button onClick={()=>dispatch(update(index))}><EditIcon/></button>
            </li>
            

          })
        }

      </ul>
      </div>
      </div>

    </>
  )
}

export default Todo
