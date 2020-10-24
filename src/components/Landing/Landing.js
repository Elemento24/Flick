import React from 'react';

import Welcome from './Welcome/Welcome';
import Popular from './Popular/Popular';

import ScrollDownBtn from '../UI/Scrolldown';

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