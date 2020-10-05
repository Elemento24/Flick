import React from 'react';

import NavigationItems from './NavigationItems/NavigationItems';

const Sidebar = props => {
    return(
        <div>
            <p>This is the Sidebar</p>
            <nav>
                <NavigationItems />
            </nav>
        </div>  
    );
};

export default Sidebar;