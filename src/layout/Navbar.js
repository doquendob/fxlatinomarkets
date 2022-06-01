import React from 'react';

function Navbar(props) {
    return (
        <nav className='navbar'>
            <ul className='nav_links'>
                <li>
                    <a href='/' className='nav_title'>
                        FxlatinoMarkets
                    </a>
                </li>
                <li>
                    <a href='/' className='nav_link'>
                        About us
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;