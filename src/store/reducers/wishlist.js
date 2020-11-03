import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../shared/utility';
import ls from 'local-storage';

const initialState = {
    wishlist: [],
    wishlistID: [],
    wishlistLoading: false,
    wishlistError: null
};

const getWishlistStart = (state, action) => {
    return updateObject(state, {
        wishlistLoading: true,
    });
};

const getWishlistSuccess = (state, action) => {
    return updateObject(state, {
        wishlistLoading: false,
        wishlist: action.movies,
        wishlistID: action.IDs
    });
};

const getWishlistFail = (state, action) => {
    return updateObject(state, {
        wishlistLoading: false,
        wishlistError: action.error
    });
};

const addFavorite = (state,action) => {
    const newWishlist = [...state.wishlist, action.movie];
    const newWishlistID = [...state.wishlistID, action.ID];
    
    // Updated the Local Storage
    ls.set('movies', newWishlist);
    ls.set('ids', newWishlistID);
    
    return updateObject(state, {
        wishlist: newWishlist,
        wishlistID: newWishlistID
    });
};

const removeFavorite = (state, action) => {
    const newWishlist = state.wishlist.filter(movie => movie.id !== action.ID);
    const newWishlistID = state.wishlistID.filter(ID => ID !== action.ID);
    
    // Updated the Local Storage
    ls.set('movies', newWishlist);
    ls.set('ids', newWishlistID);
    
    return updateObject(state, {
        wishlist: newWishlist,
        wishlistID: newWishlistID
    });
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.GET_WISHLIST_START: return getWishlistStart(state, action);
        case actionTypes.GET_WISHLIST_SUCCESS: return getWishlistSuccess(state, action);
        case actionTypes.GET_WISHLIST_FAIL: return getWishlistFail(state, action);
        case actionTypes.ADD_FAVORITE: return addFavorite(state, action);
        case actionTypes.REMOVE_FAVORITE: return removeFavorite(state, action);
        default: return state;
    }
};

export default reducer;