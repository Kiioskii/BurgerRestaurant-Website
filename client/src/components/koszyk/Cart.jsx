import React from "react";
import styled from "styled-components";
import { FaShoppingCart } from 'react-icons/fa';
const Cart =()=>{

    return(
        <CartContainer>
            <FaShoppingCart className="ShopCart" />
        </CartContainer>
    )

}
export default Cart;
const CartContainer=styled.div`
    /* position: absolute; */
    margin-top: -11vh;
    color: white;
    height: 5vw;
    width: 5vw;
    text-align: center;
    cursor: pointer;
    display: flex;
    align-items: center;
    background-color: #00000057;
    border: 3px solid red;
    border-radius: 8%;
    
    position: -webkit-sticky;
    position: sticky;
    bottom: 5vh ;
    left: 93vw;
    z-index: 10;

    .ShopCart{
        margin-left: auto;
        margin-right: auto;
        width: 7vh;
        height: 7vh;
        color:  red;
    }

    &:hover{
        background-color: #000000a4;
    }
`
