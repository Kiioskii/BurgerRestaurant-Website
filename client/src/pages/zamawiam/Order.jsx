import React from 'react'
import styled from 'styled-components'
import OrderTopBar from './OrderTopBar'
import { orderData } from '../../assets/data/order'
import CardOrder from './CardOrder'
import statua from "../../assets/img/statua2.jpg"
import bizon from "../../assets/img/bison2.jpg"
import flaga from "../../assets/img/flagA.jpg"
const Order=()=>{

    const[order,setOrder]=React.useState("burger");
    const [style,setStyle]=React.useState({
        backgroundImage:`linear-gradient(169deg, rgba(0,0,0,0.6066759467458859) 4%, rgba(0,0,0,0.7775442940848214) 86%),url("https://images.unsplash.com/photo-1623945359666-8f855090ee81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80")`,
    });

    const handleOrder=(e)=>{
        setOrder(e);
    }

    React.useEffect(()=>{

        if(order==='steak'){
            setStyle({
                backgroundImage:`linear-gradient(169deg, rgba(0,0,0,0.6066759467458859) 4%, rgba(0,0,0,0.7775442940848214) 86%),url("https://images.unsplash.com/photo-1565299524732-d2149c7eabf5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=781&q=80")`,
            })
        }else if(order==="pizza"){
            setStyle({
                backgroundImage:`linear-gradient(169deg, rgba(0,0,0,0.6066759467458859) 4%, rgba(0,0,0,0.7775442940848214) 86%),url("https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80")`,
            })

        }else if(order==="burger"){
            setStyle({
                backgroundImage:`linear-gradient(169deg, rgba(0,0,0,0.6066759467458859) 4%, rgba(0,0,0,0.7775442940848214) 86%),url("https://images.unsplash.com/photo-1623945359666-8f855090ee81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80")`,
            })

        }else if(order==="soda"){
            setStyle({
                backgroundImage:`linear-gradient(169deg, rgba(0,0,0,0.6066759467458859) 4%, rgba(0,0,0,0.7775442940848214) 86%),url("https://images.unsplash.com/photo-1576013451826-62bad2ca1092?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTgxfHxjb2NhJTIwY29sYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60")`,
            })
        }


    },[order]);


    return(
        <OrderContainer>
            <div className='orderTopPart'>
                <h1>Menu</h1>
            </div>
            <div className='orderMainContainer'>
                <OrderTopBar handleOrder={handleOrder}/>
                <img src={statua} alt="statua" className='watermarkOrder' id="statua"/>
                <img src={bizon} alt="bizon" className='watermarkOrder' id="bizon"/>
                <img src='https://turystycznyninja.pl/wp-content/uploads/2022/08/Stany-w-USA-mapa-shutterstock.com-DenysHolovatiuk.jpg' className='watermarkOrder' id="mapa"/>
                {/* <img src={flaga} alt="flaga" className='watermarkOrder' id="flaga"/> */}
                <div className='orderMenu' style={style} >
                    {
                        orderData.map((item,index)=>{
                            if(item.type===order){
                                return(
                                    <CardOrder item={item} key={index}/>
                                )
                            }
                        })
                    }
                </div>
            </div>
        </OrderContainer>
    )

}
export default Order;
const OrderContainer=styled.div`
    min-height: 100vh;
    height: auto;
    /* height: auto; */
    width: 100%;
    /* background-color: black; */
    .orderTopPart{
        height: 50vh;
        border: 1px solid red;
        margin-bottom: 3vh;
        background-image: url('https://images.unsplash.com/photo-1558030006-450675393462?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        background-attachment: fixed;
        display: flex;
        align-items: center;
        h1{
            font-family: 'Oswald', sans-serif;
            color: white;
            margin-left: auto;
            margin-right: auto;
            text-transform: uppercase;
            font-size: 10vh;
            

        }
    }
    .orderMainContainer{
        height: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
    }
    .orderMenu{
        height: auto;
        width: 60vw;
        border: 2px solid red;
        margin-top: 5vh;
        margin-bottom: 5vh;
        background-image: linear-gradient(169deg, rgba(0,0,0,0.6066759467458859) 4%, rgba(0,0,0,0.7775442940848214) 86%),
        url("https://images.unsplash.com/photo-1623945359666-8f855090ee81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        background-attachment: fixed;
    }
    .watermarkOrder{
        position: absolute;
    }
    #statua{
        right: -2vw;
        top: 30vh;
        width: 25vw;
        border-radius: 50%;
    }
    #bizon{
        width: 25vw;
        border-radius: 50%;
        top: 90vh;
        right: -2vw;
    }
    #mapa{
        width: 25vw;
        border-radius: 50%;
        top: 155vh;
        right: -2vw;
    }
`