import React from "react";
import styled from "styled-components";
import logo from '../assets/img/blw.png';
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
const Header=()=>{

    const [whiteBar,setWhiteBar]=React.useState(0);

    const navigate=useNavigate();

    const fillBar={
        transform: 'scaleX(0)',
        transformOrigin: 'right',
        transitionDuration:'2000ms',
        transitionProperty:'transform',
        transitionTimingFunction:'OES_texture_float_linear',
    }
    const emptyBar={
        transform: 'scaleX(1)',
        transformOrigin: 'left',
        transitionDuration:'2000ms',
        transitionProperty:'transform',
        transitionTimingFunction:'OES_texture_float_linear',
    }

    return(
        <HeaderContainer>
            <div className="leftSideHeader" onClick={(e)=>{navigate('/')}}>
                <img alt="logo" src={logo}  className="HeaderLogo"/>
                <h1>American burgers</h1>
            </div>
            <div className="rightSideHeader" >
                <div className='rightHeaderParagraf' onClick={(e)=>navigate("/order")} onMouseEnter={(e)=>setWhiteBar(1)} onMouseLeave={(e)=>setWhiteBar(0)}>
                    <p>Zamawiam</p>
                    <div className="whiteBar" style={whiteBar===1?fillBar:{emptyBar}}/>
                </div>
                    <div className="rightHeaderParagraf" onMouseEnter={(e)=>setWhiteBar(2)} onMouseLeave={(e)=>setWhiteBar(0)}>
                        <p>Promocje</p>
                        <div className="whiteBar" style={whiteBar===2?fillBar:{emptyBar}}/>
                    </div>
                <div className="rightHeaderParagraf" onClick={(e)=>navigate("/gallery")} onMouseEnter={(e)=>setWhiteBar(3)} onMouseLeave={(e)=>setWhiteBar(0)}>
                    <p>Galeria</p>
                    <div className="whiteBar" style={whiteBar===3?fillBar:{emptyBar}}/>
                </div>
            </div>
        </HeaderContainer>
    )

}
export default Header;
const HeaderContainer=styled.div`
    width: 100vw;
    height: 10vh;
    border: 2px solid red;
    display: flex;
    flex-direction: row;
    background-color: #00000079;
    justify-content: space-between;
    position: sticky;
    top: 0vh;
    z-index: 10;
    margin-top: -10vh;
    .leftSideHeader{
        padding-left: 1vw;
        height:100%;
        width: 23vw;
        font-size: 1vw;
        /* border: 2px solid blue; */
        display: flex;
        flex-direction: row;
        align-items: center;
        cursor: pointer;
        h1{
            font-family: 'Oswald', sans-serif;
            color: white;
            text-transform: uppercase;
            margin-left: 1vw;
        }
    }
    .rightSideHeader{
        height:100%;
        width: 40vw;
        /* border: 2px solid blue; */
        display: flex;
        flex-direction: row;
        align-items: center;
        font-family: 'Oswald', sans-serif;
        justify-content: right;
        cursor: pointer; 
    }
    .rightHeaderParagraf{
            border: 2px solid red;
            height: 90%;
            width: 8vw;
            text-align: center;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            background-color: #8d1d1d;
            text-transform: uppercase;
            font-size: 1.5vw;
            letter-spacing: 1px;
            margin-right: 1vw;
            display: flex;
            flex-direction: column;
            position: relative;
    }
    .whiteBar{
        width: 100%;
        height: 5px;
        background-color: white;
        border: 2px solid white;
        position: absolute;
        bottom: 0vh;
    }
    .fillBar{
        transform: scaleX(0);
        transform-origin: right;
        transition-duration:2000ms;
        transition-property:transform;
        transition-timing-function: linear;
    }
    .HeaderLogo{
        width: 4vw;
    }
`