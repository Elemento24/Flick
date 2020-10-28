import * as actionTypes from './actionTypes';
import axiosMovie from '../../axios-url';

// ======
// GENRES
// ======

export const getGenres = () => {
    return async dispatch => {
        try{
            const genres = await axiosMovie.get(`/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);
            const list = genres.data.genres;
            dispatch(getGenresSuccess(list))
        }catch(error){
            console.log(`GENRES ERROR -> ${error}`);
        }
    };
};

export const getGenresSuccess = (genres) => {
    return {
        type: actionTypes.GET_GENRES,
        genres
    }
}

// =============
// POPULAR MOVIE
// =============

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
            
            const movie = {...movie_data, img: movie_img};
            dispatch(getPopularSuccess(movie));
            
        } catch (error) {
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

// ================
// TRENDING MOVIES
// ================

export const getTrending = (currentPage) => {
    return async dispatch => {
        dispatch(getTrendingStart());
        try{
            let hasMore = true;
            const {data} = await axiosMovie.get(`/trending/movie/day?api_key=${process.env.REACT_APP_API_KEY}&page=${currentPage}`); 
            const { results, total_pages, page } = data;
            
            const newResults = results.map(movie => {
                let movie_img = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
                let releaseYear = movie.release_date.split('-')[0];
                return {...movie, img: movie_img, releaseYear};
            });
            
            if(currentPage + 1 > total_pages){
                hasMore = false;
            }
            
            dispatch(getTrendingSuccess(newResults, page, hasMore ));
        } catch(error){
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

// ===============
// SEARCH MOVIES
// ===============

export const getSearchResults = () => {
    return async dispatch => {
      dispatch(getSearchResultsStart());
      try{
          const {data: searchResults} = await axiosMovie.get(`/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=wolves&page=1&language=en-US`);
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

// ================
// SHOW PAGE MOVIE
// ================

export const getMovie = (id) => {
    return async dispatch => {
      dispatch(getMovieStart());
      try{
          // Get the Movie and it's Poster
          let {data: movie} = await axiosMovie.get(`/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);
          const movie_img = `https://image.tmdb.org/t/p/w780/${movie.poster_path}`;
          
          // Get Similar Movies and their Posters
          let {data: sim_movies} = await axiosMovie.get(`/movie/${id}/similar?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);
          sim_movies = sim_movies.results;
          
          sim_movies = sim_movies.map(movie => {
                let movie_img = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
                let releaseYear = movie.release_date.split('-')[0];
                return {...movie, img: movie_img, releaseYear};
          });
          
          movie = {...movie, img: movie_img, sim_movies};
          
          setTimeout(() => {
            dispatch(getMovieSuccess(movie));
          },1000);
          
      } catch(error){
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