import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroller';
import { animateScroll as scroll } from 'react-scroll';

import * as actions from '../../store/actions';
import TopButton from '../UI/TopButton';
import Card from '../UI/Card';
import Loader from '../UI/Loader';
import { ReactComponent as TrendingIcon } from '../../assets/rocket-launch.svg';


const Trending = (props) => {
    let items = [];
    
    const scrollTop = (duration) => {
        scroll.scrollToTop({
            smooth: true,
            duration
        });
    };
    
    useEffect(() => {
        scrollTop(0);
    }, []);
    
    let content = (
        <div className = 'common__loader-container'>
            <div className = 'common__loader'>
                <Loader/>
            </div>
        </div>
    );
    
    if(props.movies){
        props.movies.forEach((movie,ind) => {
            items.push(
                <Card movie={movie} key={movie.movie_id}/>
            );
        });
    }
    
    if (!props.loading || props.movies.length > 0) {
        content = (
            <Fragment>
                <div className = "trending__heading-box">
                    <h1 className="heading-pri trending__heading">What's Trending</h1>
                    <TrendingIcon className = "common__heading-icon" />
                </div>
                <div className='trending__btn'>
                    <TopButton />
                </div>
                <InfiniteScroll
                    loadMore={(page) => props.onGetTrending(props.page)}
                    hasMore={props.hasMore}
                    threshold={20}
                    className='common__movies'
                >
                    {items}
                </InfiniteScroll>
            </Fragment>
        );
    }
    
    return (
        <div className="trending">
            {content}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        page: state.trending.trendingPage,
        hasMore: state.trending.trendingHasMore,
        movies: state.trending.trending,
        loading: state.trending.trendingLoading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onGetTrending: (page) => dispatch(actions.getTrending(page))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Trending);