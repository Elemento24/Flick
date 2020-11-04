import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { animateScroll as scroll } from 'react-scroll';

import * as actions from '../../store/actions';
import TopButton from '../UI/TopButton';
import Card from '../UI/Card';
import Loader from '../UI/Loader';

const Wishlist = (props) => {
    const {wishlist, loading} = props;
    let content = null;
    
    if(wishlist && !loading){
        content = wishlist.map(movie => {
                return <Card movie={movie} key={movie.movie_id} id={movie.id} />;
            }
        );
    }
    
    return (
        <Fragment>
            <div className="wishlist pt-10">
                {content}
            </div>
        </Fragment>
        
    );
};

const mapStateToProps = state => {
    return {
        wishlist: state.wishlist.wishlist,
        wishlistID: state.wishlist.wishlistID,
        loading: state.wishlist.wishlistLoading,
        error: state.wishlist.wishlistError,
    };
};

export default connect(mapStateToProps, null)(Wishlist);