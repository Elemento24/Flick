import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroller';
import { animateScroll as scroll } from 'react-scroll';

import * as actions from '../../store/actions';
import TopButton from '../UI/TopButton';
import Card from '../UI/Card';
import Loader from '../UI/Loader';
import { ReactComponent as TrendingIcon } from '../../assets/rocket-launch.svg';

const Wishlist = (props) => {
    return (
        <div className="wishlist">
            <h1>This is the Page of Wishlist</h1>
        </div>
    );
};

// const mapStateToProps = state => {
//     return {
//         page: state.trending.trendingPage,
//         hasMore: state.trending.trendingHasMore,
//         movies: state.trending.trending,
//         loading: state.trending.trendingLoading
//     };
// };

// const mapDispatchToProps = dispatch => {
//     return {
//         onGetTrending: (page) => dispatch(actions.getTrending(page))
//     };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Trending);
export default Wishlist;