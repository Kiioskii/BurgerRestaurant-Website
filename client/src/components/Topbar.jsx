import React from "react";
import styled from "styled-components";

const Topbar=({takePosition,position})=>{

    return(
        <TopbarContainer>
            <div className="typesContainer">
                    <div  className="typeContainer" style={position=="antipasta"?{color:'#ab1111',borderBottom:'3px solid #ab1111'}:{}} onClick={(e)=>takePosition("antipasta")}>
                        <h1>antipasta</h1>
                    </div>
                <div  className="typeContainer" style={position=="pizza"?{color:'#ab1111',borderBottom:'3px solid #ab1111'}:{}} onClick={(e)=>takePosition("pizza")}>
                    <h1>pizza</h1>
                </div>
                <div  className="typeContainer" style={position=="pasta"?{color:'#ab1111',borderBottom:'3px solid #ab1111'}:{}} onClick={(e)=>takePosition("pasta")}>
                    <h1>pasta</h1>
                </div>
                <div  className="typeContainer" style={position=="wino"?{color:'#ab1111',borderBottom:'3px solid #ab1111'}:{}} onClick={(e)=>takePosition("wino")}>
                    <h1>Wino</h1>
                </div>
            </div>
        </TopbarContainer>
    )
}

export default Topbar;
const TopbarContainer=styled.div`
font-family: 'Gloock', serif;
    border: 1px solid green;
    height: 20vh;
    width: 100%;
    display: flex;
    .typesContainer{
        border: 1px solid violet;
        width: 80%;
        height: 100%;
        display: flex;
        flex-direction: row;
        margin-left: auto;
        margin-right: auto;
        gap: 10%;
        padding-top: 1%;
    }
    .typeContainer{
        width: 20%;
        text-transform: uppercase;
        color: black;
        border-bottom: 3px solid green;
        height: 60%;
        text-align: center;
        cursor: pointer;
            &:hover{
                color: #ab1111;
                border-bottom: 3px solid #ab1111;
            }
    }
    #antipasta{
        background-image: url('https://images.unsplash.com/photo-1453078977505-10c3e375c2a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80');

    }
`