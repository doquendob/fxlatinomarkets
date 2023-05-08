import React from 'react';
import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <ul className="mainmenu">
            
            <li><Link to="/home">Home</Link></li>

            <li><Link to="/about-us">About Us</Link></li>

            <li><Link to="/service">Services</Link></li> 

            <li className="has-droupdown"><Link to="/contact">Contact</Link></li>
        </ul>
    )
}
export default Nav;
