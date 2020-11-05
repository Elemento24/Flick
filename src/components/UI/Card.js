import React from 'react';

import Button from './Button';
import ToggleFav from '../Wishlist/ToggleFav';
import { ReactComponent as Star } from '../../assets/star.svg';

function movieClick(id) {

    let children = document.getElementById(`${id}`).childNodes;
    const content = children[4];

    for (let index = 1; index <= 3; index++) {
        children[index].classList.toggle(`card__overlay--${index}-active`);
    }

    content.classList.toggle('card__content--active');
}

const Card = props => {
    const link = `/movie/${props.movie.id}`;

    const favMovie = {
        id: props.movie.id,
        movie_id: props.movie.movie_id,
        title: props.movie.title,
        vote_average: props.movie.vote_average,
        img: props.movie.img,
        releaseYear: props.movie.releaseYear
    };

    return (
        <div className = 'card'>
            <div
                className='card__movie' 
                id={props.movie.movie_id}
                data-aos='fade-up'
                data-aos-duration="500"
                onClick={(id) => movieClick(props.movie.movie_id)}
            >
                <div className = "card__imgDiv">
                    <img className='card__img' src={props.movie.img} alt={props.movie.title}/>
                </div>
                <div className="card__overlay card__overlay--1"></div>
                <div className="card__overlay card__overlay--2"></div>
                <div className="card__overlay card__overlay--3"></div>
                <div className= "card__content" >
                    <ToggleFav  class = 'card__fav-icon' favMovie = {favMovie} />   
                    <h1 className='card__title mb-1'>{props.movie.title.substring(0,50)} {props.movie.title.length >= 50 ? '...' : null}</h1>
                    <p className = "card__year" >({props.movie.releaseYear})</p>
                    <div className="card__rating-box my-3">
                        <Star className="card__rating-star"/> 
                        <h1 className='card__rating'>{props.movie.vote_average}</h1>
                    </div>
                    <Button className='card__button' to={link} clickHand={props.scrollFun ? props.scrollFun : null}>
                        Read More
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Card;
