import * as actionTypes from './actionTypes';
import axiosMovie from '../../axios-url';
import uniqid from 'uniqid';

export const getTrending = (currentPage) => {
    return async dispatch => {
        dispatch(getTrendingStart());
        try {
            let hasMore = true;
            const { data } = await axiosMovie.get(`/trending/movie/day?api_key=${process.env.REACT_APP_API_KEY}&page=${currentPage}`);
            const { results, total_pages, page } = data;

            const newResults = results.map(movie => {
                let movie_img = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
                let releaseYear = movie.release_date.split('-')[0];
                let movie_id = uniqid();
                return { ...movie, img: movie_img, releaseYear, movie_id };
            });

            if (currentPage + 1 > total_pages) {
                hasMore = false;
            }
            
            if(currentPage === 1){
                setTimeout(() => {
                    dispatch(getTrendingSuccess(newResults, page, hasMore));
                }, 1000);
            } else {
                dispatch(getTrendingSuccess(newResults, page, hasMore));
            }

        }
        catch (error) {
            dispatch(getTrendingFail(error));
        }
    };
};

export const getTrendingStart = () => {
    return {
        type: actionTypes.GET_TRENDING_START
    };
};

export const getTrendingSuccess = (movies, page, hasMore) => {
    return {
        type: actionTypes.GET_TRENDING_SUCCESS,
        movies,
        page,
        hasMore
    };
};

export const getTrendingFail = (error) => {
    return {
        type: actionTypes.GET_TRENDING_FAIL,
        error
    };
};