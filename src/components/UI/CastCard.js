import React from 'react';

const CastCard = props => {
    const {cast} = props;
    
    return (
        <div className='cast'>
            <div className='cast__imgBox'>
                <img src={cast.img} alt={cast.name} className='cast__img' />
            </div>
            <div className='cast__detailsBox'>
                <p className='cast__name'>{cast.name}</p>
                <p className='cast__char'><span className='cast__as'>as</span> {cast.character}</p>
            </div>
        </div>
    );
};

export default CastCard;