import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

import { ReactComponent as TopArrow } from '../../assets/up-arrow.svg';

const TopButton = () => {
    
    const scrollToTop = () => {
        scroll.scrollToTop();
    };
    
    return (
        <Link to="" smooth = {true} duration={1000} >
            <div className='topBtn' onClick={scrollToTop}>
                <button className='topBtn__btn'>
                    <TopArrow className='topBtn__svg' />
                </button>
            </div>    
        </Link>
    );
};

export default TopButton;