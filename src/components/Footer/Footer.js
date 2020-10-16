import React from 'react';

const Footer = props => {
    return (
    <div className='footer'>
        <div className="footer__about">
            <h1 className='heading-sec footer__heading'>About Flick</h1>
            <p className="footer__text">
                Want to stream a Movie? Feeling confused & don't know which one to stream?
                Then, you have come to the right place! Search from over a million movies, to get just the movie,
                which is tailor-made for you!
            </p>
        </div>
        
        <div className = "footer__elemento">
            <h1 className='heading-sec footer__heading'>Elemento</h1>
            <p className="footer__text">Web Designer and Developer, Open Source Enthusiast, Musicophile</p>
            <div className="footer__social">
                <a className="footer__social-icon" target="_blank" href="https://www.facebook.com/elemento24"><i className="fab fa-facebook-square"></i></a>
                <a className="footer__social-icon" target="_blank" href="https://www.instagram.com/elemento.24/"><i className="fab fa-instagram-square"></i></a>
                <a className="footer__social-icon" target="_blank" href="https://github.com/Elemento24"><i className="fab fa-github-square"></i></a>
                <a className="footer__social-icon" target="_blank" href="https://twitter.com/Vishesh30493930"><i className="fab fa-twitter-square"></i></a>
            </div>
        </div>
        
        <div className = "footer__sid">
            <h1 className='heading-sec footer__heading'>Sid Mirza</h1>
            <p className="footer__text">Full Stack Web Developer, UI/UX Designer.</p>
            <div className="footer__social">
                <a className="footer__social-icon" target="_blank" href="https://www.facebook.com/sidmirza4"><i className="fab fa-facebook-square"></i></a>
                <a className="footer__social-icon" target="_blank" href="https://wwww.instagram.com/sidmirza4"><i className="fab fa-instagram-square"></i></a>
                <a className="footer__social-icon" target="_blank" href="https://www.github.com/sidmirza4"><i className="fab fa-github-square"></i></a>
                <a className="footer__social-icon" target="_blank" href="https://www.twitter.com/sidmirza4"><i className="fab fa-twitter-square"></i></a>
            </div>
        </div>
    
        <p className='footer__copyright'>Copyright &copy; All Rights Reserved | Flick , 2020</p>
    </div>
    );
};

export default Footer;
