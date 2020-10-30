import React, {useEffect} from 'react';
import { animateScroll as scroll } from 'react-scroll';

import Welcome from './Welcome/Welcome';
import Popular from './Popular/Popular';

import ScrollDownBtn from '../UI/ScrollDown';

const Landing = () => {
    
    const scrollTop = (duration) => {
        scroll.scrollToTop({
            smooth: true,
            duration
        });
    };
    
    useEffect(() => {
        scrollTop(0)
    });
    
    return (
        <div className='landing'>
            <Welcome />
            <ScrollDownBtn />
            <Popular />
        </div>    
    );
};

export default Landing;