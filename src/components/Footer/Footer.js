import React from 'react';

const Footer = props => {
    return (
    <div className='footer'>
        <div className="footer__about">
            <h1>About Flick</h1>
            <p>This is the Description about Flick</p>
        </div>
        
        <div className = "footer__elemento">
            <h1>Elemento</h1>
            <p className="footer__text">Description About Elemento</p>
            <div className="footer__social">
                <a href="#"><i className="fab fa-facebook-square"></i></a>
                <a href="#"><i className="fab fa-instagram-square"></i></a>
                <a href="#"><i className="fab fa-github-square"></i></a>
                <a href="#"><i className="fab fa-twitter-square"></i></a>
            </div>
        </div>
        
        <div className = "footer__sid">
            <h1>Sid Mirza</h1>
            <p className="footer__text">Description About Sid Mirza</p>
            <div className="footer__social">
                <a href="#"><i className="fab fa-facebook-square"></i></a>
                <a href="#"><i className="fab fa-instagram-square"></i></a>
                <a href="#"><i className="fab fa-github-square"></i></a>
                <a href="#"><i className="fab fa-twitter-square"></i></a>
            </div>
        </div>
    
        <p className='footer__copyright'>Copyright &copy; All Rights Reserved | Flick</p>
    </div>
    );
};

export default Footer;
