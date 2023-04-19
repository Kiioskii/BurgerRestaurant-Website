import React from 'react'
import styled from 'styled-components'
import logo from "../assets/img/blw.png"
import IconRow from './Footer/iconRow'
import { BsFillTelephoneFill } from 'react-icons/bs';
import { FiClock } from 'react-icons/fi';
import { IoMdPin} from 'react-icons/io';
import { MdLocalPostOffice} from 'react-icons/md';
const Footer=()=>{


    return(
        <FooterContainer>
            <div className='leftSideFooter'>
                <img alt='logo' src={logo} className="logo"/>
                <div className='leftTextArea'>
                    <p className='leftParagraf'>Regulamin</p>
                    <p className='leftParagraf'>Polityka prywatności</p>
                    <p className='leftParagraf'>Zgody marketingowe</p>
                    <p className='leftParagraf'>Panel Restauratora</p>
                </div>
                <p style={{color:"#554f4f"}}>Created by:Maciej Kijowski</p>
            </div>
            <div className='centerSideFooter'>
                    <h1>OBSERWÓJ NAS</h1>
                    <div className='borderContainer'>
                        <IconRow/>
                    </div>
            </div>
            <div className='rightSideFooter'>
                <h1>KONTAKT</h1>
                <div className='contactTextDiv'>
                    <div className='textSection'>
                        <IoMdPin size={25}/>
                        <p>Rynek Główny 17, 31-008 Kraków</p>
                    </div>
                    <div className='textSection'>
                        <BsFillTelephoneFill size={25}/>
                        <p>+48 12 422 17 96 </p>
                    </div>
                    <div className='textSection'>
                        <MdLocalPostOffice size={25}/>
                        <p>rezerwacje@amerianburger.pl </p>
                    </div>
                    <div className='textSection'>
                        <FiClock size={25}/>
                        <p>Poniedziałek - Niedziela 12:00 - 22:00 </p>
                    </div>
                </div>
            </div>

        </FooterContainer>
    )

}
export default Footer;

const FooterContainer=styled.div`
height: 50vh;
color: white;
border: 2px solid red;
padding: 10px;
display: flex;
flex-direction: row;
background-color: #1e1e1e;
.logo{
    width: 5vw;
}
    .leftTextArea{
        /* border: 1px solid red; */
        color: #d22e2e;
        margin-top: 5vh;
        text-decoration: underline;
        p{
            cursor: pointer;
            &:hover{
                color: #c98484;
            }
        }
    }
    .leftSideFooter{
        width: 20vw;
        z-index: 1;
    }
    .centerSideFooter{
        /* border: 2px solid green; */
        width: 60vw;
        text-align: center;
        display: flex;
        flex-direction: column;
    }
    .rightSideFooter{
        /* border: 2px solid yellow; */
        width: 25vw;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-items: right;
        justify-content: right;
        align-items: center;
    }
    .contactTextDiv{
        /* border: 1px solid violet; */
        display: flex;
        flex-direction: column;
        width: 80%;
    }
    .textSection{
        display: flex;
        flex-direction: row;
        gap: 0.5vw;
        align-items: center;
        border: 1px solid red;
        text-align: right;
    }
    .borderContainer{
        border: 3px solid red;
        width: 60%;
        display: flex;
        align-items: center;
        height: 25vh;
        margin-left: auto;
        margin-right: auto;
    }
`
