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
                <div>
                    <h1>{movie.title}</h1>
                    <img src={movie.img} alt={movie.title} style={{height: '400px'}}/>
                </div>
            );
        });
    }
    
    return (
        <div className="trending">
            <h1 className="heading-pri trending__heading">Trending Now ...</h1>
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