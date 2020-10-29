import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';

import * as actions from '../store/actions/action';
import Navbar from '../components/Navbar/Navbar';
import Sidebar from '../components/Sidebar/Sidebar';
import Footer from '../components/Footer/Footer';

const Layout = props => {
    
    const {onGetGenres} = props;
    const [ isSideOpen, setToggleSidebar ] = useState(false);
    
    const toggleSidebar = () => {
        setToggleSidebar(!isSideOpen);
    };
    
    useEffect(() => {
        onGetGenres();
    }, [onGetGenres]);
    
	return(
		<div className='layout'>
			{/*Navbar for logo Logo Only*/}
			<Navbar toggleSidebar = {toggleSidebar}  isSideOpen={isSideOpen}  />
            
            {/*SideBar For Navigation*/}
            <Sidebar isSideOpen={isSideOpen} toggleSidebar={toggleSidebar} />
            
            {/*Main*/}
            <main className='layout__main'>{props.children}</main>
            
            {/*Footer*/}
            <Footer />
		</div>
	);
};

const mapDispatchToProps = dispatch => {
    return {
        onGetGenres: () => dispatch(actions.getGenres())
    };
};

export default connect(null, mapDispatchToProps)(Layout);