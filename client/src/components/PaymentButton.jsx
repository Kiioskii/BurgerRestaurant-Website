import React from "react"
import axios from "axios"
import {useSelector} from "react-redux"
import {url} from "../components/API"
const PaymentButton=({productList})=>{
    
    const handleCheckout=()=>{
        axios.post(`${url}/stripe/create-checkout-session`,{
            productList
        }).then((res)=>{
            if(res.data.url){
                window.location.href=res.data.url
            }
        }).catch((err)=>console.log("błędzik"+err.message));
    }

    return(
        <>
            <button onClick={()=>handleCheckout()}>Płacę</button>
        </>
    )
}
export default PaymentButton;