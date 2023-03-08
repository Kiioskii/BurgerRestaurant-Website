import React from "react";
import styled from "styled-components";
import { AiOutlineArrowDown,AiFillYoutube,AiOutlineTwitter } from 'react-icons/ai';
import { BsInstagram} from 'react-icons/bs';
import { HiOutlineMail} from 'react-icons/hi';
import './style.css';

const IconRow=()=>{
    return(
        <div className="IconRow">
                <div id="IconMotion" className="box">
                    <p className="Icon"><BsInstagram/></p>
                </div>
                <div id="IconMotion" className="box">
                    <p className="Icon"><AiFillYoutube/></p>
                </div>
                <div id="IconMotion" className="box">
                    <p className="Icon"><AiOutlineTwitter/></p>
                </div>
                <div id="IconMotion" className="box">
                    <p className="Icon"><HiOutlineMail/></p>
                </div>
        </div>
    )
};
export default IconRow
