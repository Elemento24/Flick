import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions';
import { ReactComponent as Heart } from '../../assets/heart.svg';

const ToggleFav = props => {

    const {IDS, favMovie} = props;
    let title;
    
    if (IDS && IDS.includes(favMovie.id))
        title = 'Remove From Wishlist';
    else 
        title = 'Add to Wishlist';

    useEffect(() => {
        if (IDS && IDS.includes(favMovie.id)) {
            title = 'Remove From Wishlist';
            document.querySelector('.toggleFav__icon').classList.add('toggleFav__icon--active');
        }
        else {
            title = 'Add to Wishlist';
            document.querySelector('.toggleFav__icon').classList.remove('toggleFav__icon--active');
        }
    }, [title, IDS, favMovie]);

    const favoriteClickHandler = (movie) => {
        if (IDS && props.IDS.includes(movie.id)) {
            props.removeFav(movie.id);
        }
        else {
            props.addFav(movie);
        }
    };

    return (
        <div className={`toggleFav ${props.class}`} title = {title}>
            <Heart className='toggleFav__icon' onClick={(movie) => favoriteClickHandler(favMovie)} />
        </div>
    );
};

const mapStateToProps = state => {
    return {
        IDS: state.wishlist.wishlistID
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addFav: (movie) => dispatch(actions.addFavorite(movie)),
        removeFav: (ID) => dispatch(actions.removeFavorite(ID))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ToggleFav);
