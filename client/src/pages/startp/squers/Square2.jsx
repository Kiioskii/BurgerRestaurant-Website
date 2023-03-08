import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Square2=()=>{
    const navigate=useNavigate();
    return(
        <SquareContainer>
            <div className="minSquare">
                 <h1>wtorek</h1>
                 <div className="pContiner">
                 <p>-20% na każdą pizzę do godziny 14:00</p>    
                 </div>
                 <div className="ButtonContainer">
                    <button onClick={(e)=>navigate('/order')}>JEM</button>
                 </div>
            </div>
        </SquareContainer>
    )
}
export default Square2;

const SquareContainer=styled.div`
    width: 100%;
    height: 100%;
    background-color: #141212;
    border: 1px solid red;
    display: flex;
    align-items: center;
    color: white;
    display: flex;
    h1{
        text-align: center;
        text-transform: uppercase;
        font-size: 1.5vw;
    }
    .pContiner{
        
        width: 100%;
        /* border: 1px solid blue; */
        min-height: 30%;
        p{
        text-align: center;
        font-size: 1.5vw;
        }
    }
    .ButtonContainer{
        width: 100%;
        height: 20%;
        display: flex;
        align-items: center;
        button{
        color: white;
        border: 2px solid red;
        background-color: transparent;
        width: 60%;
        height: 100%;
        margin-left: auto;
        margin-right: auto;
        cursor: pointer;
        &:hover{
            background-color: red;
        }
        }
    }
    .minSquare{
        /* padding-top: 3%; */
        border: 1px solid red;
        width: 95%;
        height: 95%;
        margin-left: auto;
        margin-right: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`
