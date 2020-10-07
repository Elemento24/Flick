import React from 'react';

import Logo from '../../assets/logo.png';

const Navbar = function(){
    return(
        <div className='nav'>
            <figure className='nav__logo-box'>
                <img className='nav__logo' src={Logo} alt="Logo" />
            </figure>
            <figcaption className = "nav__brand-box">
                <h1 className='nav__brand pl-2'>Flick</h1>
            </figcaption>
            <div className = 'nav__ham'>
                <span className='nav__ham-icon'></span>
            </div>
        </div>
    );
};

export default Navbar;