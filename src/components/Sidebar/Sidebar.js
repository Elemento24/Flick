import React from 'react';

import NavigationItems from './NavigationItems/NavigationItems';

const Sidebar = props => {
    return(
        <div className = "sidebar">
            <nav className = "sidebar__menu">
                <NavigationItems />
            </nav>
        </div>  
    );
};

export default Sidebar;