import React, {Fragment, useEffect} from 'react';
import {connect} from 'react-redux';
import { animateScroll as scroll } from 'react-scroll';

import * as actions from '../../store/actions/action';
import Card from '../UI/Card';
import Loader from '../UI/Loader';
import TopButton from '../UI/TopButton';
import { ReactComponent as Clock } from '../../assets/clock.svg';
import { ReactComponent as Star } from '../../assets/show-star.svg';
import { ReactComponent as Calender } from '../../assets/calendar.svg';
import {convertDate} from '../../shared/utility';

const ShowMovie = props => {
    const ID = props.match.params.id;
    const {onGetMovie, movie} = props;
    let movieDiv = null;
    
    useEffect(() => {
        onGetMovie(ID);
    }, [onGetMovie, ID]);
    
    const scrollTop = () => {
        scroll.scrollToTop({
            smooth: true,
            duration: 100
        });
    };
    
    if(props.loading){
        movieDiv = (
            <div className='show__loader'>
                <Loader />
            </div>    
        );
    }
    
    if(movie && !props.loading){
        const {date, month, year} = convertDate(movie.release_date);
        const similarMovies = movie.sim_movies.map(movie => {
            return (
                <Card movie={movie} key={movie.id} scrollFun={scrollTop}/>
            );
        });
        
        movieDiv = (
            <Fragment>
                <div className='show__title-box'>
                    <h1 className='heading-pri show__title'>{movie.title}</h1>
                    {movie.tagline ? <p className='show__tag'>-{movie.tagline}</p> : null}
                </div>
                
                <div className='show__movie'>
                    <div className='show__content'>
                        <div className = "show__overview">{movie.overview}</div>
                        <div className='show__genres'>
                            {movie.genres.map(g => g.name).join(',  ')}
                        </div>
                        <div className = 'show__release-date'>
                            <Calender className = "show__release-icon" />
                            <div className='show__date'>{date}</div>
                            <div className='show__my'>
                                <span>{month}</span>
                                <span>({year})</span>
                            </div>
                        </div>
                        <div className='show__stats'>
                            <div className='show__runtime'>
                                <Clock className = "show__clock-icon" />
                                <div className='show__time'><span>{movie.runtime}</span> Minutes</div>
                            </div>  
                            <div className='show__rating'>
                                <Star className = "show__star-icon" />
                                <div className='show__star'><span>{movie.vote_average}</span> ({movie.vote_count})</div>
                            </div>
                        </div>
                    </div>
                    <div className='show__img-box'>
                        <div className = 'show__img-div'>
                            <img className = 'show__img' src={movie.img} alt={movie.title} />
                        </div>
                    </div>
                </div>
                
                <div className='show__similar'>
                
                    <div className='show__simHeadBox my-7'>
                        <h1 className='heading-pri show__simHead'>Similar Movies...</h1>
                    </div>
                    
                    <div className='show__simMovies'>
                        {similarMovies}
                    </div>
                
                </div>
                
            </Fragment>
        );
    }
    
    return (
        <Fragment>
            <div className="show mb-10">
                <div className = "show__top-button">
                    <TopButton />
                </div>
                {movieDiv}
            </div>
        </Fragment>
        
    );
};

const mapStateToProps = state => {
    return {
        movie: state.movie,
        loading: state.movieLoading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onGetMovie: (id) => dispatch(actions.getMovie(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowMovie);