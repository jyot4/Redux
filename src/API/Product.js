import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { left, right } from './ProductSlice'
import { fetchApi } from './ProductSlice'
import './Product.css'
// import productSlice from './ProductSlice'






function Product() {
    const dispatch = useDispatch()
   
    const selector = useSelector((selectData) => {
        return selectData.data
    })
    useEffect(() => {
        dispatch(fetchApi(selector.currentState))
    }, [selector.currentState])

    return (
        <div className='wapper' >
       { selector.loadingData  ? (
        <p> Loading....</p>
       ) : ( <div className=' first'>
       <p>{selector.currentState}</p>
    

       {
           selector.productOf.map((item, index) => {
               if (selector.currentState === index) {
                   return <div className='main'>
                       <h1>{item.title}</h1>
                    <img src = { (item.image < 0 ? "not found" : item.image)} alt='image'></img>
                      
                       <p> Price :- {item.price}</p>
                   </div>
               }
               else {

               }


           })
       }

       

       <button className='left' onClick={() =>  dispatch(left()) } 
       disabled = { selector.currentState  > 18 ? true: false}
       >
         left
       </button>
       <button className='right' onClick={() =>  dispatch(right()) } disabled = {selector.currentState < 1 ? true : false} >right</button>
       {/* <button onClick={()=>{dispatch(para())}}>bye</button> */}
       </div>)}
           
        </div>
    )
}

export default Product








