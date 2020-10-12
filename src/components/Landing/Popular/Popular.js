import React, { useEffect } from 'react';
import { connect} from 'react-redux';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

import * as actions from '../../../store/actions/action';

const Latest = props => {
    AOS.init();
    const {onGetPopular, genres, movie} = props;
    
    useEffect(() => {
        onGetPopular();
    }, [onGetPopular]);
    
    // original_title
    // overview
    // release_date
    // genre
    // vote_average
    // vote_count
    // original_language
    // img
    
    let movieDiv = null;
    const list_gen = [];
    if(!props.loading && !props.error){
        
        // Populate the Genres of the Movie
        movie.genre_ids.forEach(id => {
            for(let i = 0; i < genres.length; i++){
                if(genres[i].id === id){
                    list_gen.push(genres[i].name);
                    break;
                }
            }
        });
        const movie_genres = list_gen.join(', ');
        
        // Generate the JSX Element for the Movie
        movieDiv = (
            <div className='popular__container'>
                <div className='popular__container--left'>
                    <div class='popular__vote'>
                        <div class="popular__vote--avg">{movie.vote_average}</div>
                    </div>
                    <img className = "popular__poster" src={movie.img} alt={movie.title} />
                    <h1 className="popular__title">{movie.title}</h1>
                </div>
                <div className="popular__container--right">
                    <p class="popular__overview">{movie.overview}</p>
                    <div className = "popular__date"><i class="far fa-calendar-alt"></i><span class='ml-2'>{movie.release_date}</span></div>
                    <div className = "popular__genre" ><i class="fas fa-stream"></i><span class="ml-2">{movie_genres}</span></div>
                </div>
            </div>    
        );
    }
    
    return (
      <div className='popular'>
        {movieDiv}
      </div>
    );
};

const mapStateToProps = state => {
    return {
        movie: state.popularMovie,
        genres: state.genres,
        loading: state.popularLoading,
        error: state.popularError
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onGetPopular: () => dispatch(actions.getPopular())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Latest);
