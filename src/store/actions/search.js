import * as actionTypes from './actionTypes';
import axiosMovie from '../../axios-url';
import uniqid from 'uniqid';

export const getSearchResults = (query) => {
    return async dispatch => {
        dispatch(getSearchResultsStart());
        if(query && query.length > 0){
            try {
                const { data } = await axiosMovie.get(`/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${query}&page=1&language=en-US`);
                const { results } = data;
                
                const  movies = results.filter(movie => {
                    if (movie.poster_path) return true;
                    return false;
                });
                
                const newResults = movies.map(movie => {
                    let movie_img = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
                    let releaseYear = movie.release_date.split('-')[0];
                    let movie_id = uniqid();
                    return { ...movie, img: movie_img, releaseYear, movie_id, isFavorite: false };
                });
                
                dispatch(getSearchResultsSuccess(newResults));
            }
            catch (error) {
                dispatch(getSearchResultsFail(error));
            }
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