import React from 'react'
import styled from 'styled-components'
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";
const HeaderPage=()=>{

    const navigate=useNavigate();

    return(
        <StartContainer>
                <div className='StartPagetextContainer'>
                    <h1>THE BURGERS ARE HERE.</h1>
                    <div className='buttonsContainer'>
                        <div className='btnContainer'>
                            <button name="zamawian" onClick={(e)=>{navigate('/order')}}>zamawiam</button>
                        </div>
                        <div className='btnContainer'>
                            <button name="menu" onClick={(e)=>{navigate('/menu')}}>Menu</button>
                        </div>
                        <Link to="prom" spy={true} smooth={true} offset={50} duration={500} className="link" >
                            <div className='btnContainer'>
                                <button name="promocje" >PROMOCJE</button>
                            </div>
                        </Link>
                        <Link to="inspiration" spy={true} smooth={true} offset={50} duration={500} className="link" >
                            <div className='btnContainer'>
                                <button name="inspiration" >znajdź inspiracje</button>
                            </div>
                        </Link>
                    </div>
                </div>
        </StartContainer>
    )


}
export default HeaderPage;

const StartContainer=styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
    background-image: linear-gradient(163deg, rgba(0,0,0,0.47502328568146013) 31%, rgba(0,0,0,0.30695605879070376) 69%),
    url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80');
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction:column;
    /* border: 6px solid green; */
    /* border: 5px solid yellow; */
    height: 100vh;

        .StartPagetextContainer{
            font-family: 'Italianno', cursive;
            color: white;
            font-size: 2.5vw;
            width: 50%;
            /* border: 1px solid red; */
            height: auto;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 3vh;
            /* border: 5px solid violet; */
            h1{
                font-family: 'Bebas Neue', cursive;
            }
        }
        .buttonsContainer{
        border: 3px solid red;
        height: 60vh;
        width: 30vw;
        display: flex;
        flex-direction: column;
        gap: 3vh;
        padding: 5%;
        background-color: #00000064;
    }
    .btnContainer{
        display: flex;
        align-items: center;
        /* border: 1px solid blue; */
        button{
            margin-left: auto;
            margin-right: auto;
            height: 10vh;
            width: 16vw;
            border: 2px solid red;
            font-size:2vw;
            background-color: #ff00007f;
            color: white;
            text-transform: uppercase;
            cursor: pointer;
            font-family: 'Bebas Neue', cursive;
            &:hover{
                background-color: red;
            }
        }
    }
`
