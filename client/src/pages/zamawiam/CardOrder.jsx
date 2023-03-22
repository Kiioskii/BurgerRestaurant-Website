import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const CardOrder=({item,takeProduct})=>{

    return(

        <CardOrderContainer>
            <div className="orderTopPartCard">
                <div className="orderLeftSide">
                    <h1>{item.title}</h1>
                </div>
                <div className="orderRightSide">
                    <motion.div  className="box"  whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                        <button onClick={()=>takeProduct(item)}>{item.price}zł</button>
                    </motion.div>
                </div>
            </div>
            <div className="orderBottomPart">
                <p>{item.desc}</p>
            </div>

        </CardOrderContainer>
    )

}
export default CardOrder;
const CardOrderContainer=styled.div`
    width: 100%;
    height: 10vw;
    border: 2px solid red;
    color: white;
    .orderTopPartCard{
        /* border: 1px solid blue; */
        display: flex;
        flex-direction: row;
        align-content: space-between;
        justify-content: space-between;
        padding-left: 1vw;
        padding-right: 2vw;
    }
    .orderLeftSide{
        font-family: 'Oswald', sans-serif;
        /* border: 1px solid yellow; */
    }
    .box{
        width: 100%;
    }

    .orderRightSide{
        /* border: 1px solid yellow; */
        width: 8vw;
        display: flex;
        align-items: center;
        button{
            font-family: 'Oswald', sans-serif;
            border: 3px solid black;
            background-color: #ba1919;
            width: 100%;
            height: 70%;
            color: white;
            font-size: 2vw;
            cursor: pointer;
            &:hover{
                background-color: #c24545;
            }
        }

    }
    .orderBottomPart{
        padding-left: 2vw;
        font-family: 'Oswald', sans-serif;
    }
    
`