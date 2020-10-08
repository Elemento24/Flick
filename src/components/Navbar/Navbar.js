import React from 'react';

import Logo from '../../assets/logo.png';

const Navbar = (props) => {
    const classes = props.isSideOpen ? 'nav__ham-icon nav__ham-icon--on' : 'nav__ham-icon nav__ham-icon--off';  
    
    return(
        <div className='nav'>
            <figure className='nav__logo-box'>
                <img className='nav__logo' src={Logo} alt="Logo" />
            </figure>
            <figcaption className = "nav__brand-box">
                <h1 className='nav__brand pl-2'>Flick</h1>
            </figcaption>
            <div onClick = {props.toggleSidebar} className = 'nav__ham'>
                <span className={classes}></span>
            </div>
        </div>
    );
};

export default Navbar;