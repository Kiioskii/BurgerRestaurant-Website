import React from "react";
import styled from "styled-components";
import wlogo from '../assets/img/wlogo.png'
import Topbar from "../components/Topbar";
import Menu from "../components/Menuitems";
import { useNavigate } from "react-router-dom";
const MenuSide=()=>{

    const[position,setPosition]=React.useState("pizza");
    const navigate=useNavigate();

    const takePosition=(e)=>{
        setPosition(e);
    }

    return(
    <MenuContainer>
        <div className="topSide">
            <div className='logoContainer'>
                <img src={wlogo} alt="logo" className='logo' onClick={(e)=>navigate('/')}/>
            </div>
            <div className="titleContainer">
                <h1>MENU</h1>
            </div>
        </div>
        <div className="menuitems">
            <Topbar position={position} takePosition={takePosition}/>
            <Menu position={position}/>
        </div>
    </MenuContainer>
    )

};

export default MenuSide;

const MenuContainer=styled.div`
width: 100%;
min-height: 100vh;
border: 1px solid blue;
.topSide{
    height: 80vh;
    background-image: linear-gradient(169deg, rgba(237,242,244,0) 0%, rgba(0,0,0,0.4694210447851015) 100%),url('https://images.unsplash.com/photo-1498307833015-e7b400441eb8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80');
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
    background-size: cover;
    border: 1px solid red;
    display: flex;
    flex-direction: row;
}
.titleContainer{
    color: whitesmoke;
    font-size: 3vw;
    /* border: 1px solid red; */
    height: 100%;
    margin-left: 26vw;
    display: flex;
    align-items: center ;
}
.logoContainer{
    /* border: 1px solid red; */
    height: 100%;
    padding: 1vw;
}
.logo{
    width: 14vw;
    cursor: pointer;
}
.menuitems{
    height: 100vh;
    background-color: #fbe7e7;
    height: 100%;
}
`