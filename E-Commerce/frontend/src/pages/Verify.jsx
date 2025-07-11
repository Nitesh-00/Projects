import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../context/Context'
import { useSearchParams } from 'react-router-dom'
import { useEffect } from 'react'
import axios from "axios"
import {toast} from "react-toastify"

const Verify = () => {
    const {token,navigate,setCartItem,backendUrl} = useContext(UserContext)
    const [searchParams,setSearchParams] = useSearchParams();
    const success = searchParams.get('success');
    const orderId = searchParams.get('orderId');

    const verifyMethod = async () =>{
        try {
            if(!token){
                return null;
            }

            const response = await axios.post(backendUrl+"/api/order/verifyStripe",{success,orderId},{headers:{token}})
            if(response.data.success){
                setCartItem({});
                navigate("/orders")
            }else{
                navigate("/cart")
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message)
            
        }
    }

    useEffect(()=>{
        verifyMethod();
    },[token])

  return (
    <div>
      
    </div>
  )
}

export default Verify
