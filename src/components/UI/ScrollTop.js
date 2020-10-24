import React from 'react';
import {Link, animateScroll as scroll} from 'react-scroll';

import { ReactComponent as TopArrow } from '../../assets/up-arrow.svg';

const ScrollTop = props => {
    
    const scrollToTop = () => {
        scroll.scrollToTop();
    };
    
    return (
        <Link smooth = {true} duration={700}>
            <div onClick = {scrollToTop} className = "scroll scroll__top">
                <div className = "scroll__btn  scroll__btn--top">
                    <a className='scroll__anc'>
                        <span className="scroll__span scroll__span--top" ></span>
                        <span className = "scroll__span scroll__span--top" ></span>
                    </a>
                </div>
            </div>
        </Link>
    );
};

export default ScrollTop;