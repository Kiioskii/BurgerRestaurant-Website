import React from "react";
import styled from "styled-components";
import { ImCancelCircle } from 'react-icons/im';
import PaymentButton from "../components/PaymentButton"
const TakeOrderPage=({productList,removeProduct,suma})=>{

    return(
    <TakeOrderPageContainer>
        <div className='TopPart'>
            <div className="TopPartHeader">
                <h1>kasa</h1>
            </div>
        </div>
        <div className="MainPart">
            <div className="leftSide">
                <h1>Dane kontakotwe:</h1>
                <form >
                    <>
                        <label>Imię i Nazwisko:</label>
                        <input type='text'/>
                    </>
                    <>
                        <label>Nr. kontaktowy:</label>
                        <input type='text'/>
                    </>
                    <>
                        <label>Email:</label>
                        <input type='email'/>
                    </>
                    <div className="checboxContainer">
                        <input type="checkbox" id="regualmin"/>
                        <label id="regulaminText"> Oświadczam że zapoznałem się z regulaminem strony i go akceptuje.</label>
                    </div>
                </form>
                <div className="FinalButton">
                    <PaymentButton productList={productList}/>
                </div>
            </div>
                <div className="rightSide">
                    <h1>KOSZYK:</h1>
                    <div className="productList">
                        {productList.map((val,i)=>{
                            return(
                                <li className="row">
                                    <div className="leftPart">
                                        {val.type}: {val.title}
                                    </div>
                                    <div  className="rightPart">
                                        {val.price}zł
                                    </div>
                                    <div className="buttonSide">
                                        <button onClick={(e)=>{removeProduct(val)}}><ImCancelCircle style={{width:"2vw",height:"2vw"}}/></button>
                                    </div>
                                </li>
                            )
                        })}
                    </div>
                    <div className="costContainer">
                        <p>Łącznie:</p>
                        <p>{suma} zł</p>
                    </div>
                </div>
        </div>
    </TakeOrderPageContainer>
    )

}

export default TakeOrderPage

const TakeOrderPageContainer=styled.div`
    width: 100%;
    min-height: 100vh;
    border: 2ps solid green;
    background-image:linear-gradient(163deg, rgba(255, 255, 255, 0.089) 32%, rgba(255, 255, 255, 0.067) 69%),url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    margin-bottom: -10vh;
    .TopPart{
        height: 80vh;
        border: 1px solid red;
        margin-bottom: 3vh;
        background-image: linear-gradient(163deg, rgba(0,0,0,0.47502328568146013) 31%, rgba(0,0,0,0.30695605879070376) 69%),url('https://images.unsplash.com/photo-1579751626657-72bc17010498?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        background-attachment: fixed;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .TopPartHeader{
        width: 25vw;
        height: 10vw;
        border: 2px solid white;
        display: flex;
        align-items: center;
        justify-content: center;
        /* text-align: center; */
        background-color: #000000a9;
        border: 2px solid #5e0d0d;
        h1{
            font-family: 'Oswald', sans-serif;
            color: white;
            margin-left: auto;
            margin-right: auto;
            text-transform: uppercase;
            font-size: 10vh;
        }
    }
    .MainPart{
        min-height: 100vh;
        height: 105vh;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding-left: 5vw;
        padding-right: 5vw;
    }
    .leftSide{
        border: 2px solid gray;
        background-color: #0000009c;
        width: 40vw;
        text-align: center;
        h1{
            font-family: 'Oswald', sans-serif;
            color: white;
            margin-left: auto;
            margin-right: auto;
            text-transform: uppercase;
            font-size: 10vh;
        }
        form{
            /* border: 2px solid white; */
            height: 60%;
            color: white;
            display: flex;
            flex-direction: column;
            label{
                font-family: 'Oswald', sans-serif;
                height: 7vh;
                text-align: left;
                display: flex;
                align-items: center;
                font-size: 1.3vw;
                padding-left: 1vw;
                margin-bottom: 1vh;
            }
            input{
                height: 7vh;
                width: 90%;
                margin-left: 2.5%;
                background: black;
                color: white;
                padding-left: 10px;
                border: 2px solid grey;
                margin-bottom: 2vh;
            }
        }
    }
    .productList{
        height: 60%;
        width: 80%;
        max-height: 60%;
        border: 2px solid red;
        overflow-y: scroll;
        margin-left: auto;
        margin-right: auto;
    }
    .rightSide{
        border: 3px solid black;
        background-color: #0000009c;
        width: 40vw;
        height: 100vh;
        min-height: 50vh;
        display: flex;
        flex-direction: column;
        text-align: center;
        list-style: none;
        h1{
            font-size: 4vw;
            color: white;
            font-family: 'Oswald', sans-serif;
        }
    }
    .row{
        width: 100%;
        border: 2px solid red;
        height: 10vh;
        margin-left: auto;
        margin-right: auto;
        text-transform: uppercase;
        color: white;
        font-family: 'Oswald', sans-serif;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .leftPart{
        /* border: 2px solid blue; */
        
        width: 40%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.2vw;
    }
    .rightPart{
        width: 30%;
        /* border: 2px solid green; */
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5vw;
    }
    .buttonSide{
        width: 15%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        /* border: 2px solid green; */
        
        button{
            width: 3vw;
            height: 3vw;
            background-color: transparent;
            border: none;
            color: white;
            cursor: pointer;
            &:hover{
                color: #8a1d1d;
            }
        }
    }
    .costContainer{
        height: 10%;
        width: 80%;
        margin-left: auto;
        margin-right: auto;
        color: white;
        font-size: 2vw;
        /* border: 2px solid gold; */
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding-left: 12%;
        padding-right: 12%;
        font-family: 'Oswald', sans-serif;
    }
    .checboxContainer{
        color: white;
        /* border: 2px solid red; */
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .FinalButton{
        width: 100%;
        height: 15vh;
        /* border: 2px solid white; */
        display: flex;
        align-items: center;
        justify-content: center;
        button{
            font-family: 'Oswald', sans-serif;
            border: 3px solid red;
            margin-top: -8vh;
            background-color: #ffffff1e;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            width: 14vw;
            height: 10vh;
            font-size: 2vw;
            cursor: pointer;
            text-transform: uppercase;
            background-color: #8d1d1d;
            &:hover{
                background-color: #651919; 
            }
        }
    }
    #regualmin{
            width: 1vw;
            height: 1vw;
            margin-top: 2%;
    }
    #regulaminText{
        /* border: 2px solid green; */
        height: 100%;
        font-size: 1.2vw;
    }

`