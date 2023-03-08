import React from 'react'
import styled from 'styled-components'
import wlogo from "../assets/img/wlogo.png"
import Promocje from './startp/Promocje'
import CarouselCards from './startp/carousel/Carousel'
import { Link } from "react-scroll";
import HeaderPage from './startp/HeaderPage';
import Galery from './startp/Galery'
const StartPage=()=>{
    

    return(
        <StartPageContainer>
            <HeaderPage/>
            {/* <Inspiration/> */}
            <div id="prom"/>
            <Promocje />
            <div className='mainContainer' id="inspiration">
                {/* <CarouselCards/> */}
                {/* <Galery/> */}
            </div>
        </StartPageContainer>
    )
}

export default StartPage;

const StartPageContainer=styled.div`
@import url('https://fonts.googleapis.com/css2?family=Italianno&display=swap');
overflow-x: hidden;
position: relative;
width: 100%;
height: auto;
display: flex;
flex-direction:column;
    .mainContainer{
        width: 100vw;
        height: 100vh;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #1e1e1e;

    }
    .carousel{
    display: flex;
    justify-content: center;
    align-items: center;
    }
   
    .logo{
        margin: 2vh;
        width: 25vw;
    }

`