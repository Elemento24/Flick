import React from 'react';

import NavigationItems from './NavigationItems/NavigationItems';

const Sidebar = props => {
    const classes = props.isSideOpen ? 'sidebar sidebar__on' : 'sidebar sidebar__off';  

    return(
        <div className = {classes}>
            <nav className = "sidebar__menu">
                <NavigationItems />
            </nav>
        </div>  
    );
};

export default Sidebar;