import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroller';

import * as actions from '../../store/actions/action';

const Trending = (props) => {
    
    const loader = <div className="loader">Loading ...</div>;
    let items = [];
    
    if(props.movies){
        items = props.movies.map((movie,ind) => {
            // console.log(`${movie.title} - ${ind}`);
            return (
                <div>
                    <h1>{movie.title}</h1>
                </div>    
            );
        });
    }
    
    return (
        <div className="trending">
            <h1 className="heading-pri trending__heading">Trending Now ...</h1>
            <InfiniteScroll
                loadMore={(page) => props.onGetTrending(props.page)}
                hasMore={props.hasMore}
                loader={loader}
                useWindow={false}
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
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onGetTrending: (page) => dispatch(actions.getTrending(page))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Trending);