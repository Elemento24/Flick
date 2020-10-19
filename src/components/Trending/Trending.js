import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroller';

import * as actions from '../../store/actions/action';

const Trending = (props) => {
    
    let items = [];
    const loader = <div className="loader">Loading ...</div>;
    
    if(props.movies){
        props.movies.forEach((movie,ind) => {
            items.push(
                <div className='trending__movie'>
                    <div className = "trending__imgDiv">
                        <img class='trending__img' src={movie.img} alt={movie.title}/>
                    </div>
                    <div className="trending__overlay"></div>
                    <div className="trending__overlay trending__overlay--1"></div>
                    <div className="trending__overlay trending__overlay--2"></div>
                    <div className="trending__overlay trending__overlay--3"></div>
                    <div className= "trending__content" >
                        <h2 className='trending__title'>{movie.title}</h2>
                        <p className = "trending__year" >{movie.releaseYear}</p>
                        <h1 className='trending__rating'> STAR {movie.vote_average}</h1>
                    </div>
                </div>
            );
        });
    }
    
    return (
        <div className="trending">
            <h1 className="heading-pri trending__heading">Trending Now</h1>
            {/*<button onClick={(page) => props.onGetTrending(props.page)}>Click</button>*/}
            <InfiniteScroll
                loadMore={(page) => props.onGetTrending(props.page)}
                hasMore={props.hasMore}
                loader={loader}
                threshold={20}
            >
                <div className='trending__movies'>
                    {items}
                </div>
            </InfiniteScroll>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        page: state.trendingPage,
        hasMore: state.trendingHasMore,
        movies: state.trending
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onGetTrending: (page) => dispatch(actions.getTrending(page))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Trending);