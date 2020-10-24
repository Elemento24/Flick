import React, { useEffect } from 'react';
import { connect} from 'react-redux';

import * as actions from '../../../store/actions/action';

const Latest = props => {
    const {onGetPopular, genres, movie} = props;
    
    useEffect(() => {
        onGetPopular();
    }, [onGetPopular]);
    
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
                    <div className='popular__vote'>
                        <div className="popular__vote--avg">{movie.vote_average}</div>
                    </div>
                    <img className = "popular__poster" data-aos="fade-right" data-aos-duration="300" data-aos-delay="100" src={movie.img} alt={movie.title} />
                    <h1 className="popular__title" data-aos="fade-right" data-aos-duration="300" data-aos-delay="50">{movie.title}</h1>
                </div>
                <div className="popular__container--right">
                    <p className="popular__overview" data-aos="fade-left" data-aos-duration="300" data-aos-delay="100">{movie.overview}</p>
                    <div className = "popular__date" data-aos="fade-left" data-aos-duration="300" data-aos-delay="200"><i className="far fa-calendar-alt"></i><span className='ml-2'>{movie.release_date}</span></div>
                    <div className = "popular__genre" data-aos="fade-left" data-aos-duration="300" data-aos-delay="300"><i className="fas fa-stream"></i><span className="ml-2">{movie_genres}</span></div>
                </div>
            </div>    
        );
    }
    
    return (
      <div className='popular' id = "popular">
        <h1 className="heading-pri popular__heading" data-aos="fade-up" data-aos-duration="300">Most Popular Movie</h1>
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
