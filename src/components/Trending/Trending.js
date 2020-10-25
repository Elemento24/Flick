import React from 'react';
import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroller';

import * as actions from '../../store/actions/action';
import TopButton from '../UI/TopButton';
import Card from '../UI/Card';
import { ReactComponent as TrendingIcon } from '../../assets/rocket-launch.svg';


const Trending = (props) => {
    let items = [];
    const loader = <div className="loader" key="loader">Loading ...</div>;
    
    if(props.movies){
        props.movies.forEach((movie,ind) => {
            items.push(
                <Card movie={movie} key={movie.id}/>
            );
        });
    }
    
    return (
        <div className="trending">
            <div className = "trending__heading-box">
                <h1 className="heading-pri trending__heading">What's Trending</h1>
                <TrendingIcon className = "trending__heading-icon" />
            </div>
            <div className='trending__btn'>
                <TopButton />
            </div>
            <InfiniteScroll
                loadMore={(page) => props.onGetTrending(props.page)}
                hasMore={props.hasMore}
                loader={loader}
                threshold={20}
                className='trending__movies'
            >
                {items}
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