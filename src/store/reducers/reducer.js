import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../shared/utility';

const initialState = {
    latestMovie: null,
    latestMovieImg: null,
    latestLoading: false,
    latestError: null,
    
    trending: null,
    trendingLoading: false,
    trendingError: null,
    
    searchResults: null,
    searchLoading: false,
    searchError: null
};

// =============
// LATEST MOVIE
// =============

const getLatestStart = (state, action) => {
    return updateObject(state, {
        latestLoading: true
    });  
};

const getLatestSuccess = (state, action) => {
    return updateObject(state, {
        latestMovie: action.movie,
        latestMovieImg: action.movie_img,
        latestLoading: false
    });
};

const getLatestFail = (state,action) => {
    return updateObject(state, {
        latestLoading: false,
        latestError: action.error
    });
};

// ================
// TRENDING MOVIES
// ================

const getTrendingStart = (state, action) => {
    return updateObject(state, {
        searchLoading: true
    });  
};

const getTrendingSuccess = (state, action) => {
    return updateObject(state, {
        searchResults: action.movies,
        searchLoading: false
    });
};

const getTrendingFail = (state,action) => {
    return updateObject(state, {
        searchLoading: false,
        searchError: action.error
    });
};

// ===============
// SEARCH MOVIES
// ===============

const getSearchResultsStart = (state, action) => {
    return updateObject(state, {
        trendingLoading: true
    });  
};

const getSearchResultsSuccess = (state, action) => {
    return updateObject(state, {
        trending: action.movies,
        trendingLoading: false
    });
};

const getSearchResultsFail = (state,action) => {
    return updateObject(state, {
        trendingLoading: false,
        trendingError: action.error
    });
};

// ========
// REDUCER
// ========

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.GET_LATEST_START: return getLatestStart(state, action);
        case actionTypes.GET_LATEST_SUCCESS: return getLatestSuccess(state, action);
        case actionTypes.GET_LATEST_FAIL: return getLatestFail(state, action);
        
        case actionTypes.GET_TRENDING_START: return getTrendingStart(state, action);
        case actionTypes.GET_TRENDING_SUCCESS: return getTrendingSuccess(state, action);
        case actionTypes.GET_TRENDING_FAIL: return getTrendingFail(state, action);
        
        case actionTypes.GET_SEARCH_RESULTS_START: return getSearchResultsStart(state, action);
        case actionTypes.GET_SEARCH_RESULTS_SUCCESS: return getSearchResultsSuccess(state, action);
        case actionTypes.GET_SEARCH_RESULTS_FAIL: return getSearchResultsFail(state, action);
        
        default: return state;
    }
};

export default reducer;