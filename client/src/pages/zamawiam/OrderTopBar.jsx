import React from "react";
import styled from "styled-components";

const OrderTopBar=({handleOrder})=>{


    return(
        <OrderTopBarContainer>
            <div className="textTopbar">
                <div className="textXectionTopBar" onClick={(e)=>handleOrder('przystawka')}>pRZYSTAWKI</div>
                <div className="textXectionTopBar" onClick={(e)=>handleOrder('burger')}>Burger</div>
                <div className="textXectionTopBar" onClick={(e)=>handleOrder('steak')}>Steak</div>
                <div className="textXectionTopBar" onClick={(e)=>handleOrder('pizza')}>Pizza</div>
                <div className="textXectionTopBar" onClick={(e)=>handleOrder('soda')}>Napoje</div>
            </div>
        </OrderTopBarContainer>
    )
}
export default OrderTopBar;

const OrderTopBarContainer=styled.div`
    height: 20vh;
    border: 2px solid red;
    display: flex;
    align-items: center;
    background-color: #2a2828;
    width: 100%;
    .textTopbar{
        margin-left: auto;
        margin-right: auto;
        /* border: 2px solid blue; */
        width: 50vw;
        height: 90%;
        display: flex;
        flex-direction: row;
        color: white;
    }
    .textXectionTopBar{
        border: 2px solid black;
        width: 10vw;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        text-transform: uppercase;
        background-color: #ba1919;
        font-family: 'Oswald', sans-serif;
        font-size: 2vw;
        cursor: pointer;
        &:hover{
            background-color: #c24545;
        }
    }
`