import React from 'react';

import Welcome from './Welcome/Welcome';
import Latest from './Latest/Latest';

const Landing = () => {
    return (
        <div className='landing'>
            <Welcome />
            <Latest />
        </div>    
    );
};

export default Landing;