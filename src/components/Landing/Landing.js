import React from 'react';

import Welcome from './Welcome/Welcome';
import Latest from './Latest/Latest';

const Landing = () => {
    return (
        <div class='landing'>
            <Welcome />
            <Latest />
        </div>    
    );
};

export default Landing;