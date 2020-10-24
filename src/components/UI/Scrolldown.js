import React from 'react';

import { Link, animateScroll as scroll } from "react-scroll";

const ScrollDownBtn = props => {
    return (
        <Link to = "popular" smooth = {true} duration={700} offset={-100}>
            <div className = "scroll-button" id='scroll-button'>
                <div className = "scroll-btn demo">
                    <a>
                        <span></span>
                        <span></span>
                        <span></span>
                        Scroll
                    </a>
                </div>
            </div>
        </Link>
    );
};

export default ScrollDownBtn;
