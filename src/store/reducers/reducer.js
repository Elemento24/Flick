import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../shared/utility';

const initialState = {
    genres: [],
    
    popularMovie: null,
    popularLoading: true,
    popularError: null,
    
    trending: [],
    trendingLoading: false,
    trendingError: null,
    trendingPage: 1,
    trendingHasMore: true,
    
    searchResults: null,
    searchLoading: false,
    searchError: null
};

// ======
// GENRES
// ======

const getGenres = (state, action) => {
    return updateObject(state, {
        genres: action.genres
    });
};

// =============
// POPULAR MOVIE
// =============

const getPopularStart = (state, action) => {
    return updateObject(state, {
        popularLoading: true
    });  
};

const getPopularSuccess = (state, action) => {
    return updateObject(state, {
        popularMovie: action.popularMovie,
        popularLoading: false
    });
};

const getPopularFail = (state,action) => {
    return updateObject(state, {
        popularLoading: false,
        popularError: action.error
    });
};

// ================
// TRENDING MOVIES
// ================

const getTrendingStart = (state, action) => {
    return updateObject(state, {
        trendingLoading: true
    });  
};

const getTrendingSuccess = (state, action) => {
    return updateObject(state, {
        trending: [...state.trending, ...action.movies],
        trendingPage: action.page + 1,
        trendingLoading: false
    });
};

const getTrendingFail = (state,action) => {
    return updateObject(state, {
        trendingLoading: false,
        trendingError: action.error,
        trendingHasMore: action.hasMore
    });
};

// ===============
// SEARCH MOVIES
// ===============

const getSearchResultsStart = (state, action) => {
    return updateObject(state, {
        searchLoading: true
    });  
};

const getSearchResultsSuccess = (state, action) => {
    return updateObject(state, {
        searchResults: action.movies,
        searchLoading: false
    });
};

const getSearchResultsFail = (state,action) => {
    return updateObject(state, {
        searchLoading: false,
        searchError: action.error
    });
};

// ========
// REDUCER
// ========

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.GET_GENRES: return getGenres(state, action);
        
        case actionTypes.GET_POPULAR_START: return getPopularStart(state, action);
        case actionTypes.GET_POPULAR_SUCCESS: return getPopularSuccess(state, action);
        case actionTypes.GET_POPULAR_FAIL: return getPopularFail(state, action);
        
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