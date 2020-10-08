import React, {Fragment, useState} from 'react';
// import {connect} from 'react-redux';

import Navbar from '../components/Navbar/Navbar';
import Sidebar from '../components/Sidebar/Sidebar';
import Footer from '../components/Footer/Footer';

const Layout = props => {
    
    const [ isSideOpen, setToggleSidebar ] = useState(false);
    
    const toggleSidebar = () => {
        setToggleSidebar(!isSideOpen);
    }
    
	return(
		<div className='layout'>
			{/*Navbar for logo Logo Only*/}
			<Navbar toggleSidebar = {toggleSidebar}  isSideOpen={isSideOpen}  />
            
            {/*SideBar For Navigation*/}
            <Sidebar isSideOpen={isSideOpen}  />
            
            {/*Main*/}
            <main>{props.children}</main>
            
            {/*Footer*/}
            <Footer />
		</div>
	);
};

export default Layout;