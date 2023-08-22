import  {createSlice} from '@reduxjs/toolkit'


 export const slice = createSlice({
    name: "priya",
    initialState:{
        counter : 0
    },
    reducers:{
        setIncrement:  (state,action)=>{
        state.counter = state.counter+1
        },
        setDecrement : (state,action)=>{
          state.counter =  state.counter - 1
        }

        
    }


})


 export  const {setIncrement,setDecrement} = slice.actions ;
 export default slice.reducer
