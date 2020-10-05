import React, {Fragment} from 'react';
// import {connect} from 'react-redux';

import Navbar from '../components/Navbar/Navbar';
import Sidebar from '../components/Sidebar/Sidebar';
import Footer from '../components/Footer/Footer';

const Layout = props => {
	return(
		<div style = {{color: "#fff"}}>
			{/*Navbar for logo Logo Only*/}
			<Navbar />
            
            {/*SideBar For Navigation*/}
            <Sidebar />
            
            {/*Main*/}
            <main>{props.children}</main>
            
            {/*Footer*/}
            <Footer />
		</div>
	);
};

export default Layout;