import React from 'react';
import Style from '../index.css'
import {Link} from "react-router-dom";

function Intro({btnStyle, HeaderSTyle}) {
    return (
        <div className='main'>
            <div className="overlay"></div>
            <video src={`${process.env.PUBLIC_URL}/images/brand/fxlm_intro.mp4`} width='100%' autoPlay loop muted/>
            <div className="btn-intro">
               <Link to="/home" ><a className={`btn-default ${btnStyle}`} target="_blank">Get involved now!</a></Link>
            </div>
        </div>
    );
}

export default Intro;