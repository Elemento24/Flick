import React from 'react';
import {Link} from 'react-router-dom';

import Button from './Button';
import { ReactComponent as Star } from '../../assets/star.svg';

function movieClick(id){
    let children = document.getElementById(`${id}`).childNodes;
    const content = children[4];
    
    for (let index=1; index<=3; index++) {
        children[index].classList.toggle(`card__overlay--${index}-active`);
    }
    
    content.classList.toggle('card__content--active');
}

const Card = props => {
    const link = `/movie/${props.movie.id}`;
    
    return (
            <div
                className='card__movie' 
                id={props.movie.id}
                data-aos='fade-up'
                data-aos-duration="500"
                onClick={(id) => movieClick(props.movie.id)}
            >
                <div className = "card__imgDiv">
                    <img className='card__img' src={props.movie.img} alt={props.movie.title}/>
                </div>
                <div className="card__overlay card__overlay--1"></div>
                <div className="card__overlay card__overlay--2"></div>
                <div className="card__overlay card__overlay--3"></div>
                <div className= "card__content" >
                    <h1 className='card__title mb-1'>{props.movie.title}</h1>
                    <p className = "card__year" >({props.movie.releaseYear})</p>
                    <div className="card__rating-box my-3">
                        <Star className="card__rating-star"/> 
                        <h1 className='card__rating'>{props.movie.vote_average}</h1>
                    </div>
                    <Button className='card__button'>
                        <Link className="card__btn" to={link}>
                            Read More
                        </Link>
                    </Button>
                </div>
            </div>
    );
};

export default Card;