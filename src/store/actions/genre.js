import * as actionTypes from './actionTypes';
import axiosMovie from '../../axios-url';

export const getGenres = () => {
    return async dispatch => {
        try {
            const genres = await axiosMovie.get(`/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);
            const list = genres.data.genres;
            dispatch(getGenresSuccess(list));
        }
        catch (error) {
            console.log(`GENRES ERROR -> ${error}`);
        }
    };
};

export const getGenresSuccess = (genres) => {
    return {
        type: actionTypes.GET_GENRES,
        genres
    };
};
