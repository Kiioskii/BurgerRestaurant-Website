import React from "react";
import styled from "styled-components";
import Square1 from "./squers/square1";
import Square2 from "./squers/Square2";
import Square3 from "./squers/Square3";
import Square4 from "./squers/Square4";
import Square5 from "./squers/Square5";
import Square6 from "./squers/Square6";
import Square7 from "./squers/Square7";
const Promocje=()=>{

    return(
        <DiscountContainer>
            <div className="voucherContiner">
                <div className="topBar">
                        <div className="square">
                            <Square1/>
                        </div>
                        <div className="square">
                            <Square2/>
                        </div>
                        <div className="square">
                            <Square3/>
                        </div>
                        <div className="square">
                            <Square4/>
                        </div>
                </div>
                <div className="bottomBar">
                    <div className="row">
                        <div className="square">
                            <Square5 />
                        </div>
                        <div className="square">
                            <Square6/>
                        </div>
                        <div className="square">
                            <Square7/>
                        </div>
                    </div>
                </div>
            </div>

        </DiscountContainer>
    )
}
export default Promocje;

const DiscountContainer=styled.div`
    height: 100vh;
    width: 100vw;
    background-color: #151515;
    display: flex;
    align-items: center;
    .voucherContiner{
        width: 80%;
        height: 80%;
        border: 3px solid red;
        margin-left: auto;
        margin-right: auto;
        display: flex;
        flex-direction: column;
    }
    .topBar{
        /* border: 1px solid red; */
        height: 40%;
        margin-top: 3%;
        display: flex;
        flex-direction: row;
        gap: 3vw;
        padding-left: 5vw;
    }
    .bottomBar{
        /* border: 1px solid red; */
        height: 40%;
        margin-top: 3%;
        display: flex;
        flex-direction: row;
        gap: 3vw;
        
    }
    .row{
        width: 65%;
        height: 100%;
        display: flex;
        flex-direction: row;
        gap: 3vw;
        margin-left: auto;
        margin-right: auto;
    }
    .square{
        height: 100%;
        width: 15vw;
        /* border: 1px solid blue; */
    }
`