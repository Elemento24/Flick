import React, {Fragment} from 'react';

import NavigationItems from './NavigationItems/NavigationItems';
import Backdrop from '../Backdrop/Backdrop';

const Sidebar = props => {
    const classes = props.isSideOpen ? 'sidebar sidebar__on' : 'sidebar sidebar__off';  

    return(
        <Fragment>
            <Backdrop show={props.isSideOpen} clicked={props.toggleSidebar} />
            <div className = {classes} onClick = {props.toggleSidebar}>
                <nav className = "sidebar__menu">
                    <NavigationItems />
                </nav>
            </div>  
        </Fragment>
    );
};

export default Sidebar;