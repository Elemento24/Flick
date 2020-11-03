import * as actionTypes from './actionTypes';
import axiosMovie from '../../axios-url';
import ls from 'local-storage';

export const getWishlist = () => {
    return async dispatch => {
        dispatch(getWishlistStart());
        try {
            const movies = ls.get('movies');
            const IDs = ls.get('ids');
            console.log(movies, IDs);
        }
        catch (error) {
            dispatch(getWishlistFail(error));
        }
    };
};

export const getWishlistStart = () => {
    return {
        type: actionTypes.GET_WISHLIST_START
    };
};

export const getWishlistSuccess = (movies, IDs) => {
    return {
        type: actionTypes.GET_WISHLIST_SUCCESS,
        movies,
        IDs
    };
};

export const getWishlistFail = (error) => {
    return {
        type: actionTypes.GET_WISHLIST_FAIL,
        error
    };
};

export const addFavorite = (movie) => {
    return {
        type: actionTypes.ADD_FAVORITE,
        movie
    };
};

export const removeFavorite = (id) => {
    return {
        type: actionTypes.REMOVE_FAVORITE,
        id
    };
};


