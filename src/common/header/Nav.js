import React from 'react';
import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <ul className="mainmenu">
            
            <li><Link to="/fxlatinomarkets/home">Home</Link></li>

            <li><Link to="/fxlatinomarkets/about-us">About Us</Link></li>

            <li><Link to="/fxlatinomarkets/service">Services</Link></li> 

            <li className="has-droupdown"><Link to="/fxlatinomarkets/contact">Contact</Link></li>
        </ul>
    )
}
export default Nav;
