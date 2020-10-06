import * as actionTypes from './actionTypes';
import axios from '../../axios-url';

// =============
// LATEST MOVIE
// =============

export const getLatest = () => {
    return async dispatch => {
        dispatch(getLatestStart());
        try {
            const {data: movie} = await axios.get(`/movie/latest?api_key=${process.env.REACT_APP_API_KEY}`);
            const {data: image} = await axios.get(`/movie/${movie.id}/images?api_key=${process.env.REACT_APP_API_KEY}`);
            let movie_img = image.posters.length === 0 ? null : image.posters[0];
            dispatch(getLatestSuccess(movie, movie_img));
        } catch (error) {
            dispatch(getLatestFail(error));
        }
    };
};

export const getLatestStart = () => {
    return {
        type: actionTypes.GET_LATEST_START
    };
};

export const getLatestSuccess = (latestMovie, movie_img) => {
    return {
        type: actionTypes.GET_LATEST_SUCCESS,
        latestMovie,
        movie_img
    };
};

export const getLatestFail = (error) => {
    return {
        type: actionTypes.GET_LATEST_FAIL,
        error
    };
};

// ================
// TRENDING MOVIES
// ================

export const getTrending = () => {
    return async dispatch => {
        dispatch(getTrendingStart());
        try{
            const {data: trendingMovies} = await axios.get(`/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`);      
            console.log(trendingMovies);
        } catch(error){
            dispatch(getTrendingFail(error));
        }
    };
};

export const getTrendingStart = () => {
    return {
        type: actionTypes.GET_LATEST_START
    };
};

export const getTrendingSuccess = (movies) => {
    return {
        type: actionTypes.GET_TRENDING_SUCCESS,
        movies
    };
};

export const getTrendingFail = (error) => {
    return {
        type: actionTypes.GET_TRENDING_FAIL,
        error
    };
};

// ===============
// SEARCH MOVIES
// ===============

export const getSearchResults = () => {
    return async dispatch => {
      dispatch(getSearchResultsStart());
      try{
          const {data: searchResults} = await axios.get(`/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=wolves&page=1&language=en-US`);
          console.log(searchResults);
      } catch(error){
          dispatch(getSearchResultsFail(error));
      }
    };
};

export const getSearchResultsStart = () => {
    return {
        type: actionTypes.GET_SEARCH_RESULTS_START
    };
};

export const getSearchResultsSuccess = (movies) => {
    return {
        type: actionTypes.GET_SEARCH_RESULTS_SUCCESS,
        movies
    };
};

export const getSearchResultsFail = (error) => {
    return {
        type: actionTypes.GET_SEARCH_RESULTS_FAIL,
        error
    };
};

