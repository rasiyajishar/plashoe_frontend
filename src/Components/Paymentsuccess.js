import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Axios } from '../App'
const Paymentsuccess = () => {


    
const Success = async()=>{
    try{
        const response = await Axios.get("/user/payment/success");
        console.log(response)
    }
    catch(error){
        console.log(error)
    }
}
useEffect(()=>{
    Success()
},[])



  return (
    <div>
        <div> <img
            src="data:image/png;base64,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"
            alt="Success"
         /> </div>
        <h3>Thank you for your purchase</h3>
    <Link to="/Collection">Continue Shopping</Link>
    </div>
  )
}

export default Paymentsuccess