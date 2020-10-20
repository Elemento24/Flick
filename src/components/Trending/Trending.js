import React from 'react';
import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroller';

import * as actions from '../../store/actions/action';
import Button from '../UI/Button';
import Card from '../UI/Card';
import { ReactComponent as TrendingIcon } from '../../assets/rocket-launch.svg';


const Trending = (props) => {
    
    let items = [];
    const loader = <div className="loader" key="loader">Loading ...</div>;
    
    function movieClick(id){
        let children = document.getElementById(`${id}`).childNodes;
        const overlay1 = children[1];
        const overlay2 = children[2];
        const overlay3 = children[3];
        const content = children[4];
        
        overlay1.classList.toggle('card__overlay--1-active');
        overlay2.classList.toggle('card__overlay--2-active');
        overlay3.classList.toggle('card__overlay--3-active');
        content.classList.toggle('card__content--active');
    }
    
    if(props.movies){
        props.movies.forEach((movie,ind) => {
            items.push(
                // <div
                //     className='trending__movie' 
                //     id={movie.id} 
                //     key={movie.id} 
                //     data-aos='fade-up'
                //     data-aos-duration="500"
                //     onClick={(id) => movieClick(movie.id)}
                // >
                //     <div className = "trending__imgDiv">
                //         <img className='trending__img' src={movie.img} alt={movie.title}/>
                //     </div>
                //     <div className="trending__overlay trending__overlay--1"></div>
                //     <div className="trending__overlay trending__overlay--2"></div>
                //     <div className="trending__overlay trending__overlay--3"></div>
                //     <div className= "trending__content" >
                //         <h1 className='trending__title mb-1'>{movie.title}</h1>
                //         <p className = "trending__year" >({movie.releaseYear})</p>
                //         <div className="trending__rating-box my-3">
                //             <Star className="trending__rating-star"/>
                //             <h1 className='trending__rating'>{movie.vote_average}</h1>
                //         </div>
                //         <Button className='trending__button'>Read More</Button>
                //     </div>
                // </div>
                <Card movie={movie} key={movie.id}/>
            );
        });
    }
    
    return (
        <div className="trending">
            <div className = "trending__heading-box">
                <h1 className="heading-pri trending__heading">Trending Now</h1>
                <TrendingIcon className = "trending__heading-icon" />
            </div>
            
            
            {/*<button onClick={(page) => props.onGetTrending(props.page)}>Click</button>*/}
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