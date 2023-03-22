import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const SucessOrder=()=>{

    const navigate=useNavigate();

    return(
        <SucesContainer>
            <h1>Udało się złożyć zamówienie!!!</h1>
            <p>Szczegóły zamówienia zostały sotarczone na adres email oraz sms na wskazany nuemr</p>
            <p>Życzymy smaczeno!!!</p>
            <button onClick={(e)=>navigate("/")}>WRACAM</button>
        </SucesContainer>
    )

}

export default SucessOrder;

const SucesContainer=styled.div`
    height: 100vh;
    width: 100%;
    padding-top: 30vh;
    background-color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    color: white;
    h1{
        font-family: 'Oswald', sans-serif;
        font-size: 2vw;
    }
    P{
        font-size: 1.4vw;
    }
    button{
            font-family: 'Oswald', sans-serif;
            border: 3px solid red;
            margin-top: -8vh;
            background-color: #ffffff1e;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            width: 14vw;
            height: 10vh;
            font-size: 2vw;
            cursor: pointer;
            text-transform: uppercase;
            background-color: #8d1d1d;
            &:hover{
                background-color: #651919; 
            }
        }

`