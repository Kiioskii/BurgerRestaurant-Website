import React from "react";
import styled from "styled-components";
import {menuData} from "../assets/data/menu"
import MenuCart from "./menuCart";
const Menu=({position})=>{

    return(
        <MenuC>
            <div className="MenuLeyout">
                {menuData.map((val,i)=>{
                    if(val.type===position){
                        return(
                            <MenuCart key={i} item={val}/>
                            )
                        }
                    })}
            </div>
        </MenuC>
    )
}
export default Menu;

const MenuC=styled.div`
    height: auto;
    /* border: 3px solid orange; */
    display: flex;
    /* flex-direction: column; */
    /* align-content: center; */
    justify-content: center;
    padding-top: 2%;
    background-image: url('https://images.unsplash.com/photo-1589110964178-d9296fc48111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80');
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
    background-size: cover;
    /* background-image: url(''); */
    .MenuLeyout{
        background-color: #e8c4c4;
        width: 70%;
        border: 4px solid #276882;
        padding: 5px;
        display: flex;
        flex-wrap: wrap;
        column-gap: 2%;
        row-gap: 3px;
        height: 100%;
    }
`