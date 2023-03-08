import React from "react";
import styled from "styled-components";
import pizza from "../../assets/img/pizza.jpg"
import pasta from "../../assets/img/pasta1.jpg"
import Carousel from "framer-motion-carousel";
import { inspirationData } from "../../assets/data/inspiration";
const Inspiration=()=>{

    return(
        <InspirationContainer>
           <Carousel interval={5000}>
            { inspirationData.map((item,index)=>(
                <div className="Carouselitem">
                    {/* <div className="textCarouselContainer">
                        <div className="textContainer" style={{backgroundColor:item.mainColor, color:item.secondColor, border:`5px solid ${item.secondColor}`}}>
                            <h1>{item.title}</h1>
                        </div>
                    </div> */}
                    <div className="imgContainer" style={{backgroundImage:`url(${item.img1})`}}></div>
                    <div className="imgContainer" style={{backgroundImage:`url(${item.img2})`}}></div>
                    <div className="imgContainer" style={{backgroundImage:`url(${item.img3})`}}></div>
                </div>
            ))}
           </Carousel>
        </InspirationContainer>
    )
}
export default Inspiration;

const InspirationContainer=styled.div`
    background-color: black;
    height: 100vh;
    border: 1px solid blue;
    color: white;
    
    .Carouselitem{
        width: 100vw;
        height: 100%;
        display: flex;
        flex-direction: row;
        align-content: space-between;
        justify-content: space-between;
        border: 2px solid yellow;
    }
    .textCarouselContainer{
        border: 1px solid red;
        height: 100%;
        width: 50%;
        display: flex;
        align-items: center;
    }
    .imgContainer{
        width: 30%;
        height: 100%;
        background-position: center;
        background-size: cover;
        /* background-attachment: fixed; */
    }
    .textContainer{
        margin-left: auto;
        margin-right: auto;
        width: 40vw;
        height: 70vh;
        padding: 2vw;
        border-radius: 15%;
    }
`