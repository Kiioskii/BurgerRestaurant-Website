import React from "react";
import styled from "styled-components";
import { FaShoppingCart } from 'react-icons/fa';
import { motion,Variants } from "framer-motion";
import { ImCancelCircle } from 'react-icons/im';
import PaymentButton from "../PaymentButton";
import { useNavigate } from "react-router-dom";
const Cart =({products,productList,removeProduct,suma})=>{

    const [isOpen, setIsOpen] = React.useState(false);
    const [position, setPosition] = React.useState(0);

    const navigate=useNavigate();

    React.useEffect(()=>{
        if(products<7){ 
            setPosition((products+1)*(-9.275))
        }
    },[products])
    

    const itemVariants: Variants = {
        open: {
          opacity: 1,
          y: 0,
          transition: { type: "spring", stiffness: 300, damping: 24 }
        },
        closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
      };


    return(
        <CartContainer>
            <motion.nav initial={false} animate={isOpen ? "open" : "closed"} className="cartMenu" >
                <motion.ul
                className="cartBar"
                    variants={{
                    open: {
                        clipPath: "inset(0% 0% 0% 0% round 10px)",
                        transition: {
                        type: "spring",
                        bounce: 0,
                        duration: 0.7,
                        delayChildren: 0.3,
                        staggerChildren: 0.05
                        }
                    },
                    closed: {
                        clipPath: "inset(10% 50% 90% 50% round 10px)",
                        transition: {
                        type: "spring",
                        bounce: 0,
                        duration: 0.3
                        }
                    }
                    }}
                    style={{ pointerEvents: isOpen ? "auto" : "none",marginTop:products>0?`${position-8}vh`:`${position}vh` ,overflowX:(products>6)?"scroll":"hidden"}}
                >
                    {
                        productList.map((val,i)=>{
                            return(
                                <motion.li className="rowCar" variants={itemVariants}>
                                    <div className="cartProduct" id="price">
                                        {val.price} zł
                                    </div>
                                    <div className="cartProduct">
                                        {val.type}:{val.title}
                                    </div>
                                    <button onClick={(e)=>{removeProduct(val)}}><ImCancelCircle size={25}/></button>
                                </motion.li>
                            )
                        })
                    }
                    {
                        products>0?<div className="buttonRowCart"><p className="sumaParagraf">Cena: {suma}zł</p><button onClick={(e)=>navigate("/takeOrder")}>ZAMAWIAM!</button></div>:<></>
                    }
                </motion.ul>
                <motion.button whileTap={{ scale: 0.7 }} onClick={() => setIsOpen(!isOpen)} className="cartButton" style={{width:"100%",height:"100%"}}>
                    <div className="prodctsContainer">{products}</div>
                    <FaShoppingCart className="ShopCart" />
                </motion.button>
            </motion.nav>
        </CartContainer>
    )

}
export default Cart;
const CartContainer=styled.div`
    /* position: absolute; */
    /* margin-top: -11vh; */
    color: white;
    height: 5vw;
    width: 5vw;
    text-align: center;
    cursor: pointer;
    display: flex;
    align-items: center; 
    border-radius: 8%;
    position: -webkit-sticky;
    position: sticky;
    bottom: 0vh;
    left: 93vw;
    z-index: 10;
    
    .cartMenu{
        border-radius: 8%;
        width: 100%;
        height: 100%;
    }
    .cartBar{
        /* border:1px solid blue; */
        border: 2px solid black;
        max-height: 70vh;
        border-radius: 15px;
        width:25vw;
        left:-19vw;
        background-color: black;
    }
    .rowCar{
        padding: 3px;
        display: flex;
        flex-direction: row;
        list-style: none;
        justify-content: space-between;
        left: -12%;
        button{
            width: 3vw;
            left: 10%;  
            cursor: pointer;
            border: white;
            color: white;
            background-color: transparent;
            &:hover{
                color: #8a1d1d;
            }
        }
    }
    .sumaParagraf{
        left: -10%;
        text-transform: uppercase;
        font-size: 1.3vw;
        font-family: 'Oswald', sans-serif;
    }
    .buttonRowCart{
        /* border: 2px solid green; */
        height: 8vh;
        align-self: center;
        left: -8%;
        display: flex;
        align-items: center;
        justify-content: center;
        button{
            font-family: 'Oswald', sans-serif;
            letter-spacing: 2px;
            border: red 2px solid ;
            width: 8vw;
            height: 6vh;
            background-color: transparent;
            color: white;
            cursor: pointer;
            font-size: 1vw;
            &:hover{
                background-color: #ffffff28;
            }
        }

    }
    .cartProduct{
        border-radius: 15px;
        height: 8vh;
        border: 2px solid red;
        width: 15vw;
        list-style: none;
        text-transform:uppercase;
        background-color: #ffffff1f;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 3px;
        font-family: 'Oswald', sans-serif;

    }
    .cartButton{
        background-color: #00000057;
        border: 3px solid red;
        border-radius: 8%;
        color: white;
        cursor: pointer;
            &:hover{
        background-color: #000000a4;
    }
    }

    .ShopCart{
        margin-left: auto;
        margin-right: auto;
        width: 7vh;
        height: 7vh;
        color:  red;
    }
    .prodctsContainer{
        font-size: 1.5vw;
        /* border: 1px solid red; */
        border-radius: 50%;
        position: absolute;
        top: 22%;
        right: 38%;
        z-index: 10;
    }
    #price{
        width: 3.5vw;
        margin-right: 5px;
    }
`
