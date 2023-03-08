import React from "react";
import styled from "styled-components";


const MenuCart=({item})=>{

    return(
        <CartContainer>
            <div className="topPart">
                <div className="leftSideCard">
                    <h1>{item.name}</h1>
                </div>
                <div className="rightSideCard">
                    <h1>{item.price}zł</h1>
                </div>
            </div>
            <div className="bottomPart">
                <p>{item.desc}</p>
            </div>
        </CartContainer>
    )

}
export default MenuCart;

const CartContainer=styled.div`
    width: 33vw;
    height: 20vh;
    color: black;
    border: 2px solid #5f5b5b;
    display: flex;
    flex-direction: column;
    padding: 1%;
    font-family: 'Gloock', serif;
    cursor: pointer;
    .topPart{
        display: flex;
        flex-direction: row;
        align-content: space-between;
        justify-content: space-between;
        h1{
            font-size: 1.2vw;
        }
    }
    .leftSideCard{
        width: 50%;
        /* border: 1px solid red; */
        text-transform: uppercase;
    }
    .rightSideCard{
        width: 30%;
        /* border: 1px solid blue; */
        text-align: right;
    }
    .bottomPart{
        color: #276882;
    }
    &:hover{
        background-color: #0000001a;
    }
`