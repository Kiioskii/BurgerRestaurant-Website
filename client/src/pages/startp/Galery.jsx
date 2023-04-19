import React from "react";
import styled from "styled-components";
import {GalleryData} from "../../assets/data/galleryData"
import { IoCloseSharp } from 'react-icons/io5';
import ReactLoading from 'react-loading';
const Galery=()=>{

    const [model,setModel]=React.useState(false);
    const [tempImg,setTempImg]=React.useState('');
    
    const [isLoading,setIsLoading]=React.useState(false);

    
    const getImg=(imgSrc)=>{
        console.log(imgSrc);
        setTempImg(imgSrc);
        setModel(true);
        console.log(tempImg)
    }


    return(
        <GaleryContainer>
            <div className="GaleryTextContainer">
                <h1>our hall of fame</h1>
            </div>
            {isLoading ?
                <ReactLoading type={'Balls'} color="#1a1818" height={667} width={375} />
            :
            <>
                <div className={model ? "model open" : "model"}>
                    <img src={tempImg}/>
                    <IoCloseSharp onClick={()=>setModel(false)}/>
                </div>
                <div className="gallery">
                {
                    GalleryData.map((val,i)=>{
                        return(
                                <div className="pics"  onClick={()=>getImg(val.img)}>
                                    <img 
                                    src={val.img} 
                                    style={{width:'100%'}}
                                    loading="lazy"
                                    />
                                </div>
                        )
                    })
                }
                </div>   
            </>    
        }
        </GaleryContainer>
    )
}
export default Galery;
const GaleryContainer=styled.div`
    width: 100%;
    min-height: 100vh;
    height:auto;
    background-color: #1a1818;
    /* border: 2px solid yellow; */
    .gallery{
        -webkit-column-count: 3;
        -moz-column-count: 3;
        column-count: 3;
        -webkit-column-width:33%;
        -moz-column-width:33%;
        column-width: 33%;
        padding: 0 12px;
    }
    .gallery .pics{
        -webkit-transition: all 350ms ease;
        transform: all 350ms ease;
        cursor: pointer;
        margin-bottom: 12px;
        &:hover{
            filter: opacity(0.6);
        }
    }
    .GaleryTextContainer{
        width: 100%;
        height: 35vh;
        border: 2px solid red;
        h1{
            color: white;
            font-size: 5vw;
            text-align: center;
            text-transform: uppercase;
            margin-top: 12vh;
            font-family: 'Oswald', sans-serif;
        }
    }
    .model{
        width: 100%;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #0000008b;
        transition: opacity .4s ease, visibility .4s ease, transform .5s ease-in-out ;
        visibility: hidden;
        opacity: 0;
        transform: scale(0);
        overflow: hidden;
        z-index: 999;
    }
    .model.open{
        visibility: visible;
        opacity: 1;
        transform: scale(1);
    }
    .model.open svg{
        position: fixed;
        top: 10px;
        right: 10px;
        width: 2rem;
        height: 2rem;
        padding: 5px;
        background-color: rgba(0,0,0,0.4);
        color: white;
        cursor: pointer;
    }
    .model img{
        width: auto;
        max-width: 100%;
        height: auto;
        max-height: 100%;
        display: block;
        line-height: 0;
        box-sizing: border-box;
        padding:  20px 0 20px;
        margin: 0 auto;
    }

    @media(max-width: 991px){
        .gallery{
            -webkit-column-count: 2;
            -moz-column-count: 2;
            column-count: 2;
        }
    }
    @media(max-width: 480px){
        .gallery{
            -webkit-column-count: 1;
            -moz-column-count: 1;
            column-count: 1;
            -webkit-column-width:100%;
            -moz-column-width:100%;
            column-width: 100%;
        }
    }
`