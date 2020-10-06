import React from 'react';

import Welcome from './Welcome/Welcome';
import Latest from './Latest/Latest';

const Landing = () => {
    
    return (
        <div>
            <h1>THIS IS THE LANDING PAGE</h1>
            <Welcome />
            <Latest />
        </div>    
    );
};

export default Landing;