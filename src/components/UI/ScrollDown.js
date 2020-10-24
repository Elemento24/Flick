import React from 'react';
import { Link } from "react-scroll";

const ScrollDownBtn = props => {
    return (
        <Link to = "popular" smooth = {true} duration={700} offset={-100}>
            <div className = "scroll scroll__down">
                <div className = "scroll__btn">
                    <button className='scroll__anc'>
                        <span className='scroll__span scroll__span--down'></span>
                        <span className='scroll__span scroll__span--down'></span>
                        <span className='scroll__span scroll__span--down'></span>
                    </button>
                </div>
            </div>
        </Link>
    );
};

export default ScrollDownBtn;
