import * as actionTypes from './actionTypes';
import axiosMovie from '../../axios-url';
import uniqid from 'uniqid';

export const getMovie = (id) => {
    return async dispatch => {
        dispatch(getMovieStart());
        try {
            // Get the Movie and it's Poster
            let { data: movie } = await axiosMovie.get(`/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&append_to_response=similar,credits`);
            const movie_img = `https://image.tmdb.org/t/p/w780/${movie.poster_path}`;

            // Get Similar Movies and their Posters
            let sim_movies = movie.similar.results.map(movie => {
                let movie_img = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
                let releaseYear = movie.release_date.split('-')[0];
                let movie_id = uniqid();
                return { ...movie, img: movie_img, releaseYear, movie_id };
            });
            
            // Get Cast and their Details, including Profile Pics
            const cast = movie.credits.cast.map(p => {
                const p_img = `https://image.tmdb.org/t/p/w500/${p.profile_path}`;
                return { ...p, img: p_img};
            });
            
            // Get Crew and their Details, including Profile Pics
            const crew = movie.credits.crew.map(p => {
                const p_img = `https://image.tmdb.org/t/p/w500/${p.profile_path}`;
                return { ...p, img: p_img};
            });
            
            delete movie.credits;
            movie = { ...movie, img: movie_img, similar: sim_movies, cast, crew};

            setTimeout(() => {
                dispatch(getMovieSuccess(movie));
            }, 1000);

        }
        catch (error) {
            dispatch(getMovieFail(error));
        }
    };
};

export const getMovieStart = () => {
    return {
        type: actionTypes.GET_MOVIE_START
    };
};

export const getMovieSuccess = (movie) => {
    return {
        type: actionTypes.GET_MOVIE_SUCCESS,
        movie
    };
};

export const getMovieFail = (error) => {
    return {
        type: actionTypes.GET_MOVIE_FAIL,
        error
    };
};