import React, { useState, useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { animateScroll as scroll } from 'react-scroll';

import * as actions from '../../store/actions';
import TopButton from '../UI/TopButton';
import Card from '../UI/Card';
import Loader from '../UI/Loader';
import {ReactComponent as GlassIcon} from '../../assets/search.svg';
import {ReactComponent as Popcorn} from '../../assets/popcorn.svg';

const SearchResults = (props) => {
    
    const scrollTop = (duration) => {
        scroll.scrollToTop({
            smooth: true,
            duration
        });
    };
    
    useEffect(() => {
        scrollTop(0);
    }, []);
    
    const [inputValue, setInputValue] = useState('');
    const [timer, setTimer] = useState(null);
    
    const inputChangedHandler = (event) => {
        let value = event.target.value;
        setInputValue(value);
        clearTimeout(timer);
        let currentTimer = setTimeout(() => {
            props.onSearch(value);
        }, 1000);
        setTimer(currentTimer);
    };
    
    let items = [];
    let content = (
        <div className = 'search__loader-container'>
            <div className = 'search__loader'>
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
    
    if (!props.loading && props.movies) {
        content = (
            <Fragment>
                <div className='search__btn'>
                    <TopButton />
                </div>
                <div className='search__movies my-10'>
                    {items}
                </div>
            </Fragment>
        );
    }
    
    return (
        <div className='search'>
            <div className='search__heading-box'>
                <h1 className='heading-pri search__heading'>
                    Pick Up a Popcorn Partner 
                    <span className='ml-2'>
                        <Popcorn className='search__heading-icon' />
                    </span>
                </h1>
            </div>
            <div className = 'search__input-container' >
                <GlassIcon className = 'search__input-icon' />
                <input className='search__input' placeholder='Search from over a Billion Movies' type='text' onChange = {(event) => inputChangedHandler(event)} value={inputValue} />
            </div>
            {content}
        </div>    
    );
};

const mapStateToProps = state => {
    return {
        movies: state.search.searchResults,
        loading: state.search.searchLoading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSearch: (query) => dispatch(actions.getSearchResults(query))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);