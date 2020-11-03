import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../shared/utility';

const initialState = {
    movie: null,
    movieLoading: false,
    movieError: null
};

const getMovieStart = (state, action) => {
    return updateObject(state, {
        movieLoading: true
    });  
};

const getMovieSuccess = (state, action) => {
    return updateObject(state, {
        movie: action.movie,
        movieLoading: false
    });
};

const getMovieFail = (state,action) => {
    return updateObject(state, {
        movieLoading: false,
        movieError: action.error
    });
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.GET_MOVIE_START: return getMovieStart(state, action);
        case actionTypes.GET_MOVIE_SUCCESS: return getMovieSuccess(state, action);
        case actionTypes.GET_MOVIE_FAIL: return getMovieFail(state, action);
        default: return state;
    }
};

export default reducer;