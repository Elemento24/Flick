import * as actionTypes from './actionTypes';
import axiosMovie from '../../axios-url';

export const getPopular = () => {
    return async dispatch => {
        dispatch(getPopularStart());
        try {
            // Get the Array of Most Popular Movies
            const results = await axiosMovie.get(`/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`);

            // Get the most Popular movie out of the Array
            const movie_data = results.data.results[0];

            // Get the Poster of the Movie
            let movie_img = `https://image.tmdb.org/t/p/w500/${movie_data.poster_path}`;

            const movie = { ...movie_data, img: movie_img };
            dispatch(getPopularSuccess(movie));

        }
        catch (error) {
            dispatch(getPopularFail(error));
        }
    };
};

export const getPopularStart = () => {
    return {
        type: actionTypes.GET_POPULAR_START
    };
};

export const getPopularSuccess = (popularMovie) => {
    return {
        type: actionTypes.GET_POPULAR_SUCCESS,
        popularMovie
    };
};

export const getPopularFail = (error) => {
    return {
        type: actionTypes.GET_POPULAR_FAIL,
        error
    };
};