import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {  left,right } from './ProductSlice'
import { fetchApi } from './ProductSlice'
import './Product.css'
// import productSlice from './ProductSlice'






function Product() {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchApi())
    },[])

const selector = useSelector((selectData)=>{
    return selectData.data
})

  return (
    <div className='wapper' >
      {/* <button onClick={ ()=>{dispatch(number())}}>hello</button> */}
      <p>{selector.currentState}</p>
      {/* <p>{selector.productOf}</p> */}
      
        {
            selector.productOf.map((item, index)=>{
             if(selector.currentState===index){
                return <div className='main'>
                <h1>{item.title}</h1>
                <img src={item.image}></img>
                <p> Price :- {item.price}</p>
               </div>
             }
             else{
                
             }
              
                
            })
        }

        {/* <div className='main'>
            <h1>{selector.productOf[selector.currentState].title}</h1>
            <img src={selector.productOf[selector.currentState].image}></img>
        </div> */}

      <h1 className='left' onClick={()=> {dispatch(left())}}>left</h1>
      <h1 className='right' onClick={()=>{dispatch(right())}}>right</h1>
      {/* <button onClick={()=>{dispatch(para())}}>bye</button> */}

    </div>
  )
}

export default Product
