import React from 'react';

import Welcome from './Welcome/Welcome';
import Popular from './Popular/Popular';

const Landing = () => {
    return (
        <div className='landing'>
            <Welcome />
            <Popular />
        </div>    
    );
};

export default Landing;