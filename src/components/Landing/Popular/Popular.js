import React, { useEffect } from 'react';
import { connect} from 'react-redux';

import * as actions from '../../../store/actions/action';

const Latest = props => {
    const {onGetPopular, genres, movie} = props;
    const list_gen = [];
    
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
        
        // Generate the JSX Element for the Movie
        movieDiv = <h1>{props.movie.original_title}</h1>;
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
