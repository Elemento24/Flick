import React from 'react';
import {Link} from 'react-router-dom';

const Button = props => {
    return(
        <Link to={props.to ? `${props.to}` : '#' }>
            <button className = {`button ${props.className}`} >{props.children}</button>    
        </Link>
    );
    
}

export default Button;