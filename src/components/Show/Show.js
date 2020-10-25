import React, {Fragment, useEffect} from 'react';
import {connect} from 'react-redux';

import * as actions from '../../store/actions/action';

const ShowMovie = props => {
    const ID = props.match.params.id;
    const {onGetMovie, movie} = props;
    let movieDiv = null;
    
    useEffect(() => {
        onGetMovie(ID);
    }, [onGetMovie, ID]);
    
    if(movie){
        movieDiv = (
            <Fragment>
                <div className='show__title-box'>
                    <h1 className='heading__pri show__title'>{movie.original_title}</h1>
                </div>
                <div className='show__movie'>
                    <div className='show__content'>
                        <h1 className='heading__pri show__title'>{movie.original_title}</h1>
                    </div>
                    <div className='show__img-box'>
                        <div className = 'show__img-div'>
                            <img className = 'show__img' src={movie.img} alt={movie.title} />
                        </div>
                    </div>
                </div>
                <div className='show__similar'>
                    {props.movie.original_title}
                </div>
            </Fragment>
        );
    }
    
    return (
        <main className="show">
            {movieDiv}
        </main>
    );
};

const mapStateToProps = state => {
    return {
        movie: state.movie
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onGetMovie: (id) => dispatch(actions.getMovie(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowMovie);