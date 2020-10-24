import React from 'react';

import Welcome from './Welcome/Welcome';
import Popular from './Popular/Popular';

import ScrollDownBtn from '../UI/ScrollDown';

const Landing = () => {
    return (
        <div className='landing'>
            <Welcome />
            <ScrollDownBtn />
            <Popular />
        </div>    
    );
};

export default Landing;