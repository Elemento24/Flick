import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import Button from '../UI/Button';
import TopButton from '../UI/TopButton';
import Card from '../UI/Card';
import Loader from '../UI/Loader';
import { ReactComponent as WishlistIcon } from '../../assets/wishlist.svg';

const Wishlist = (props) => {
    const {wishlist, loading} = props;
    let content = (
        <div className = 'common__loader-container'>
            <div className = 'common__loader'>
                <Loader/>
            </div>
        </div>
    );
    
    if(wishlist && !loading){
        let items = wishlist.map(movie => {
                return <Card movie={movie} key={movie.movie_id} id={movie.movie_id} />;
            }
        );
        
        content = (
            <Fragment>
                <div className = "wishlist__heading-box">
                    <h1 className="heading-pri wishlist__heading">
                        Your Wishlist
                    </h1>
                    <WishlistIcon className = "common__heading-icon" />
                </div>
                {props.wishlistID.length <= 0 ? 
                    <div className='wishlist__emptyBox'>
                        <p className='wishlist__emptyMsg mb-2'>No movies in your wishlist yet, checkout</p>
                        <Button className='card__button' to='/trending'>
                           Trending Movies
                        </Button>
                    </div>
                : null}
                <div className='trending__btn'>
                    <TopButton />
                </div>
                <div className='common__movies'>
                    {items}
                </div>
            </Fragment>
        );
    }
    
    return (
        <div className="wishlist">
            {content}
        </div>
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