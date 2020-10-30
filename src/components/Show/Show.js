import React, {Fragment, useEffect} from 'react';
import {connect} from 'react-redux';
import { animateScroll as scroll } from 'react-scroll';

import * as actions from '../../store/actions/action';
import Card from '../UI/Card';
import CastCard from '../UI/CastCard';
import CrewCard from '../UI/CrewCard';
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
    
    const scrollTop = (duration) => {
        scroll.scrollToTop({
            smooth: true,
            duration
        });
    };
    
    useEffect(() => {
        onGetMovie(ID);
        scrollTop(0);
    }, [onGetMovie, ID]);
    
    
    if(props.loading){
        movieDiv = (
            <div className='show__loader'>
                <Loader />
            </div>    
        );
    }
    
    if(movie && !props.loading){
        const {date, month, year} = convertDate(movie.release_date);
        
        const i = 10;
        // Map over the Array of Cast
        const cast = [];
        for(let j = 0; j < movie.cast.length; j++){
            const actor = movie.cast[j];
            if(j < i && actor.profile_path){
                cast.push(<CastCard cast={actor} key={actor.credit_id} />);
            }
        }
        
        // Map over the Array of Crew
        const crews = movie.crew.filter((c) => {
            if (c.department === 'Production' || c.department === 'Writing' || c.department === 'Production') return true;
            return false;
        });
        const crew = crews.map(crew => <CrewCard crew={crew} key={crew.credit_id}/> );
        
        // Map over the Array of Similar Movies
        const similarMovies = movie.similar.map(movie => {
            return (
                <Card movie={movie} key={movie.movie_id} scrollFun={(duration) => scrollTop(100)}/>
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
                
                {movie.cast.length > 0 ? (
                    <div className='show__cast'>
                        <div className='show__castHeadBox my-7'>
                            <h1 className='heading-pri show__castHead'>Top Billed Cast</h1>
                        </div>
                        <div className='show__castings'>
                            {cast}
                        </div>
                    </div>
                ) : null}
                
                {movie.crew.length > 0 ? (
                    <div className='show__crew'>
                        <div className='show__crewHeadBox my-7'>
                            <h1 className='heading-pri show__crewHead'>Credits</h1>
                        </div>
                        <div className='show__credits'>
                            {crew}
                        </div>
                    </div>
                ) : null}
                
                {movie.similar.length > 0 ? (
                    <div className='show__similar'>
                        <div className='show__simHeadBox my-7'>
                            <h1 className='heading-pri show__simHead'>Similar Movies</h1>
                        </div>
                        <div className='show__simMovies'>
                            {similarMovies}
                        </div>
                    </div>
                ) : null}
                
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