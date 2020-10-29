import React from 'react';
import {Link} from 'react-router-dom';

const Button = props => {
    return(
        <Link to={props.to ? `${props.to}` : '#' } onClick={props.clickHand ? props.clickHand : null}>
            <button className = {`button ${props.className}`} >{props.children}</button>    
        </Link>
    );
    
}

export default Button;