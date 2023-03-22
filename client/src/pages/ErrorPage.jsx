import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const ErrorPage=()=>{

    const navigate=useNavigate();

    return(
        <SucesContainer>
            <h1>COŚ POSZŁO NIE TAK :/</h1>
            <h1>ERR.404</h1>
            <button onClick={(e)=>navigate("/")}>Wróć</button>
        </SucesContainer>
    )

}

export default ErrorPage;

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